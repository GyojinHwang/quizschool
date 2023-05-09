import { IsEmail, Length } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, Index, In, OneToMany, BeforeInsert } from "typeorm"
import bcrypt from 'bcryptjs';
import Question from "./Question";
import Stat from "./Stat";
import BaseEntity from './Entity';

@Entity("users")
export class User extends BaseEntity {
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

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 6)
    }

}
