import { isEmpty, validate } from "class-validator";
import { Request, Response, Router } from "express";
import { User } from "../entities/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import userMiddleware from "../middlewares/user";
import authMiddleware from "../middlewares/auth";
import { AppDataSource } from "../data-source";
<<<<<<< HEAD
import Stat from "../entities/Stat";
=======
>>>>>>> 63a9535 (initial)

const mapError = (errors: Object[]) => {
  return errors.reduce((prev: any, err: any) => {
    prev[err.property] = Object.entries(err.constraints)[0][1];
    return prev;
  }, {});
};

const me = async (_: Request, res: Response) => {
  return res.json(res.locals.user);
};

<<<<<<< HEAD
const privacy_check = async (req: Request, res: Response) => {
  const { privacy } = req.body;
  return res.json(privacy);
}

const id_check = async (req: Request, res: Response) => {
  const { user_id } = req.body;

  let check: any = {};

  const user_idUser = await User.findOneBy({ user_id });
  if (!user_id) check = "아이디를 입력하세요.";
  else if (user_id.search(/\W|\s/g) > -1) check = "한글, 특수문자, 공백은 사용할 수 없습니다.";
  else if (user_idUser) check = "이미 사용중인 아이디입니다.";
  else check = "사용 가능한 아이디입니다.";
  return res.json(check);
}

const register = async (req: Request, res: Response) => {
  const { marketing, check, user_type, user_no, user_name, active, user_id, user_teacher, password, passwordCert, school, grade, class_no, phone_no } = req.body;
=======
const register = async (req: Request, res: Response) => {
  const { email, username, password } = req.body;
>>>>>>> 63a9535 (initial)

  try {
    let errors: any = {};

    // 이메일과 유저이름이 이미 저장 사용되고 있는 것인지 확인.
<<<<<<< HEAD
    const user_idUser = await User.findOneBy({ user_id });

    // if (!(user_type == 1 || user_type == 2)) errors.user_type = "사용자 유형을 선택해 주세요."; 
    // if (user_idUser) errors.user_id = "이미 이 사용자 이름이 사용되었습니다.";
    var reg = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/;
    if(user_id.search(/\W|\s/g) > -1) errors.user_id = "특수문자 또는 공백이 입력되었습니다.";

    if (false === reg.test(password)) errors.password = "영문, 숫자, 특수문자가 포함된 8~20의 비밀번호"

    if (!(password == passwordCert)) errors.passwordCert = "비밀번호가 일치하지 않습니다."
    if (check == "" ) errors.user_id = "아이디 중복 검사를 해주세요.";
    if (school == "") errors.school = "소속학교를 입력하세요.";
    if (grade == "") errors.grade = "학년을 입력하세요.";
    if (user_name == "") errors.user_name = "이름을 입력하세요.";
    if (grade == "") errors.grade = "학년을 입력하세요.";
    if (phone_no == "") errors.phone_no = "연락처를 입력하세요.";
    if (!/^\d+$/.test(phone_no)) errors.phone_no = "숫자만 입력하세요.";
    if (class_no == "") errors.class_no = "반을 입력하세요.";
=======
    const emailUser = await User.findOneBy({ email });
    const usernameUser = await User.findOneBy({ username });

    // 이미 있다면 errors 객체에 넣어줌.
    if (emailUser) errors.email = "이미 해당 이메일 주소가 사용되었습니다.";
    if (usernameUser) errors.username = "이미 이 사용자 이름이 사용되었습니다.";

>>>>>>> 63a9535 (initial)
    // 에러가 있다면 return으로 에러를 response 보내줌.
    if (Object.keys(errors).length > 0) {
      return res.status(400).json(errors);
    }

    const user = new User();
<<<<<<< HEAD
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
    user.marketing = marketing;
=======
    user.email = email;
    user.username = username;
    user.password = password;
>>>>>>> 63a9535 (initial)

    // 엔티티에 정해 놓은 조건으로 user 데이터의 유효성 검사를 해줌.
    errors = await validate(user);

    if (errors.length > 0) return res.status(400).json(mapError(errors));

    // 유저 정보를 user table에 저장.
    await user.save();
<<<<<<< HEAD
    await stat.save();
=======
>>>>>>> 63a9535 (initial)
    return res.json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};

const login = async (req: Request, res: Response) => {
<<<<<<< HEAD
  const { user_id, password } = req.body;

  try {
    let errors: any = {};
    // 비워져있다면 에러를 프론트엔드로 보내주기
    if (isEmpty(user_id))
      errors.user_id = "아이디는 비워둘 수 없습니다.";
=======
  const { username, password } = req.body;
  try {
    let errors: any = {};
    // 비워져있다면 에러를 프론트엔드로 보내주기
    if (isEmpty(username))
      errors.username = "사용자 이름은 비워둘 수 없습니다.";
>>>>>>> 63a9535 (initial)
    if (isEmpty(password)) errors.password = "비밀번호는 비워둘 수 없습니다.";
    if (Object.keys(errors).length > 0) {
      return res.status(400).json(errors);
    }

    // 디비에서 유저 찾기
<<<<<<< HEAD
    const user = await User.findOneBy({ user_id });

    if (!user) 
      return res
        .status(404)
        .json({ user_id: "사용자 이름이 등록되지 않았습니다.", "error_code": 101 });
=======
    const user = await User.findOneBy({ username });

    if (!user)
      return res
        .status(404)
        .json({ username: "사용자 이름이 등록되지 않았습니다." });
>>>>>>> 63a9535 (initial)

    // 유저가 있다면 비밀번호 비교하기
    const passwordMatches = await bcrypt.compare(password, user.password);

    // 비밀번호가 다르다면 에러 보내기
    if (!passwordMatches) {
<<<<<<< HEAD
      return res.status(401).json({ password: "비밀번호가 잘못되었습니다.", "error_code": 211 });
    }

    // 비밀번호가 맞다면 토큰 생성
    const token = jwt.sign({ user_id }, process.env.JWT_SECRET);
=======
      return res.status(401).json({ password: "비밀번호가 잘못되었습니다." });
    }

    // 비밀번호가 맞다면 토큰 생성
    const token = jwt.sign({ username }, process.env.JWT_SECRET);
>>>>>>> 63a9535 (initial)

    // 쿠키저장
    res.set(
      "Set-Cookie",
      cookie.serialize("token", token, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
<<<<<<< HEAD
        sameSite: "strict",
      })
    );

    // res.set(
    //   "Set-Cookie",
    //   cookie.serialize("token", token, {
    //     httpOnly: true,
    //     maxAge: 60 * 60 * 24 * 7,
    //     path: "/",
    //     sameSite: "strict",
    //     domain: ".quiz-school.com",


    //   })
    // );

=======
      })
    );

