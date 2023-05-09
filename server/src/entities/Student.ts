import { Expose } from "class-transformer";
import { Column, Entity, Index, JoinColumn, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import BaseEntity from './Entity';
import { User } from "./User";

@Entity("students")
export default class Student extends BaseEntity {
    @Index()
    @Column({ unique: true })
    student_id: string;

    @Column()
    studentname: string;

    @Column()
    level: number;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({ nullable: true })
    studentImage: string;

    @Column()
    username: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: "username", referencedColumnName: "username" })
    user: User;

    @Expose()
    get studentImageUrl(): string {
        return this.studentImage ? `${process.env.APP_URL}/images/${this.studentImage}` :
            "https://www.gravatar.com/avatar?d=mp&f=y"
    }

}