import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {User} from "./User";
import {Post} from "./Post";

@Entity('comments')
export class Comment extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column('text')
    content: string;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updateAt: Date;
    @ManyToOne('User', 'comments')
    user: User;
    @ManyToOne('Post', 'comments')
    post: Post;
}
