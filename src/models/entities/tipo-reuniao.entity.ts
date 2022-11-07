import {BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique} from 'typeorm';

@Entity()
@Unique(['nome'])
export class TipoReuniao extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ name: 'nome', nullable: false, type: 'varchar', length: 255 })
    nome: string;
}