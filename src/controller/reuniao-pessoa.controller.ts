import {Body, Controller, Get, Logger, Param, Post, UsePipes, ValidationPipe} from "@nestjs/common";
import {ReuniaoPessoaService} from "../services/reuniao-pessoa.service";
import {ReuniaoPessoaDto} from "../models/dto/reuniao-pessoa.dto";

@Controller('/api/reuniao-pessoa')
export class ReuniaoPessoaController {
    logger = new Logger('ReuniaoPessoaController');

    constructor(private readonly service: ReuniaoPessoaService) {
    }

    @Get('/reuniao/:id')
    async getAll(@Param('id') id: number): Promise<ReuniaoPessoaDto[]> {
        return this.service.findAll(id);
    }

    @Post()
    @UsePipes(new ValidationPipe({transform: true}))
    async save(@Body() data: ReuniaoPessoaDto) {
        return this.service.salvar(data);
    }
}