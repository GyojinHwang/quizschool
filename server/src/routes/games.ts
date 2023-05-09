import { getRepository, JoinColumn } from 'typeorm';
import { NextFunction, Request, Response, Router } from "express";
import { User } from "../entities/User";
import userMiddleware from "../middlewares/user";
import authMiddleware from "../middlewares/auth";
import { isEmpty, validate } from "class-validator";
import { AppDataSource } from "../data-source";
import Game from "../entities/Game";
import Question from "../entities/Question";
import multer, { FileFilterCallback } from "multer";
import { makeId } from "../utils/helpers";
import path from "path";
import { fstat, unlinkSync } from "fs";
const router = Router();

const mapError = (errors: Object[]) => {
  return errors.reduce((prev: any, err: any) => {
    prev[err.property] = Object.entries(err.constraints)[0][1];
    return prev;
  }, {});
};

const removeGame = async (req: Request, res: Response) => {
  const { game_no } = req.body;

  try {
    const response = await AppDataSource.getRepository(Game).update({game_no: game_no}, {
      active: false
    })
    return res.json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }

}


const getGame = async (req: Request, res: Response) => {
  const game_no = req.params.game_no;  
  
  try {
    const game = await Game.findOneByOrFail({ game_no });

    // 포스트를 생성한 후에 해당 game에 속하는 포스트 정보들을 넣어주기
    const questions = await Question.find({
      where: { game_no: game.game_no},
      order: { game_no: "ASC" },
    });

    game.questions = questions;

    return res.json(game);
  } catch (error) {
    return res.status(404).json({ error: "게임을 찾을 수 없습니다." });
  }
};

const createGame = async (req: Request, res: Response, next) => {
  const { active, game_no, template_no, game_name } = req.body;

  try {
    const user: User = res.locals.user;
    let errors: any = {};
    if (!(template_no === "1" || template_no === "2")) errors.template_no = "잘못된 템플릿 번호입니다."; 
  
    // if (!game_name) errors.game_name = "게임 제목을 정해주세요";

    const isGame = await AppDataSource.getRepository(Game)
      .createQueryBuilder("game")
      .where("game.game_no = :game_no", { game_no: game_no })
      .getOne();

    if (isGame) errors.game_no = "게임이 이미 존재합니다.";
    if (Object.keys(errors).length > 0) {
      // throw errors;
      return res.status(400).json(errors);}

    const game = new Game();
    game.template_no = template_no;
    game.game_name = game_name;
    game.user = user;
    game.game_no = game_no;
    game.active = active;

    errors = await validate(game);
    if (errors.length > 0) return res.status(400).json(mapError(errors));
    
    await game.save();
    return res.json(game);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "문제가 발생했습니다." });
  }
};

const updateGame = async (req: Request, res: Response, next) => {
  const { game_no, game_name } = req.body;

  try {
    // const user: User = res.locals.user;
    let errors: any = {};

    // const isGame = await AppDataSource.getRepository(Game)
    //   .createQueryBuilder("game")
    //   .where("game.game_no = :game_no", { game_no: game_no })
    //   .getOne();

    // if (isGame) errors.game_no = "게임이 이미 존재합니다.";
    // if (Object.keys(errors).length > 0) {
    //   return res.status(400).json(errors);}

    // const game = new Game();
    // game.game_no = game_no;
    // game.game_name = game_name;

    // errors = await validate(game);
    // if (errors.length > 0) return res.status(400).json(mapError(errors));

    const game = await AppDataSource.getRepository(Game).update({game_no: game_no},{ game_name: game_name })
    return res.json(game);

  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "문제가 발생했습니다." });
  }
};


const topGames = async (req: Request, res: Response) => {
  try {
    const user_nos = req.params.user_no;

    const imageUrlExp = `COALESCE('${process.env.APP_URL}/images/' ||g."imageUrn",'https://www.gravatar.com/avatar?d=mp&f=y')`;
    const games = await AppDataSource.createQueryBuilder()
      .select(
        `g.game_name, g.game_no, g.user_no, g.createdAt, ${imageUrlExp} as "imageUrl", count(q.id) as "questionCount"`
      )
      .from(Game, "g")
      .leftJoin(Question, "q", `g.game_no = q."game_no"`)
      .leftJoin(User, "u", `u.user_no = q."user_no"`)
      .groupBy('g.game_name, g.game_no, g.user_no, g.createdAt, "imageUrl"')
      .orderBy(`"questionCount"`, "DESC")
      .where(`g.user_no = :user_no`, {user_no: user_nos})
      .andWhere(`g.active = :active`, {active: true})
      .execute();
    return res.json(games);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "문제가 발생했습니다." });
  }
};

