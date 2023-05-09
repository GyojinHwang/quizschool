import { Request, Response, Router } from "express";
import userMiddleware from "../middlewares/user";
import authMiddleware from "../middlewares/auth";
import formattedquestion from "../entities/Formattedquestions"
import { AppDataSource } from "../data-source";
import { validate } from 'class-validator';

const mapError = (errors: Object[]) => {
  return errors.reduce((prev: any, err: any) => {
    prev[err.property] = Object.entries(err.constraints)[0][1];
    return prev;
  }, {});
};


const createFormattedQuestion = async (req: Request, res: Response) => {
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
    question10_description,
    game_name
  } = req.body;

  let errors: any = {};

  try {
    if(!game_name) errors.game_name = "게임 제목을 입력하세요."

    if (!question1_title) errors.question1_title = "문제를 입력하세요.";
    if (!question1_answer1) errors.question1_answer1 = "문제를 입력하세요.";
    if (!question1_answer2) errors.question1_answer2 = "문제를 입력하세요.";
    if (!question1_answer3) errors.question1_answer3 = "문제를 입력하세요.";
    if (!question1_answer4) errors.question1_answer4 = "문제를 입력하세요.";
    if (!question1_answer_no) errors.question1_answer_no = "정답을 선택하세요.";
    if (!question2_title) errors.question2_title = "문제를 입력하세요.";
    if (!question2_answer1) errors.question2_answer1 = "문제를 입력하세요.";
    if (!question2_answer2) errors.question2_answer2 = "문제를 입력하세요.";
    if (!question2_answer3) errors.question2_answer3 = "문제를 입력하세요.";
    if (!question2_answer4) errors.question2_answer4 = "문제를 입력하세요.";
    if (!question2_answer_no) errors.question2_answer_no = "정답을 선택하세요.";
    if (!question3_title) errors.question3_title = "문제를 입력하세요.";
    if (!question3_answer1) errors.question3_answer1 = "문제를 입력하세요.";
    if (!question3_answer2) errors.question3_answer2 = "문제를 입력하세요.";
    if (!question3_answer3) errors.question3_answer3 = "문제를 입력하세요.";
    if (!question3_answer4) errors.question3_answer4 = "문제를 입력하세요.";
    if (!question3_answer_no) errors.question3_answer_no = "정답을 선택하세요.";
    if (!question4_title) errors.question4_title = "문제를 입력하세요.";
    if (!question4_answer1) errors.question4_answer1 = "문제를 입력하세요.";
    if (!question4_answer2) errors.question4_answer2 = "문제를 입력하세요.";
    if (!question4_answer3) errors.question4_answer3 = "문제를 입력하세요.";
    if (!question4_answer4) errors.question4_answer4 = "문제를 입력하세요.";
    if (!question4_answer_no) errors.question4_answer_no = "정답을 선택하세요.";
    if (!question5_title) errors.question5_title = "문제를 입력하세요.";
    if (!question5_answer1) errors.question5_answer1 = "문제를 입력하세요.";
    if (!question5_answer2) errors.question5_answer2 = "문제를 입력하세요.";
    if (!question5_answer3) errors.question5_answer3 = "문제를 입력하세요.";
    if (!question5_answer4) errors.question5_answer4 = "문제를 입력하세요.";
    if (!question5_answer_no) errors.question5_answer_no = "정답을 선택하세요.";
    if (!question6_title) errors.question6_title = "문제를 입력하세요.";
    if (!question6_answer1) errors.question6_answer1 = "문제를 입력하세요.";
    if (!question6_answer2) errors.question6_answer2 = "문제를 입력하세요.";
    if (!question6_answer3) errors.question6_answer3 = "문제를 입력하세요.";
    if (!question6_answer4) errors.question6_answer4 = "문제를 입력하세요.";
    if (!question6_answer_no) errors.question6_answer_no = "정답을 선택하세요.";
    if (!question7_title) errors.question7_title = "문제를 입력하세요.";
    if (!question7_answer1) errors.question7_answer1 = "문제를 입력하세요.";
    if (!question7_answer2) errors.question7_answer2 = "문제를 입력하세요.";
    if (!question7_answer3) errors.question7_answer3 = "문제를 입력하세요.";
    if (!question7_answer4) errors.question7_answer4 = "문제를 입력하세요.";
    if (!question7_answer_no) errors.question7_answer_no = "정답을 선택하세요.";
    if (!question8_title) errors.question8_title = "문제를 입력하세요.";
    if (!question8_answer1) errors.question8_answer1 = "문제를 입력하세요.";
    if (!question8_answer2) errors.question8_answer2 = "문제를 입력하세요.";
    if (!question8_answer3) errors.question8_answer3 = "문제를 입력하세요.";
    if (!question8_answer4) errors.question8_answer4 = "문제를 입력하세요.";
    if (!question8_answer_no) errors.question8_answer_no = "정답을 선택하세요.";
    if (!question9_title) errors.question9_title = "문제를 입력하세요.";
    if (!question9_answer1) errors.question9_answer1 = "문제를 입력하세요.";
    if (!question9_answer2) errors.question9_answer2 = "문제를 입력하세요.";
    if (!question9_answer3) errors.question9_answer3 = "문제를 입력하세요.";
    if (!question9_answer4) errors.question9_answer4 = "문제를 입력하세요.";
    if (!question9_answer_no) errors.question9_answer_no = "정답을 선택하세요.";
    if (!question10_title) errors.question10_title = "문제를 입력하세요.";
    if (!question10_answer1) errors.question10_answer1 = "문제를 입력하세요.";
    if (!question10_answer2) errors.question10_answer2 = "문제를 입력하세요.";
    if (!question10_answer3) errors.question10_answer3 = "문제를 입력하세요.";
    if (!question10_answer4) errors.question10_answer4 = "문제를 입력하세요.";
    if (!question10_answer_no) errors.question10_answer_no = "정답을 선택하세요.";
    
   if (Object.keys(errors).length > 0) {
      return res.status(400).json(errors);
    }
    
    const formattedQuestion = new formattedquestion();
    formattedQuestion.game_no = game_no;
    formattedQuestion.question1_title = question1_title; 
    formattedQuestion.question2_title =  question2_title; 
    formattedQuestion.question3_title =  question3_title; 
    formattedQuestion.question4_title =  question4_title; 
    formattedQuestion.question5_title =  question5_title; 
    formattedQuestion.question6_title =  question6_title; 
    formattedQuestion.question7_title =  question7_title; 
    formattedQuestion.question8_title =  question8_title; 
    formattedQuestion.question9_title =  question9_title; 
    formattedQuestion.question10_title =  question10_title; 
    formattedQuestion.question1_answer1 =  question1_answer1; 
    formattedQuestion.question2_answer1 =  question2_answer1; 
    formattedQuestion.question3_answer1 =  question3_answer1; 
    formattedQuestion.question4_answer1 =  question4_answer1; 
    formattedQuestion.question5_answer1 =  question5_answer1; 
    formattedQuestion.question6_answer1 =  question6_answer1; 
    formattedQuestion.question7_answer1 =  question7_answer1; 
    formattedQuestion.question8_answer1 =  question8_answer1; 
    formattedQuestion.question9_answer1 =  question9_answer1; 
    formattedQuestion.question10_answer1 =  question10_answer1; 
    formattedQuestion.question1_answer2 =  question1_answer2; 
    formattedQuestion.question2_answer2 =  question2_answer2; 
    formattedQuestion.question3_answer2 =  question3_answer2; 
    formattedQuestion.question4_answer2 =  question4_answer2; 
    formattedQuestion.question5_answer2 =  question5_answer2; 
    formattedQuestion.question6_answer2 =  question6_answer2; 
    formattedQuestion.question7_answer2 =  question7_answer2; 
    formattedQuestion.question8_answer2 =  question8_answer2; 
    formattedQuestion.question9_answer2 =  question9_answer2; 
    formattedQuestion.question10_answer2 =  question10_answer2; 
    formattedQuestion.question1_answer3 =  question1_answer3; 
    formattedQuestion.question2_answer3 =  question2_answer3; 
    formattedQuestion.question3_answer3 =  question3_answer3; 
    formattedQuestion.question4_answer3 =  question4_answer3; 
    formattedQuestion.question5_answer3 =  question5_answer3; 
    formattedQuestion.question6_answer3 =  question6_answer3; 
    formattedQuestion.question7_answer3 =  question7_answer3; 
    formattedQuestion.question8_answer3 =  question8_answer3; 
    formattedQuestion.question9_answer3 =  question9_answer3; 
    formattedQuestion.question10_answer3 =  question10_answer3; 
    formattedQuestion.question1_answer4 =  question1_answer4; 
    formattedQuestion.question2_answer4 =  question2_answer4; 
    formattedQuestion.question3_answer4 =  question3_answer4; 
    formattedQuestion.question4_answer4 =  question4_answer4; 
    formattedQuestion.question5_answer4 =  question5_answer4; 
    formattedQuestion.question6_answer4 =  question6_answer4; 
    formattedQuestion.question7_answer4 =  question7_answer4; 
    formattedQuestion.question8_answer4 =  question8_answer4; 
    formattedQuestion.question9_answer4 =  question9_answer4; 
    formattedQuestion.question10_answer4 =  question10_answer4; 
    formattedQuestion.question1_answer_no =  question1_answer_no; 
    formattedQuestion.question2_answer_no =  question2_answer_no; 
    formattedQuestion.question3_answer_no =  question3_answer_no; 
    formattedQuestion.question4_answer_no =  question4_answer_no; 
    formattedQuestion.question5_answer_no =  question5_answer_no; 
    formattedQuestion.question6_answer_no =  question6_answer_no; 
    formattedQuestion.question7_answer_no =  question7_answer_no; 
    formattedQuestion.question8_answer_no =  question8_answer_no; 
    formattedQuestion.question9_answer_no =  question9_answer_no; 
    formattedQuestion.question10_answer_no =  question10_answer_no; 
    formattedQuestion.question1_description =  question1_description; 
    formattedQuestion.question2_description =  question2_description; 
    formattedQuestion.question3_description =  question3_description; 
    formattedQuestion.question4_description =  question4_description; 
    formattedQuestion.question5_description =  question5_description; 
    formattedQuestion.question6_description =  question6_description; 
    formattedQuestion.question7_description =  question7_description; 
    formattedQuestion.question8_description =  question8_description; 
    formattedQuestion.question9_description =  question9_description; 
    formattedQuestion.question10_description =  question10_description; 
    
    errors = await validate(formattedQuestion);
    await formattedQuestion.save();
    
    if (errors.length > 0) return res.status(400).json(mapError(errors));
    return res.json(formattedQuestion);

  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "문제가 발생했습니다." });
  }
};

