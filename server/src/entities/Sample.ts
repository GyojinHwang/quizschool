import { BeforeInsert, Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import BaseEntity from './Entity';

@Entity("samples")
export default class Sample extends BaseEntity {
    @Index()
    @Column()
    sample_title: string;

    @Column()
    sample_answer1: string;

    @Column()
    sample_answer2: string;

    @Column()
    sample_answer3: string;

    @Column()
    sample_answer4: string;

    @Column()
    sample_answer_no: string;

    @Column({ nullable: true })
    sample_description: string;

    @Column()
    sample_grade: string;

    @Column()
    sample_subject: string;

    @Column()
    sample_chapter: string;
}