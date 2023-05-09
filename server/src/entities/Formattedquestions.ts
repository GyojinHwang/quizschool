import { BeforeInsert, Column, Entity, Index } from 'typeorm';
import BaseEntity from './Entity';


@Entity("formattedquestions")
export default class Question extends BaseEntity {
    @Index()
    @Column({ nullable: false })
    question1_title: string;

    @Column()
    game_no: string;
    
    @Column({ nullable: false })
    question1_answer1: string;
    
    @Column({ nullable: false })
    question1_answer2: string;
    
    @Column({ nullable: false })
    question1_answer3: string;
    
    @Column({ nullable: false })
    question1_answer4: string;
    
    @Column({ nullable: false })
    question1_answer_no: string;
    
    @Column({ nullable: false })
    question1_description: string;
    
    @Column({ nullable: false })
    question2_title: string;
    
    @Column({ nullable: false })
    question2_answer1: string;
    
    @Column({ nullable: false })
    question2_answer2: string;
    
    @Column({ nullable: false })
    question2_answer3: string;
    
    @Column({ nullable: false })
    question2_answer4: string;
    
    @Column({ nullable: false })
    question2_answer_no: string;
    
    @Column({ nullable: false })
    question2_description: string;
    
    @Column({ nullable: false })
    question3_title: string;
    
    @Column({ nullable: false })
    question3_answer1: string;
    
    @Column({ nullable: false })
    question3_answer2: string;
    
    @Column({ nullable: false })
    question3_answer3: string;
    
    @Column({ nullable: false })
    question3_answer4: string;
    
    @Column({ nullable: false })
    question3_answer_no: string;
    
    @Column({ nullable: false })
    question3_description: string;
    
    @Column({ nullable: false })
    question4_title: string;
    
    @Column({ nullable: false })
    question4_answer1: string;
    
    @Column({ nullable: false })
    question4_answer2: string;
    
    @Column({ nullable: false })
    question4_answer3: string;
    
    @Column({ nullable: false })
    question4_answer4: string;
    
    @Column({ nullable: false })
    question4_answer_no: string;
    
    @Column({ nullable: false })
    question4_description: string;
    
    @Column({ nullable: false })
    question5_title: string;
    
    @Column({ nullable: false })
    question5_answer1: string;
    
    @Column({ nullable: false })
    question5_answer2: string;
    
    @Column({ nullable: false })
    question5_answer3: string;
    
    @Column({ nullable: false })
    question5_answer4: string;
    
    @Column({ nullable: false })
    question5_answer_no: string;
    
    @Column({ nullable: false })
    question5_description: string;
    
    @Column({ nullable: false })
    question6_title: string;
    
    @Column({ nullable: false })
    question6_answer1: string;
    
    @Column({ nullable: false })
    question6_answer2: string;
    
    @Column({ nullable: false })
    question6_answer3: string;
    
    @Column({ nullable: false })
    question6_answer4: string;
    
    @Column({ nullable: false })
    question6_answer_no: string;
    
    @Column({ nullable: false })
    question6_description: string;
    
    @Column({ nullable: false })
    question7_title: string;
    
    @Column({ nullable: false })
    question7_answer1: string;
    
    @Column({ nullable: false })
    question7_answer2: string;
    
    @Column({ nullable: false })
    question7_answer3: string;
    
    @Column({ nullable: false })
    question7_answer4: string;
    
    @Column({ nullable: false })
    question7_answer_no: string;
    
    @Column({ nullable: false })
    question7_description: string;
    
    @Column({ nullable: false })
    question8_title: string;
    
    @Column({ nullable: false })
    question8_answer1: string;
    
    @Column({ nullable: false })
    question8_answer2: string;
    
    @Column({ nullable: false })
    question8_answer3: string;
    
    @Column({ nullable: false })
    question8_answer4: string;
    
    @Column({ nullable: false })
    question8_answer_no: string;
    
    @Column({ nullable: false })
    question8_description: string;
    
    @Column({ nullable: false })
    question9_title: string;
    
    @Column({ nullable: false })
    question9_answer1: string;
    
    @Column({ nullable: false })
    question9_answer2: string;
    
    @Column({ nullable: false })
    question9_answer3: string;
    
    @Column({ nullable: false })
    question9_answer4: string;
    
    @Column({ nullable: false })
    question9_answer_no: string;
    
    @Column({ nullable: false })
    question9_description: string;
    
    @Column({ nullable: false })
    question10_title: string;
    
    @Column({ nullable: false })
    question10_answer1: string;
    
    @Column({ nullable: false })
    question10_answer2: string;
    
    @Column({ nullable: false })
    question10_answer3: string;
    
    @Column({ nullable: false })
    question10_answer4: string;
    
    @Column({ nullable: false })
    question10_answer_no: string;
    
    @Column({ nullable: false })
    question10_description: string;
    
    @BeforeInsert()
    validate() {
        if (!this.question1_title || !this.question2_title ||!this.question3_title || !this.question4_title || !this.question5_title || !this.question6_title || !this.question7_title || !this.question8_title || !this.question9_title || !this.question10_title ) {
            throw new Error('문제를 입력하세요.');
        }

        if (!this.question1_answer1 || !this.question1_answer2 || !this.question1_answer3 || !this.question1_answer4 || !this.question2_answer1 || !this.question2_answer2 || !this.question2_answer3 || !this.question2_answer4 || !this.question3_answer1 || !this.question3_answer2 || !this.question3_answer3 || !this.question3_answer4 || !this.question4_answer1 || !this.question4_answer2 || !this.question4_answer3 || !this.question4_answer4 || !this.question5_answer1 || !this.question5_answer2 || !this.question5_answer3 || !this.question5_answer4 || !this.question6_answer1 || !this.question6_answer2 || !this.question6_answer3 || !this.question6_answer4 || !this.question7_answer1 || !this.question7_answer2 || !this.question7_answer3 || !this.question7_answer4 || !this.question8_answer1 || !this.question8_answer2 || !this.question8_answer3 || !this.question8_answer4 || !this.question9_answer1 || !this.question9_answer2 || !this.question9_answer3 || !this.question9_answer4 || !this.question10_answer1 || !this.question10_answer2 || !this.question10_answer3 || !this.question10_answer4) {
            throw new Error('보기를 입력하세요');
        }

        if (!this.question1_answer_no || !this.question2_answer_no || !this.question3_answer_no || !this.question4_answer_no || !this.question5_answer_no || !this.question6_answer_no || !this.question7_answer_no || !this.question8_answer_no || !this.question9_answer_no || !this.question10_answer_no) {
            throw new Error('정답을 선택하세요.');
        }
     
    }
}