import {BaseEntity, Entity, Unique, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm';
import {TituloEnum} from "../enums/titulo.enum";

@Entity()
@Unique(['email'])
export class Pessoa extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column({ name: 'nome', nullable: false, type: 'varchar', length: 255 })
    nome: string;

    @Column({ name: 'email', nullable: true, type: 'varchar', length: 100 })
    email: string;

    @Column({ name: 'telefone', nullable: true, type: 'varchar', length: 50 })
    telefone: string;

    @Column({ name: 'ativo', nullable: true, default: true })
    ativo: boolean;

    @Column({name: 'data_nascimento', nullable: true})
    dataNascimento: Date;

    @CreateDateColumn()
    criacao: Date;

    @UpdateDateColumn()
    atualizacao: Date;

    @Column({name: 'titulo', type: "text", enum: TituloEnum})
    titulo: TituloEnum;
}