import {Module} from '@nestjs/common';
import {PessoaController} from "../controller/pessoa.controller";
// import {TypeOrmModule} from "@nestjs/typeorm";
// import {PessoaRepository} from "../repositories/pessoa.repository";
import {PessoaService} from "../services/pessoa.service";
import {SupabaseFeignClient} from "../feign/supabase";

@Module({
    // imports: [TypeOrmModule.forFeature([PessoaRepository])],
    controllers: [PessoaController],
    providers: [PessoaService, SupabaseFeignClient],
    exports: [PessoaService]
})
export class PessoaModule {
}