const countGame = async (req: Request, res: Response) => {
  try {
    const game_nos = req.params.game_no;
    const games = await AppDataSource.createQueryBuilder()
      .select(
        `g.game_name, g.game_no, count(q.id)+1 as "questionCount"`
      )
      .from(Game, "g")
      .leftJoin(Question, "q", `g.game_no = q."game_no"`)
      .groupBy('g.game_name, g.game_no')
      .where(`g.game_no = :game_no`, { game_no: game_nos })
      .execute();
    return res.json(games);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "문제가 발생했습니다." });
  }
};

const gameNumber = async (req: Request, res: Response) => {
  try {
    const games = await AppDataSource.createQueryBuilder()
      .select(
        `count(g.id)+1 as "gameNumber"`
      )
      .from(Game, "g")
      .execute();
    return res.json(games);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "문제가 발생했습니다." });
  }
};

const gameName = async (req: Request, res: Response) => {
  try {
    const game_nos = req.params.game_no;
    const game = await AppDataSource.createQueryBuilder()
      .select(
        `g.game_no, g.game_name`
      )
      .from(Game, "g")
      .groupBy(`g.game_no, g.game_name`)
      .orderBy(`g.game_no`, "DESC")
      .where(`g.game_no = :game_no`, { game_no: game_nos })
      .execute();
    return res.json(game);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "문제가 발생했습니다." });
  }
};

const ownGame = async (req: Request, res: Response, next: NextFunction) => {
  const user: User = res.locals.user;
  try {
    const game = await Game.findOneOrFail({ where: { game_no: req.params.game_no } });

    if (game.user_no !== user.user_no) {
      return res
        .status(403)
        .json({ error: "이 게임을 소유하고 있지 않습니다." });
    }

    res.locals.game = game;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: " 문제가 발생했습니다." });
  }
};

const upload = multer({
  storage: multer.diskStorage({
    destination: "public/images",
    filename: (_, file, callback) => {
      const name = makeId(10);
      callback(null, name + path.extname(file.originalname));
    },
  }),
  fileFilter: (_, file: any, callback: FileFilterCallback) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      callback(null, true);
    } else {
      callback(new Error("이미지가 아닙니다."));
    }
  },
});

const uploadgameImage = async (req: Request, res: Response) => {
  const game: Game = res.locals.game;
  try {
    const type = req.body.type;
    // 파일 유형을 지정치 않았을 시에는 업로든 된 파일 삭제
    if (type !== "image" && type !== "banner") {
      if (!req.file?.path) {
        return res.status(400).json({ error: "유효하지 않은 파일" });
      }

      // 파일을 지워주기
      unlinkSync(req.file.path);
      return res.status(400).json({ error: "잘못된 유형" });
    }

    let oldImageUrn: string = "";

    if (type === "image") {
      // 사용중인 Urn 을 저장합니다. (이전 파일을 아래서 삭제하기 위해서)
      oldImageUrn = game.imageUrn || "";
      // 새로운 파일 이름을 Urn 으로 넣어줍니다.
      game.imageUrn = req.file?.filename || "";
    }
    await game.save();

    // 사용하지 않는 이미지 파일 삭제
    if (oldImageUrn !== "") {
      const fullFilename = path.resolve(
        process.cwd(),
        "public",
        "images",
        oldImageUrn
      );
      unlinkSync(fullFilename);
    }

    return res.json(game);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "문제가 발생했습니다." });
  }
};

const validator = async (req: Request, res: Response) => {
  const { active, game_name, template_no, game_no } = req.body;
  try {
    let errors: any = {};

    const game = new Game();
    game.game_name = game_name;
    game.template_no = template_no;
    game.game_no = game_no;
    game.active = active;

    errors = await validate(game);
    if (errors.length > 0) return res.status(400).json(mapError(errors));
    return res.json(game);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};

router.get("/:game_no", userMiddleware, getGame);
router.post("/create", userMiddleware, authMiddleware, createGame);
router.get("/top/:user_no", topGames);
router.get("/count/:game_no", countGame);
router.get("/name/:game_no", gameName);
router.get("/game/number", gameNumber);
router.get("")
router.post("/del/:game_no", userMiddleware, authMiddleware, removeGame);
// router.post("/validator",userMiddleware, authMiddleware, validator);
router.post("/update", userMiddleware, authMiddleware, updateGame);


router.post(
  "/:name/upload",
  userMiddleware,
  authMiddleware,
  ownGame,
  upload.single("file"),
  uploadgameImage
);

export default router;
