import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {TipoReuniaoController} from "../controller/tipo-reuniao.controller";
import {TipoReuniaoService} from "../services/tipo-reuniao.service";
import {TipoReuniaoRepository} from "../repositories/tipo-reuniao.repository";
import {ReuniaoRepository} from "../repositories/reuniao.repository";

@Module({
    imports: [TypeOrmModule.forFeature([TipoReuniaoRepository, ReuniaoRepository])],
    controllers: [TipoReuniaoController],
    providers: [TipoReuniaoService],
    exports: [TipoReuniaoService]
})
export class TipoReuniaoModule {
}
