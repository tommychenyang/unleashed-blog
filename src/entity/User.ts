import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Post } from "./Post";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    username: string;
    @Column('varchar')
    passwordDigest: string;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updateAt: Date;

    @OneToMany('Post', 'author')
    posts: Post[];
    @OneToMany('Comment', 'user')
    comments: Comment[];

}
