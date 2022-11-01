import {Module} from '@nestjs/common';
import {PessoaController} from "../controller/pessoa.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {PessoaRepository} from "../repositories/pessoa.repository";
import {PessoaService} from "../services/pessoa.service";

@Module({
    imports: [TypeOrmModule.forFeature([PessoaRepository])],
    controllers: [PessoaController],
    providers: [PessoaService],
    exports: [PessoaService]
})
export class PessoaModule {
}
