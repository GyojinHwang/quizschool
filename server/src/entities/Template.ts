import { Expose } from "class-transformer";
import { Column, Entity, Index } from "typeorm";
import BaseEntity from './Entity';


@Entity("templates")
export default class Template extends BaseEntity {
    @Index()
    @Column({ unique: true })
    template_no: string;

    @Column({ unique: true })
    template_name: string;

    @Column({ type: 'text', nullable: true })
    template_description: string;

    @Column({ nullable: true })
    imageUrn: string;

    @Expose()
    get imageUrl(): string {
        return this.imageUrn ? `${process.env.APP_URL}/images/${this.imageUrn}` :
            "https://www.gravatar.com/avatar?d=mp&f=y"
    }
}