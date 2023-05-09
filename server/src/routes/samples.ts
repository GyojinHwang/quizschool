import { Request, Response, Router } from "express";
import userMiddleware from "../middlewares/user";
import authMiddleware from "../middlewares/auth";
import Sample from "../entities/Sample";
import Game from "../entities/Game";
import Question from "../entities/Question";
import { AppDataSource } from "../data-source";

const fetch = async (req: Request, res: Response) => {
  const { grade, subject, chapter } = req.body;

  const samples = await Sample.find({
    where: {
      sample_grade: grade,
      sample_subject: subject,
      sample_chapter: chapter,
    },
  });

  res.send(samples);
}

const search = async (req: Request, res: Response) => {
  const { grade, subject, chapter } = req.body;

  let query = Sample.createQueryBuilder("sample");

  if (grade) {
    query = query.andWhere("sample.sample_grade = :grade", { grade });
  }
  if (subject) {
    query = query.andWhere("sample.sample_subject = :subject", { subject });
  }
  if (chapter) {
    query = query.andWhere("sample.sample_chapter = :chapter", { chapter });
  }
  
  const samples = await query.getMany();
  res.send(samples);
}


const router = Router();
router.get("/", userMiddleware, fetch);
router.post("/search", userMiddleware, search);

export default router;
