import {Controller, Get, Logger} from "@nestjs/common";

@Controller('/api/pessoa')
export class PessoaController {
    logger = new Logger('PessoaController');

    // constructor(private readonly service: PatientService) {
    // }

    @Get()
    async getAll(): Promise<String> {
        return "Hello";
    }
}