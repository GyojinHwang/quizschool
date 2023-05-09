import { Request, Response, Router } from "express";
import userMiddleware from "../middlewares/user";
import authMiddleware from "../middlewares/auth";
import Game from "../entities/Game";
import Question from "../entities/Question";
import { AppDataSource } from "../data-source";
import { validate } from 'class-validator';
// import Comment from "../entities/Comment";

const mapError = (errors: Object[]) => {
  return errors.reduce((prev: any, err: any) => {
    prev[err.property] = Object.entries(err.constraints)[0][1];
    return prev;
  }, {});
};


const getQuestions = async (req: Request, res: Response) => {
  const currentPage: number = (req.query.page || 0) as number;
  const perPage: number = (req.query.count || 8) as number;

  try {
    const questions = await Question.find({
      order: { createdAt: "DESC" },
      relations: ["game"],
      // skip: currentPage * perPage,
      // take: perPage
    })

    return res.json(questions);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "문제가 발생했습니다." });
  }
}

const fetchQuestion = async (req: Request, res: Response) => {
  try {
    const questions = await Question.find({
      order: { createdAt: "DESC" },
      relations: ["game"],

    })

    return res.json(questions);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "문제가 발생했습니다." });
  }
}


const unityQuestion = async (req: Request, res: Response) => {
  const game_no = req.params.game_no;
  const question = await AppDataSource.createQueryBuilder()
    .select(
      `q.question_title, q.question_answer1, q.question_answer2, q.question_answer3, q.question_answer4, q.question_answer_no, q.question_description`
    )
    .from(Question, "q")
    .where(`q.game_no = :game_no`, { game_no: game_no })
    .execute();
  return res.json(question);

}

const getQuestion = async (req: Request, res: Response) => {
  const game_no = req.params.game_no;
  try {
    const question = await Question.find({
      where: { game_no: game_no },
      relations: ["game"],

    });


    return res.send(question);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: "문제를 찾을 수 없습니다." });
  }
};


