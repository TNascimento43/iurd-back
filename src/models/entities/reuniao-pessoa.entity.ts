import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Reuniao} from "./reuniao.entity";
import {Pessoa} from "./pessoa.entity";
import {StatusPresencaEnum} from "../enums/status-presenca.enum";

@Entity()
export class ReuniaoPessoa extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ name: 'justificativa', nullable: true, type: 'varchar', length: 255 })
    justificativa: string;

    @Column({name: 'status', type: "text", enum: StatusPresencaEnum})
    status: StatusPresencaEnum;

    @JoinColumn({name: "reuniao_id"})
    @ManyToOne(type => Reuniao)
    reuniao: Reuniao;

    @JoinColumn({name: "pessoa_id"})
    @ManyToOne(type => Pessoa)
    pessoa: Pessoa;
}