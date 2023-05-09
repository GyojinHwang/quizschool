import { IsEmail, Length } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, Index, In, OneToMany, BeforeInsert, ManyToOne, JoinColumn } from "typeorm"
import bcrypt from 'bcryptjs';
import Question from "./Question";
import { User } from "./User";
import BaseEntity from './Entity';

@Entity("stats")
export default class Student extends BaseEntity {
    @Column({ nullable: true })
    student_str: string;

    @Column({ nullable: true })
    student_int: string;

    @Column({ nullable: true })
    student_wis: string;

    @Column({ nullable: true })
    student_dex: string;

    @Column({ nullable: true })
    student_hp: string;

    @Column({ nullable: true })
    student_mp: string;
    
    @Column({ nullable: true })
    student_skill1: string;
    
    @Column({ nullable: true })
    student_skill2: string;
    
    @Column({ nullable: true })
    student_skill3: string;
    
    @Column()
    user_no: string;

    // @ManyToOne(() => User, (user) => user.stats)
    @ManyToOne(() => User)
    @JoinColumn({ name: "user_no", referencedColumnName: "user_no" })
    user: User;

}
