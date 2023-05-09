import { Exclude, Expose } from 'class-transformer';
import { BeforeInsert, Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { makeId, slugify } from '../utils/helpers';
import BaseEntity from './Entity';
import Game from './Game';
import { User } from './User';

@Entity("questions")
export default class Question extends BaseEntity {
    @Index()
    @Column({ nullable: false })
    question_no: string;
    
    @Column({ nullable: false })
    question_title: string;

    @Column({ nullable: false })
    game_no: string;

    @Column({ nullable: false })
    user_no: string;
    
    @Column({ nullable: false })
    question_answer1: string;

    @Column({ nullable: false })
    question_answer2: string;

    @Column({ nullable: false })
    question_answer3: string;

    @Column({ nullable: false })
    question_answer4: string;

    @Column({ nullable: false })
    question_answer_no: string;

    @Column({ nullable: true })
    question_description: string;

    @Column()
    active: boolean;

    @ManyToOne(() => User, (user) => user.questions)
    @JoinColumn({ name: "user_no", referencedColumnName: "user_no" })
    user: User;

    @ManyToOne(() => Game, (game) => game.questions)
    @JoinColumn({ name: "game_no", referencedColumnName: "game_no"})
    game: Game;

    @Expose() get url(): string {
        return `/games/${this.game_no}/${this.question_no}`
    }

    @BeforeInsert()
    validate() {
        if (!this.question_title) {
            throw new Error('문제를 입력하세요.');
        }

        if (!this.question_answer1 || !this.question_answer2 || !this.question_answer3 || !this.question_answer4 ) {
            throw new Error('보기를 입력하세요');
        }

        if (!this.question_answer_no ) {
            throw new Error('정답을 선택하세요.');
        }
     
    }
}