import { IsEmail, Length } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, Index, In, OneToMany, BeforeInsert } from "typeorm"
import bcrypt from 'bcryptjs';
<<<<<<< HEAD
import Question from "./Question";
import Stat from "./Stat";
=======
import Post from "./Post";
import Vote from "./Vote";
>>>>>>> 63a9535 (initial)
import BaseEntity from './Entity';

@Entity("users")
export class User extends BaseEntity {
<<<<<<< HEAD
    @Index()
    @Column({ unique: true })
    user_no: string;

    @Index()
    // @Length(3, 32, { message: "사용자 이름은 3자 이상이어야 합니다." })
    @Column({ nullable: true })
    user_id: string

    @Index()
    @Column()
    user_type: string;
    
    @Index()
    @Column({ nullable: true })
    user_name: string;

    @Index()
    @Column({ nullable: true })
    user_email: string;

    @Column()
    // @Length(2, 255, { message: '비밀번호는 2자리 이상이어야 합니다.' })
    password: string;

    @Column({ unique: false, nullable: true })
    user_teacher: string;

    @Column({ unique: false, nullable: true })
    school: string;

    @Column({ unique: false, nullable: true })
    grade: string;

    @Column({ unique: false, nullable: true })
    class_no: string;

    @Column({ unique: false, nullable: true })
    phone_no: string;

    @Column()
    active: string;

    @Column()
    marketing: boolean;

    @OneToMany(() => Question, (question) => question.user)
    questions: Question[]

    @OneToMany(() => Stat, (stat) => stat.user)
    stats: Stat[]
=======

    @Index()
    @IsEmail(undefined, { message: "이메일 주소가 잘못되었습니다." })
    @Length(1, 255, { message: "이메일 주소는 비워둘 수 없습니다." })
    @Column({ unique: true })
    email: string;

    @Index()
    @Length(3, 32, { message: "사용자 이름은 3자 이상이어야 합니다." })
    @Column({ unique: true })
    username: string

    @Column()
    @Length(6, 255, { message: '비밀번호는 6자리 이상이어야 합니다.' })
    password: string;

    @OneToMany(() => Post, (post) => post.user)
    posts: Post[]

    @OneToMany(() => Vote, (vote) => vote.user)
    votes: Vote[]
>>>>>>> 63a9535 (initial)

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 6)
    }

}
