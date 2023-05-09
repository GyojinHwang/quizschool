import { Request, Response, Router } from "express";
import { User } from "../entities/User";
import userMiddleware from "../middlewares/user";
<<<<<<< HEAD
import Question from "../entities/Question";
=======
import Post from "../entities/Post";
import Comment from "../entities/Comment";
>>>>>>> 63a9535 (initial)

const getUserData = async (req: Request, res: Response) => {
  try {
    // 유저 정보 가져오기
    const user = await User.findOneOrFail({
<<<<<<< HEAD
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
=======
      where: { username: req.params.username },
      select: ["username", "createdAt"],
    });

    // 유저가 쓴 포스트 정보 가져오기
    const posts = await Post.find({
      where: { username: user.username },
      relations: ["comments", "votes", "sub"],
    });

    // 유저가 쓴 댓글 정보 가져오기
    const comments = await Comment.find({
      where: { username: user.username },
      relations: ["post"],
    });

    if (res.locals.user) {
      const { user } = res.locals;
      posts.forEach((p) => p.setUserVote(user));
      comments.forEach((c) => c.setUserVote(user));
    }

    let userData: any[] = [];

    posts.forEach((p) => userData.push({ type: "Post", ...p.toJSON() }));
    comments.forEach((c) => userData.push({ type: "Comment", ...c.toJSON() }));
>>>>>>> 63a9535 (initial)

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
<<<<<<< HEAD
router.get("/:user_id", userMiddleware, getUserData);
=======
router.get("/:username", userMiddleware, getUserData);
>>>>>>> 63a9535 (initial)

export default router;
