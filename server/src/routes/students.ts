import  bcrypt  from 'bcryptjs';
import { Stats } from 'fs';
import { JoinColumn } from 'typeorm';
import { Request, Response, Router } from "express";
import { User } from "../entities/User";
import { AppDataSource } from "../data-source";
import Stat from '../entities/Stat';
import { validate } from 'class-validator';
const router = Router();

const mapError = (errors: Object[]) => {
  return errors.reduce((prev: any, err: any) => {
    prev[err.property] = Object.entries(err.constraints)[0][1];
    return prev;
  }, {});
};

const studentList = async (req: Request, res: Response) => {
  try {
    const user_teachers = req.params.user_teacher;
    const user = await AppDataSource.createQueryBuilder()
      .select(
        `u.user_id, u.user_no, u.active, u.user_name, u.user_teacher`
      )
      .from(User, "u")
      .groupBy('u.user_no, u.user_id, u.active, u.user_name, u.user_teacher')
      .orderBy(`u.user_no`, "DESC")
      .where(`u.user_teacher = :user_teacher`, {user_teacher: user_teachers})
      .andWhere(`u.user_type = :type`, { type:2 })
      .andWhere(`u.active = :active`, { active:1 || 2 })
      .execute();
    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "문제가 발생했습니다." });
  }
};

const findTeacher = async (req: Request, res: Response) => {
  try {
    const user_teachers = req.params.user_teacher;
    const user = await AppDataSource.createQueryBuilder()
      .select(
        `u.user_id, u.user_name`
      )
      .from(User, "u")
      .groupBy('u.user_id, u.user_name')
      .orderBy(`u.user_no`, "DESC")
      .where(`u.user_no = :user_teacher`, {user_teacher: user_teachers})
       .execute();
    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "문제가 발생했습니다." });
  }
};

const removeStudents = async (req: Request, res: Response) => {
  const { user_no } = req.body;

  try {
    const user = await AppDataSource.getRepository(User).update({user_no: user_no}, {
      active: "3"
    })
    return res.json(user);


  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
  // const stats = student.stats
  // for (const stat of stats) {
  //   await Stat.remove(stat);
  // }

  // await User.remove(student);
  // return res.status(204).send()

};

const resetPassword = async (req: Request, res: Response) => {
  const { user_no } = req.body;

  const hashedPassword = await bcrypt.hash('1111', 10);
  try {
   const user = await AppDataSource.getRepository(User).update({user_no: user_no}, {
      password: hashedPassword,
    })
    return res.json(user);


  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }

}

const register = async (req: Request, res: Response) => {
  const { user_type, user_no, user_name, active, user_id, user_teacher, password, school, grade, class_no, phone_no } = req.body;

  try {
    let errors: any = {};

    const user = new User();
    const stat = new Stat();
    stat.user_no = user_no;
    user.user_type = user_type;
    user.user_no = user_no;
    user.user_name = user_name;
    user.active = active; 
    user.user_id = user_id;
    user.password = password;
    user.user_teacher = user_teacher;
    user.school = school;
    user.grade = grade;
    user.class_no = class_no;
    user.phone_no = phone_no;
    user.marketing = false;

    // 엔티티에 정해 놓은 조건으로 user 데이터의 유효성 검사를 해줌.
    errors = await validate(user);

    if (errors.length > 0) return res.status(400).json(mapError(errors));

    // 유저 정보를 user table에 저장.
    await user.save();
    await stat.save();
    return res.json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};


// const update = async (req: Request, res: Response) => {
//   const { user_type, user_no, user_name, active, user_id, user_teacher, password, school, grade, class_no, phone_no } = req.body;

//   try {
//     let errors: any = {};

//     const user = new User();
//     const stat = new Stat();
//     stat.user_no = user_no;
//     user.user_type = user_type;
//     user.user_no = user_no;
//     user.user_name = user_name;
//     user.active = active; 
//     user.user_id = user_id;
//     user.password = password;
//     user.user_teacher = user_teacher;
//     user.school = school;
//     user.grade = grade;
//     user.class_no = class_no;
//     user.phone_no = phone_no;

//     // 엔티티에 정해 놓은 조건으로 user 데이터의 유효성 검사를 해줌.
//     errors = await validate(user);

//     if (errors.length > 0) return res.status(400).json(mapError(errors));

//     // 유저 정보를 user table에 저장.
//     await AppDataSource.getRepository(User).update({user_no: user_no}, {
//       user_id: user_id,
//       password: password,
//       active: '2',
//     })
//     return res.json(user);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error });
//   }
// };

router.post("/register", register);
router.post("/remove", removeStudents);
router.post("/resetpw", resetPassword);
// router.post("/update", update);
router.get("/list/:user_teacher", studentList);
router.get("/teacher/:user_teacher", findTeacher);


export default router;
