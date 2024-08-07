import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PessoaModule} from "./module/pessoa.module";
// import {TypeOrmModule} from "@nestjs/typeorm";
// import {typeOrmConfig} from "./config/typeorm.config";
// import {TipoReuniaoModule} from "./module/tipo-reuniao.module";
// import {ReuniaoModule} from "./module/reuniao.module";
// import {ReuniaoPessoaModule} from "./module/reuniao-pessoa.module";

@Module({
  imports: [PessoaModule,
    // TipoReuniaoModule, ReuniaoModule, ReuniaoPessoaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
