import { Request, Response, Router } from "express";
import { User } from "../entities/User";
import userMiddleware from "../middlewares/user";
import Question from "../entities/Question";

const getUserData = async (req: Request, res: Response) => {
  try {
    // 유저 정보 가져오기
    const user = await User.findOneOrFail({
      where: { user_no: req.params.user_id },
      select: ["user_no", "createdAt"],
    });

    // 유저가 쓴 포스트 정보 가져오기
    const questions = await Question.find({
      where: { user_no: user.user_no },
      relations: ["sub"],
    });

     let userData: any[] = [];

    questions.forEach((p) => userData.push({ type: "Question", ...p.toJSON() }));

    // 최신 정보가 먼저 오게 순서 정렬
    userData.sort((a, b) => {
      if (b.createdAt > a.createdAt) return 1;
      if (b.createdAt < a.createdAt) return -1;
      return 0;
    });

    return res.json({ user, userData });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "문제가 발생했습니다." });
  }
};

const router = Router();
router.get("/:user_id", userMiddleware, getUserData);

export default router;
