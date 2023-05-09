import { ExecOptionsWithStringEncoding } from "child_process";
import { IntervalHistogram } from "perf_hooks";

export interface User {
  user_no: string;
  user_id: string;
  user_type: string;
  user_name: string;
  user_email: string;
  userCount?: string;
  active: string;
  stats: Stat[];
  user_teacher: string;
  school: string;
  grade: string;
  class_no: string;
  phone: string;
  marketing: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Template {
  template_no: string;
  template_name: string;
  template_description: string;
  imageUrl: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Game {
  game_no: string;
  game_template_no: string;
  game_name: string;
  user_no: string;
  questions: Question[];
  questionnumber?: string;
  questionCount?: string;
  gameNumber?: string;
  imageUrl: string;
  url: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}
export interface Question {
  question_no: string;
  game_no: string;
  user_no: string;
  question_title: string;
  question_answer1: string;
  question_answer2: string;
  question_answer3: string;
  question_answer4: string;
  question_answer_no: string;
  question_description: string;
  body: string; 
  questionCount?: string;
  url: string;
  game?: Game;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface formattedQusetion {
  game_no: string;
  question1_title: string;
  question1_answer1: string;
  question1_answer2: string;
  question1_answer3: string;
  question1_answer4: string;
  question1_answer_no: string;
  question1_description: string;
  question2_title: string;
  question2_answer1: string;
  question2_answer2: string;
  question2_answer3: string;
  question2_answer4: string;
  question2_answer_no: string;
  question2_description: string;
  question3_title: string;
  question3_answer1: string;
  question3_answer2: string;
  question3_answer3: string;
  question3_answer4: string;
  question3_answer_no: string;
  question3_description: string;
  question4_title: string;
  question4_answer1: string;
  question4_answer2: string;
  question4_answer3: string;
  question4_answer4: string;
  question4_answer_no: string;
  question4_description: string;
  question5_title: string;
  question5_answer1: string;
  question5_answer2: string;
  question5_answer3: string;
  question5_answer4: string;
  question5_answer_no: string;
  question5_description: string;
  question6_title: string;
  question6_answer1: string;
  question6_answer2: string;
  question6_answer3: string;
  question6_answer4: string;
  question6_answer_no: string;
  question6_description: string;
  question7_title: string;
  question7_answer1: string;
  question7_answer2: string;
  question7_answer3: string;
  question7_answer4: string;
  question7_answer_no: string;
  question7_description: string;
  question8_title: string;
  question8_answer1: string;
  question8_answer2: string;
  question8_answer3: string;
  question8_answer4: string;
  question8_answer_no: string;
  question8_description: string;
  question9_title: string;
  question9_answer1: string;
  question9_answer2: string;
  question9_answer3: string;
  question9_answer4: string;
  question9_answer_no: string;
  question9_description: string;
  question10_title: string;
  question10_answer1: string;
  question10_answer2: string;
  question10_answer3: string;
  question10_answer4: string;
  question10_answer_no: string;
  question10_description: string;
}
export interface Sample {
  sample_title: string;
  sample_answer1: string;
  sample_answer2: string;
  sample_answer3: string;
  sample_answer4: string;
  sample_answer_no: string;
  sample_description: string;
  sample_grade: string;
  sample_subject: string;
  sample_chapter: string;
}

export interface Stat {
  user_no: string;
  student_str: string;
  student_int: string;
  student_wis: string;
  student_hp: string;
  student_mp: string;
  student_skill1: string;
  student_skill2: string;
  student_skill3: string;
  studentCount?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Item {
  item_no: string;
  user_no: string;
  item_type: string;
  item_name: string;
  user?: User;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}