const getFormattedQuestion = async (req: Request, res: Response) => {
  const game_no = req.params.game_no;
  try {
    const formattedQuestions = await formattedquestion.find({
      where: { game_no: game_no },
    });


    return res.send(formattedQuestions);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: "문제를 찾을 수 없습니다." });
  }
};

const updateFormattedQuestion = async (req: Request, res: Response) => {
  const {
    game_no,
    question1_title,
    question1_answer1,
    question1_answer2,
    question1_answer3,
    question1_answer4,
    question1_answer_no,
    question1_description,
    question2_title,
    question2_answer1,
    question2_answer2,
    question2_answer3,
    question2_answer4,
    question2_answer_no,
    question2_description,
    question3_title,
    question3_answer1,
    question3_answer2,
    question3_answer3,
    question3_answer4,
    question3_answer_no,
    question3_description,
    question4_title,
    question4_answer1,
    question4_answer2,
    question4_answer3,
    question4_answer4,
    question4_answer_no,
    question4_description,
    question5_title,
    question5_answer1,
    question5_answer2,
    question5_answer3,
    question5_answer4,
    question5_answer_no,
    question5_description,
    question6_title,
    question6_answer1,
    question6_answer2,
    question6_answer3,
    question6_answer4,
    question6_answer_no,
    question6_description,
    question7_title,
    question7_answer1,
    question7_answer2,
    question7_answer3,
    question7_answer4,
    question7_answer_no,
    question7_description,
    question8_title,
    question8_answer1,
    question8_answer2,
    question8_answer3,
    question8_answer4,
    question8_answer_no,
    question8_description,
    question9_title,
    question9_answer1,
    question9_answer2,
    question9_answer3,
    question9_answer4,
    question9_answer_no,
    question9_description,
    question10_title,
    question10_answer1,
    question10_answer2,
    question10_answer3,
    question10_answer4,
    question10_answer_no,
    question10_description,
    game_name
  } = req.body;

  try {
    let errors: any = {};

    if(!game_name) errors.game_name = "게임 제목을 입력하세요."

    if (!question1_title) errors.question1_title = "문제를 입력하세요.";
    if (!question1_answer1) errors.question1_answer1 = "문제를 입력하세요.";
    if (!question1_answer2) errors.question1_answer2 = "문제를 입력하세요.";
    if (!question1_answer3) errors.question1_answer3 = "문제를 입력하세요.";
    if (!question1_answer4) errors.question1_answer4 = "문제를 입력하세요.";
    if (!question1_answer_no) errors.question1_answer_no = "정답을 선택하세요.";
    if (!question2_title) errors.question2_title = "문제를 입력하세요.";
    if (!question2_answer1) errors.question2_answer1 = "문제를 입력하세요.";
    if (!question2_answer2) errors.question2_answer2 = "문제를 입력하세요.";
    if (!question2_answer3) errors.question2_answer3 = "문제를 입력하세요.";
    if (!question2_answer4) errors.question2_answer4 = "문제를 입력하세요.";
    if (!question2_answer_no) errors.question2_answer_no = "정답을 선택하세요.";
    if (!question3_title) errors.question3_title = "문제를 입력하세요.";
    if (!question3_answer1) errors.question3_answer1 = "문제를 입력하세요.";
    if (!question3_answer2) errors.question3_answer2 = "문제를 입력하세요.";
    if (!question3_answer3) errors.question3_answer3 = "문제를 입력하세요.";
    if (!question3_answer4) errors.question3_answer4 = "문제를 입력하세요.";
    if (!question3_answer_no) errors.question3_answer_no = "정답을 선택하세요.";
    if (!question4_title) errors.question4_title = "문제를 입력하세요.";
    if (!question4_answer1) errors.question4_answer1 = "문제를 입력하세요.";
    if (!question4_answer2) errors.question4_answer2 = "문제를 입력하세요.";
    if (!question4_answer3) errors.question4_answer3 = "문제를 입력하세요.";
    if (!question4_answer4) errors.question4_answer4 = "문제를 입력하세요.";
    if (!question4_answer_no) errors.question4_answer_no = "정답을 선택하세요.";
    if (!question5_title) errors.question5_title = "문제를 입력하세요.";
    if (!question5_answer1) errors.question5_answer1 = "문제를 입력하세요.";
    if (!question5_answer2) errors.question5_answer2 = "문제를 입력하세요.";
    if (!question5_answer3) errors.question5_answer3 = "문제를 입력하세요.";
    if (!question5_answer4) errors.question5_answer4 = "문제를 입력하세요.";
    if (!question5_answer_no) errors.question5_answer_no = "정답을 선택하세요.";
    if (!question6_title) errors.question6_title = "문제를 입력하세요.";
    if (!question6_answer1) errors.question6_answer1 = "문제를 입력하세요.";
    if (!question6_answer2) errors.question6_answer2 = "문제를 입력하세요.";
    if (!question6_answer3) errors.question6_answer3 = "문제를 입력하세요.";
    if (!question6_answer4) errors.question6_answer4 = "문제를 입력하세요.";
    if (!question6_answer_no) errors.question6_answer_no = "정답을 선택하세요.";
    if (!question7_title) errors.question7_title = "문제를 입력하세요.";
    if (!question7_answer1) errors.question7_answer1 = "문제를 입력하세요.";
    if (!question7_answer2) errors.question7_answer2 = "문제를 입력하세요.";
    if (!question7_answer3) errors.question7_answer3 = "문제를 입력하세요.";
    if (!question7_answer4) errors.question7_answer4 = "문제를 입력하세요.";
    if (!question7_answer_no) errors.question7_answer_no = "정답을 선택하세요.";
    if (!question8_title) errors.question8_title = "문제를 입력하세요.";
    if (!question8_answer1) errors.question8_answer1 = "문제를 입력하세요.";
    if (!question8_answer2) errors.question8_answer2 = "문제를 입력하세요.";
    if (!question8_answer3) errors.question8_answer3 = "문제를 입력하세요.";
    if (!question8_answer4) errors.question8_answer4 = "문제를 입력하세요.";
    if (!question8_answer_no) errors.question8_answer_no = "정답을 선택하세요.";
    if (!question9_title) errors.question9_title = "문제를 입력하세요.";
    if (!question9_answer1) errors.question9_answer1 = "문제를 입력하세요.";
    if (!question9_answer2) errors.question9_answer2 = "문제를 입력하세요.";
    if (!question9_answer3) errors.question9_answer3 = "문제를 입력하세요.";
    if (!question9_answer4) errors.question9_answer4 = "문제를 입력하세요.";
    if (!question9_answer_no) errors.question9_answer_no = "정답을 선택하세요.";
    if (!question10_title) errors.question10_title = "문제를 입력하세요.";
    if (!question10_answer1) errors.question10_answer1 = "문제를 입력하세요.";
    if (!question10_answer2) errors.question10_answer2 = "문제를 입력하세요.";
    if (!question10_answer3) errors.question10_answer3 = "문제를 입력하세요.";
    if (!question10_answer4) errors.question10_answer4 = "문제를 입력하세요.";
    if (!question10_answer_no) errors.question10_answer_no = "정답을 선택하세요.";
    
   if (Object.keys(errors).length > 0) {
      return res.status(400).json(errors);
    }

    await AppDataSource.getRepository(formattedquestion).update({game_no: game_no},
      {
        question1_title: question1_title,
        question1_answer1: question1_answer1,
        question1_answer2: question1_answer2,
        question1_answer3: question1_answer3,
        question1_answer4: question1_answer4,
        question1_answer_no: question1_answer_no,
        question1_description: question1_description,
        question2_title: question2_title,
        question2_answer1: question2_answer1,
        question2_answer2: question2_answer2,
        question2_answer3: question2_answer3,
        question2_answer4: question2_answer4,
        question2_answer_no: question2_answer_no,
        question2_description: question2_description,
        question3_title: question3_title,
        question3_answer1: question3_answer1,
        question3_answer2: question3_answer2,
        question3_answer3: question3_answer3,
        question3_answer4: question3_answer4,
        question3_answer_no: question3_answer_no,
        question3_description: question3_description,
        question4_title: question4_title,
        question4_answer1: question4_answer1,
        question4_answer2: question4_answer2,
        question4_answer3: question4_answer3,
        question4_answer4: question4_answer4,
        question4_answer_no: question4_answer_no,
        question4_description: question4_description,
        question5_title: question5_title,
        question5_answer1: question5_answer1,
        question5_answer2: question5_answer2,
        question5_answer3: question5_answer3,
        question5_answer4: question5_answer4,
        question5_answer_no: question5_answer_no,
        question5_description: question5_description,
        question6_title: question6_title,
        question6_answer1: question6_answer1,
        question6_answer2: question6_answer2,
        question6_answer3: question6_answer3,
        question6_answer4: question6_answer4,
        question6_answer_no: question6_answer_no,
        question6_description: question6_description,
        question7_title: question7_title,
        question7_answer1: question7_answer1,
        question7_answer2: question7_answer2,
        question7_answer3: question7_answer3,
        question7_answer4: question7_answer4,
        question7_answer_no: question7_answer_no,
        question7_description: question7_description,
        question8_title: question8_title,
        question8_answer1: question8_answer1,
        question8_answer2: question8_answer2,
        question8_answer3: question8_answer3,
        question8_answer4: question8_answer4,
        question8_answer_no: question8_answer_no,
        question8_description: question8_description,
        question9_title: question9_title,
        question9_answer1: question9_answer1,
        question9_answer2: question9_answer2,
        question9_answer3: question9_answer3,
        question9_answer4: question9_answer4,
        question9_answer_no: question9_answer_no,
        question9_description: question9_description,
        question10_title: question10_title,
        question10_answer1: question10_answer1,
        question10_answer2: question10_answer2,
        question10_answer3: question10_answer3,
        question10_answer4: question10_answer4,
        question10_answer_no: question10_answer_no,
        question10_description: question10_description
      })

    
    return res.json(question1_title);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });

  }


};

