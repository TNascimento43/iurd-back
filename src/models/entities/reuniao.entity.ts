import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {TipoReuniao} from "./tipo-reuniao.entity";

@Entity()
export class Reuniao extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ name: 'data', nullable: false, type: 'date' })
    data: Date;

    @JoinColumn({name: "tipo_reuniao_id"})
    @ManyToOne(type => TipoReuniao)
    tipoReuniao: TipoReuniao;
}