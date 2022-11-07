import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ReuniaoPessoaController} from "../controller/reuniao-pessoa.controller";
import {ReuniaoPessoaRepository} from "../repositories/reuniao-pessoa.repository";
import {ReuniaoPessoaService} from "../services/reuniao-pessoa.service";

@Module({
    imports: [TypeOrmModule.forFeature([ReuniaoPessoaRepository])],
    controllers: [ReuniaoPessoaController],
    providers: [ReuniaoPessoaService],
    exports: [ReuniaoPessoaService]
})
export class ReuniaoPessoaModule {
}