const validator = async (req: Request, res: Response) => {
  const {
    question1_title,
    question1_answer1,
    question1_answer2,
    question1_answer3,
    question1_answer4,
    question1_answer_no,
    question1_description,
    question2_title,
    question2_answer1,
    question2_answer2,
    question2_answer3,
    question2_answer4,
    question2_answer_no,
    question2_description,
    question3_title,
    question3_answer1,
    question3_answer2,
    question3_answer3,
    question3_answer4,
    question3_answer_no,
    question3_description,
    question4_title,
    question4_answer1,
    question4_answer2,
    question4_answer3,
    question4_answer4,
    question4_answer_no,
    question4_description,
    question5_title,
    question5_answer1,
    question5_answer2,
    question5_answer3,
    question5_answer4,
    question5_answer_no,
    question5_description,
    question6_title,
    question6_answer1,
    question6_answer2,
    question6_answer3,
    question6_answer4,
    question6_answer_no,
    question6_description,
    question7_title,
    question7_answer1,
    question7_answer2,
    question7_answer3,
    question7_answer4,
    question7_answer_no,
    question7_description,
    question8_title,
    question8_answer1,
    question8_answer2,
    question8_answer3,
    question8_answer4,
    question8_answer_no,
    question8_description,
    question9_title,
    question9_answer1,
    question9_answer2,
    question9_answer3,
    question9_answer4,
    question9_answer_no,
    question9_description,
    question10_title,
    question10_answer1,
    question10_answer2,
    question10_answer3,
    question10_answer4,
    question10_answer_no,
    question10_description,
  } = req.body;
    try {
    let errors: any = {};

    const formattedQuestion = new formattedquestion();
    formattedQuestion.question1_title = question1_title;
    formattedQuestion.question1_answer1 = question1_answer1;
    formattedQuestion.question1_answer2 = question1_answer2;
    formattedQuestion.question1_answer3 = question1_answer3;
    formattedQuestion.question1_answer4 = question1_answer4;
    formattedQuestion.question1_answer_no = question1_answer_no;
    formattedQuestion.question1_description = question1_description;
    formattedQuestion.question2_title = question2_title;
    formattedQuestion.question2_answer1 = question2_answer1;
    formattedQuestion.question2_answer2 = question2_answer2;
    formattedQuestion.question2_answer3 = question2_answer3;
    formattedQuestion.question2_answer4 = question2_answer4;
    formattedQuestion.question2_answer_no = question2_answer_no;
    formattedQuestion.question2_description = question2_description;
    formattedQuestion.question3_title = question3_title;
    formattedQuestion.question3_answer1 = question3_answer1;
    formattedQuestion.question3_answer2 = question3_answer2;
    formattedQuestion.question3_answer3 = question3_answer3;
    formattedQuestion.question3_answer4 = question3_answer4;
    formattedQuestion.question3_answer_no = question3_answer_no;
    formattedQuestion.question3_description = question3_description;
    formattedQuestion.question4_title = question4_title;
    formattedQuestion.question4_answer1 = question4_answer1;
    formattedQuestion.question4_answer2 = question4_answer2;
    formattedQuestion.question4_answer3 = question4_answer3;
    formattedQuestion.question4_answer4 = question4_answer4;
    formattedQuestion.question4_answer_no = question4_answer_no;
    formattedQuestion.question4_description = question4_description;
    formattedQuestion.question5_title = question5_title;
    formattedQuestion.question5_answer1 = question5_answer1;
    formattedQuestion.question5_answer2 = question5_answer2;
    formattedQuestion.question5_answer3 = question5_answer3;
    formattedQuestion.question5_answer4 = question5_answer4;
    formattedQuestion.question5_answer_no = question5_answer_no;
    formattedQuestion.question5_description = question5_description;
    formattedQuestion.question6_title = question6_title;
    formattedQuestion.question6_answer1 = question6_answer1;
    formattedQuestion.question6_answer2 = question6_answer2;
    formattedQuestion.question6_answer3 = question6_answer3;
    formattedQuestion.question6_answer4 = question6_answer4;
    formattedQuestion.question6_answer_no = question6_answer_no;
    formattedQuestion.question6_description = question6_description;
    formattedQuestion.question7_title = question7_title;
    formattedQuestion.question7_answer1 = question7_answer1;
    formattedQuestion.question7_answer2 = question7_answer2;
    formattedQuestion.question7_answer3 = question7_answer3;
    formattedQuestion.question7_answer4 = question7_answer4;
    formattedQuestion.question7_answer_no = question7_answer_no;
    formattedQuestion.question7_description = question7_description;
    formattedQuestion.question8_title = question8_title;
    formattedQuestion.question8_answer1 = question8_answer1;
    formattedQuestion.question8_answer2 = question8_answer2;
    formattedQuestion.question8_answer3 = question8_answer3;
    formattedQuestion.question8_answer4 = question8_answer4;
    formattedQuestion.question8_answer_no = question8_answer_no;
    formattedQuestion.question8_description = question8_description;
    formattedQuestion.question9_title = question9_title;
    formattedQuestion.question9_answer1 = question9_answer1;
    formattedQuestion.question9_answer2 = question9_answer2;
    formattedQuestion.question9_answer3 = question9_answer3;
    formattedQuestion.question9_answer4 = question9_answer4;
    formattedQuestion.question9_answer_no = question9_answer_no;
    formattedQuestion.question9_description = question9_description;
    formattedQuestion.question10_title = question10_title;
    formattedQuestion.question10_answer1 = question10_answer1;
    formattedQuestion.question10_answer2 = question10_answer2;
    formattedQuestion.question10_answer3 = question10_answer3;
    formattedQuestion.question10_answer4 = question10_answer4;
    formattedQuestion.question10_answer_no = question10_answer_no;
    formattedQuestion.question10_description = question10_description;
    

    errors = await validate(formattedQuestion);
    if (errors.length > 0) return res.status(400).json(mapError(errors));
    return res.json(formattedQuestion);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};

const router = Router();
router.post("/", userMiddleware, authMiddleware, createFormattedQuestion);
router.get("/:game_no", userMiddleware, getFormattedQuestion);
router.post("/update", userMiddleware, authMiddleware, updateFormattedQuestion);
router.post("/validator",userMiddleware, authMiddleware, validator);


export default router;