>>>>>>> 63a9535 (initial)
    return res.json({ user, token });
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
};

const logout = async (_: Request, res: Response) => {
<<<<<<< HEAD
  res.clearCookie("token");
=======
  res.set(
    "Set-Cookie",
    cookie.serialize("token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      expires: new Date(0),
      path: "/",
    })
  );
>>>>>>> 63a9535 (initial)
  res.status(200).json({ success: true });
};

const userFind = async (req: Request, res: Response) => {
<<<<<<< HEAD
  let name = req.params.user_id;

  try {
    const account = await AppDataSource.getRepository(User)
      .findOne({ where: { user_id: name } })
=======
  let name = req.params.username;

  try {
    const account = await AppDataSource.getRepository(User)
      .findOne({ where: { username: name } })
>>>>>>> 63a9535 (initial)
      .then((data) => {
        res.json(data);
        console.log("Get User: ", data);
      })
      .catch((err) => console.log(err));
    return res.json(account);
  }
  // Check if account exists
  catch (error) {
<<<<<<< HEAD
    return res.status(404).json({ error: 'User does not exist', "error_code": 202  });
=======
    return res.status(404).json({ error: 'User does not exist' });
>>>>>>> 63a9535 (initial)
  }
}

const userMake = async (req: Request, res: Response) => {
<<<<<<< HEAD
  const user_id = req.params.user_id;
=======
  const email = req.params.email;
  const username = req.params.username;
>>>>>>> 63a9535 (initial)
  const password = req.params.password;

  try {
    let errors: any = {};

    // 이메일과 유저이름이 이미 저장 사용되고 있는 것인지 확인.
<<<<<<< HEAD
    const user_idUser = await User.findOneBy({ user_id });

    // 이미 있다면 errors 객체에 넣어줌.
    if (user_idUser) errors.user_id = "이미 이 사용자 이름이 사용되었습니다. , error_code: 123";
=======
    const emailUser = await User.findOneBy({ email });
    const usernameUser = await User.findOneBy({ username });

    // 이미 있다면 errors 객체에 넣어줌.
    if (emailUser) errors.email = "이미 해당 이메일 주소가 사용되었습니다.";
    if (usernameUser) errors.username = "이미 이 사용자 이름이 사용되었습니다.";
>>>>>>> 63a9535 (initial)

    // 에러가 있다면 return으로 에러를 response 보내줌.
    if (Object.keys(errors).length > 0) {
      return res.status(400).json(errors);
    }

    const user = new User();
<<<<<<< HEAD
    user.user_id = user_id;
=======
    user.email = email;
    user.username = username;
>>>>>>> 63a9535 (initial)
    user.password = password;

    // 엔티티에 정해 놓은 조건으로 user 데이터의 유효성 검사를 해줌.
    errors = await validate(user);

    if (errors.length > 0) return res.status(400).json(mapError(errors));

    // 유저 정보를 user table에 저장.
    await user.save();
    return res.json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};

<<<<<<< HEAD
const testing = async (req: Request, res: Response) => {
  const user_id = req.params.user_id;
  const password = req.params.password;

  return res.json(req.params);
};

const userNumber = async (req: Request, res: Response) => {
  try {
    const user = await AppDataSource.createQueryBuilder()
      .select(`count(u.id)+1 as "userCount"`)
      .from(User, "u")
      .execute();
    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "문제가 발생했습니다." });
  }
};
=======
>>>>>>> 63a9535 (initial)

const router = Router();
router.get("/me", userMiddleware, authMiddleware, me);
router.post("/register", register);
<<<<<<< HEAD
router.post("/id_check", id_check);
router.post("/privacy_check", privacy_check);

router.post("/login", login);
router.get("/testing/:user_id/:password", testing);

router.post("/logout", userMiddleware, authMiddleware, logout);
router.get('/accounts/:user_id', userFind);
router.get('/accounts/:user_id/:password', userMake);
router.get('/users/usernumber', userNumber);
=======
router.post("/login", login);
router.post("/logout", userMiddleware, authMiddleware, logout);
router.get('/accounts/:username', userFind);
router.get('/accounts/:username/:email/:password', userMake);
>>>>>>> 63a9535 (initial)

export default router;
