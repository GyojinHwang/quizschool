import { Expose } from "class-transformer";
import { BeforeInsert, Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import BaseEntity from './Entity';
import Question from "./Question";
import { User } from "./User";
import Template from './Template';

@Entity("games")
export default class Game extends BaseEntity {
    @Index()
    @Column({ unique: true })
    game_no: string;

    @Column({ nullable: false })
    template_no: string;

    @Column()
    user_no: string;

    @Column({ type: 'text', nullable: false  })
    game_name: string;

    @Column({ nullable: true })
    imageUrn: string;

    @Column()
    active: boolean;

    @ManyToOne(() => User)
    @JoinColumn({ name: "user_no", referencedColumnName: "user_no" })
    user: User;

    @ManyToOne(() => Template)
    @JoinColumn({ name: "template_no", referencedColumnName: "template_no" })
    template: Template;

    @OneToMany(() => Question, (question) => question.game)
    questions: Question[]


    @Expose()
    get imageUrl(): string {
        return this.imageUrn ? `${process.env.APP_URL}/images/${this.imageUrn}` :
            "https://www.gravatar.com/avatar?d=mp&f=y"
    }

    @BeforeInsert()
    validate() {
        if (!this.game_name) {
            throw new Error('게임 제목을 설정하세요.');
        }
    }
}