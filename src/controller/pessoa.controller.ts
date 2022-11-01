import {Body, Controller, Get, Logger, Param, Post, Put, UsePipes, ValidationPipe} from "@nestjs/common";
import {PessoaService} from "../services/pessoa.service";
import {PessoaDto} from "../models/dto/pessoa.dto";

@Controller('/api/pessoa')
export class PessoaController {
    logger = new Logger('PessoaController');

    constructor(private readonly service: PessoaService) {
    }

    @Get()
    async getAll(): Promise<PessoaDto[]> {
        return this.service.findAll();
    }

    @Post()
    @UsePipes(new ValidationPipe({transform: true}))
    async save(@Body() data: PessoaDto) {
        return this.service.save(data);
    }

    @Get('/:id')
    async getById(@Param('id') id: number): Promise<PessoaDto> {
        return this.service.findOne(id);
    }

    @Put('/:id')
    async alteraStatus(@Param('id') id: number) {
        return this.service.alteraStatus(id);
    }
}