const createQuestion = async (req: Request, res: Response) => {
  const { active, game, game_no,
    question1_title,
    question2_title,
    question3_title,
    question4_title,
    question5_title,
    question6_title,
    question7_title,
    question8_title,
    question9_title,
    question10_title,
    question1_no,
    question2_no,
    question3_no,
    question4_no,
    question5_no,
    question6_no,
    question7_no,
    question8_no,
    question9_no,
    question10_no,
    question1_answer1,
    question2_answer1,
    question3_answer1,
    question4_answer1,
    question5_answer1,
    question6_answer1,
    question7_answer1,
    question8_answer1,
    question9_answer1,
    question10_answer1,
    question1_answer2,
    question2_answer2,
    question3_answer2,
    question4_answer2,
    question5_answer2,
    question6_answer2,
    question7_answer2,
    question8_answer2,
    question9_answer2,
    question10_answer2,
    question1_answer3,
    question2_answer3,
    question3_answer3,
    question4_answer3,
    question5_answer3,
    question6_answer3,
    question7_answer3,
    question8_answer3,
    question9_answer3,
    question10_answer3,
    question1_answer4,
    question2_answer4,
    question3_answer4,
    question4_answer4,
    question5_answer4,
    question6_answer4,
    question7_answer4,
    question8_answer4,
    question9_answer4,
    question10_answer4,
    question1_answer_no,
    question2_answer_no,
    question3_answer_no,
    question4_answer_no,
    question5_answer_no,
    question6_answer_no,
    question7_answer_no,
    question8_answer_no,
    question9_answer_no,
    question10_answer_no,
    question1_description,
    question2_description,
    question3_description,
    question4_description,
    question5_description,
    question6_description,
    question7_description,
    question8_description,
    question9_description,
    question10_description
  } = req.body;

  const user = res.locals.user;

  try {
    let errors: any = {};

    const gameRecord = await Game.findOneByOrFail({ game_no: game });
    const question1 = new Question();

    errors = await validate(question1);
    if (errors.length > 0) return res.status(400).json(mapError(errors));

    question1.question_no = question1_no;
    question1.user = user;
    question1.question_title = question1_title;
    question1.question_answer1 = question1_answer1;
    question1.question_answer2 = question1_answer2;
    question1.question_answer3 = question1_answer3;
    question1.question_answer4 = question1_answer4;
    question1.question_answer_no = question1_answer_no;
    question1.active = active;
    question1.game = game_no;
    question1.game_no = game_no;
    question1.question_description = question1_description;
    await question1.save();

    const question2 = new Question();
    errors = await validate(question2);
    if (errors.length > 0) return res.status(400).json(mapError(errors));
    question2.question_no = question2_no;
    question2.user = user;
    question2.question_title = question2_title;
    question2.question_answer1 = question2_answer1;
    question2.question_answer2 = question2_answer2;
    question2.question_answer3 = question2_answer3;
    question2.question_answer4 = question2_answer4;
    question2.question_answer_no = question2_answer_no;
    question2.active = active;
    question2.game = game_no;
    question2.game_no = game_no;
    question2.question_description = question2_description;
    await question2.save();

    const question3 = new Question();
    errors = await validate(question3);
    if (errors.length > 0) return res.status(400).json(mapError(errors));
    question3.question_no = question3_no;
    question3.user = user;
    question3.question_title = question3_title;
    question3.question_answer1 = question3_answer1;
    question3.question_answer2 = question3_answer2;
    question3.question_answer3 = question3_answer3;
    question3.question_answer4 = question3_answer4;
    question3.question_answer_no = question3_answer_no;
    question3.active = active;
    question3.game = game_no;
    question3.game_no = game_no;
    question3.question_description = question3_description;
    await question3.save();

    const question4 = new Question();
    errors = await validate(question4);
    if (errors.length > 0) return res.status(400).json(mapError(errors));
    question4.question_no = question4_no;
    question4.user = user;
    question4.question_title = question4_title;
    question4.question_answer1 = question4_answer1;
    question4.question_answer2 = question4_answer2;
    question4.question_answer3 = question4_answer3;
    question4.question_answer4 = question4_answer4;
    question4.question_answer_no = question4_answer_no;
    question4.active = active;
    question4.game = game_no;
    question4.game_no = game_no;
    question4.question_description = question4_description;
    await question4.save();

    const question5 = new Question();
    errors = await validate(question5);
    if (errors.length > 0) return res.status(400).json(mapError(errors));
    question5.question_no = question5_no;
    question5.user = user;
    question5.question_title = question5_title;
    question5.question_answer1 = question5_answer1;
    question5.question_answer2 = question5_answer2;
    question5.question_answer3 = question5_answer3;
    question5.question_answer4 = question5_answer4;
    question5.question_answer_no = question5_answer_no;
    question5.active = active;
    question5.game = game_no;
    question5.game_no = game_no;
    question5.question_description = question5_description;
    await question5.save();

    const question6 = new Question();
    errors = await validate(question6);
    if (errors.length > 0) return res.status(400).json(mapError(errors));
    question6.question_no = question6_no;
    question6.user = user;
    question6.question_title = question6_title;
    question6.question_answer1 = question6_answer1;
    question6.question_answer2 = question6_answer2;
    question6.question_answer3 = question6_answer3;
    question6.question_answer4 = question6_answer4;
    question6.question_answer_no = question6_answer_no;
    question6.active = active;
    question6.game = game_no;
    question6.game_no = game_no;
    question6.question_description = question6_description;
    await question6.save();

    const question7 = new Question();
    errors = await validate(question7);
    if (errors.length > 0) return res.status(400).json(mapError(errors));
    question7.question_no = question7_no;
    question7.user = user;
    question7.question_title = question7_title;
    question7.question_answer1 = question7_answer1;
    question7.question_answer2 = question7_answer2;
    question7.question_answer3 = question7_answer3;
    question7.question_answer4 = question7_answer4;
    question7.question_answer_no = question7_answer_no;
    question7.active = active;
    question7.game = game_no;
    question7.game_no = game_no;
    question7.question_description = question7_description;
    await question7.save();

    const question8 = new Question();
    errors = await validate(question8);
    if (errors.length > 0) return res.status(400).json(mapError(errors));
    question8.question_no = question8_no;
    question8.user = user;
    question8.question_title = question8_title;
    question8.question_answer1 = question8_answer1;
    question8.question_answer2 = question8_answer2;
    question8.question_answer3 = question8_answer3;
    question8.question_answer4 = question8_answer4;
    question8.question_answer_no = question8_answer_no;
    question8.active = active;
    question8.game = game_no;
    question8.game_no = game_no;
    question8.question_description = question8_description;
    await question8.save();

    const question9 = new Question();
    errors = await validate(question9);
    if (errors.length > 0) return res.status(400).json(mapError(errors));
    question9.question_no = question9_no;
    question9.user = user;
    question9.question_title = question9_title;
    question9.question_answer1 = question9_answer1;
    question9.question_answer2 = question9_answer2;
    question9.question_answer3 = question9_answer3;
    question9.question_answer4 = question9_answer4;
    question9.question_answer_no = question9_answer_no;
    question9.active = active;
    question9.game = game_no;
    question9.game_no = game_no;
    question9.question_description = question9_description;
    await question9.save();

    const question10 = new Question();
    errors = await validate(question10);
    if (errors.length > 0) return res.status(400).json(mapError(errors));
    question10.question_no = question10_no;
    question10.user = user;
    question10.question_title = question10_title;
    question10.question_answer1 = question10_answer1;
    question10.question_answer2 = question10_answer2;
    question10.question_answer3 = question10_answer3;
    question10.question_answer4 = question10_answer4;
    question10.question_answer_no = question10_answer_no;
    question10.active = active;
    question10.game = game_no;
    question10.game_no = game_no;
    question10.question_description = question10_description;
    await question10.save();

    return res.json();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};

const updateQuestion = async (req: Request, res: Response) => {
  const {
    game_no,
    question1_title,
    question2_title,
    question3_title,
    question4_title,
    question5_title,
    question6_title,
    question7_title,
    question8_title,
    question9_title,
    question10_title,
    question1_no,
    question2_no,
    question3_no,
    question4_no,
    question5_no,
    question6_no,
    question7_no,
    question8_no,
    question9_no,
    question10_no,
    question1_answer1,
    question2_answer1,
    question3_answer1,
    question4_answer1,
    question5_answer1,
    question6_answer1,
    question7_answer1,
    question8_answer1,
    question9_answer1,
    question10_answer1,
    question1_answer2,
    question2_answer2,
    question3_answer2,
    question4_answer2,
    question5_answer2,
    question6_answer2,
    question7_answer2,
    question8_answer2,
    question9_answer2,
    question10_answer2,
    question1_answer3,
    question2_answer3,
    question3_answer3,
    question4_answer3,
    question5_answer3,
    question6_answer3,
    question7_answer3,
    question8_answer3,
    question9_answer3,
    question10_answer3,
    question1_answer4,
    question2_answer4,
    question3_answer4,
    question4_answer4,
    question5_answer4,
    question6_answer4,
    question7_answer4,
    question8_answer4,
    question9_answer4,
    question10_answer4,
    question1_answer_no,
    question2_answer_no,
    question3_answer_no,
    question4_answer_no,
    question5_answer_no,
    question6_answer_no,
    question7_answer_no,
    question8_answer_no,
    question9_answer_no,
    question10_answer_no,
    question1_description,
    question2_description,
    question3_description,
    question4_description,
    question5_description,
    question6_description,
    question7_description,
    question8_description,
    question9_description,
    question10_description
  } = req.body;

  try {
    let errors: any = {};


    await AppDataSource.getRepository(Question).update({question_no: question1_no, game_no: game_no},
      {
        question_title: question1_title,
        question_answer1: question1_answer1,
        question_answer2: question1_answer2,
        question_answer3: question1_answer3,
        question_answer4: question1_answer4,
        question_answer_no: question1_answer_no,
        question_description: question1_description,
      }
      )

      await AppDataSource.getRepository(Question).update({question_no: question2_no, game_no: game_no},
        {
          question_title: question2_title,
          question_answer1: question2_answer1,
          question_answer2: question2_answer2,
          question_answer3: question2_answer3,
          question_answer4: question2_answer4,
          question_answer_no: question2_answer_no,
          question_description: question2_description,
        }
        )

        await AppDataSource.getRepository(Question).update({question_no: question3_no, game_no: game_no},
          {
            question_title: question3_title,
            question_answer1: question3_answer1,
            question_answer2: question3_answer2,
            question_answer3: question3_answer3,
            question_answer4: question3_answer4,
            question_answer_no: question3_answer_no,
            question_description: question3_description,
          }
          )

          await AppDataSource.getRepository(Question).update({question_no: question4_no, game_no: game_no},
            {
              question_title: question4_title,
              question_answer1: question4_answer1,
              question_answer2: question4_answer2,
              question_answer3: question4_answer3,
              question_answer4: question4_answer4,
              question_answer_no: question4_answer_no,
              question_description: question4_description,
            }
            )

            await AppDataSource.getRepository(Question).update({question_no: question5_no, game_no: game_no},
              {
                question_title: question5_title,
                question_answer1: question5_answer1,
                question_answer2: question5_answer2,
                question_answer3: question5_answer3,
                question_answer4: question5_answer4,
                question_answer_no: question5_answer_no,
                question_description: question5_description,
              }
              )

              await AppDataSource.getRepository(Question).update({question_no: question6_no, game_no: game_no},
                {
                  question_title: question6_title,
                  question_answer1: question6_answer1,
                  question_answer2: question6_answer2,
                  question_answer3: question6_answer3,
                  question_answer4: question6_answer4,
                  question_answer_no: question6_answer_no,
                  question_description: question6_description,
                }
                )

                await AppDataSource.getRepository(Question).update({question_no: question7_no, game_no: game_no},
                  {
                    question_title: question7_title,
                    question_answer1: question7_answer1,
                    question_answer2: question7_answer2,
                    question_answer3: question7_answer3,
                    question_answer4: question7_answer4,
                    question_answer_no: question7_answer_no,
                    question_description: question7_description,
                  }
                  )

                  await AppDataSource.getRepository(Question).update({question_no: question8_no, game_no: game_no},
                    {
                      question_title: question8_title,
                      question_answer1: question8_answer1,
                      question_answer2: question8_answer2,
                      question_answer3: question8_answer3,
                      question_answer4: question8_answer4,
                      question_answer_no: question8_answer_no,
                      question_description: question8_description,
                    }
                    )

                    await AppDataSource.getRepository(Question).update({question_no: question9_no, game_no: game_no},
                      {
                        question_title: question9_title,
                        question_answer1: question9_answer1,
                        question_answer2: question9_answer2,
                        question_answer3: question9_answer3,
                        question_answer4: question9_answer4,
                        question_answer_no: question9_answer_no,
                        question_description: question9_description,
                      }
                      )

                      await AppDataSource.getRepository(Question).update({question_no: question10_no, game_no: game_no},
                        {
                          question_title: question10_title,
                          question_answer1: question10_answer1,
                          question_answer2: question10_answer2,
                          question_answer3: question10_answer3,
                          question_answer4: question10_answer4,
                          question_answer_no: question10_answer_no,
                          question_description: question10_description,
                        }
                        )
    return res.json(question1_title);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });

  }


};

const router = Router();
router.get("/:game_no", userMiddleware, getQuestion);
router.post("/", userMiddleware, authMiddleware, createQuestion);
router.get("/", userMiddleware, getQuestions);
router.get("/test/:game_no", userMiddleware, unityQuestion);
router.get("/", userMiddleware, fetchQuestion);
router.post("/update", userMiddleware, authMiddleware, updateQuestion);

export default router;
