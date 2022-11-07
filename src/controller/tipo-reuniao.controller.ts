import {Body, Controller, Delete, Get, Logger, Param, Post, UsePipes, ValidationPipe} from "@nestjs/common";
import {TipoReuniaoService} from "../services/tipo-reuniao.service";
import {TipoReuniaoDto} from "../models/dto/tipo-reuniao.dto";

@Controller('/api/tipo-reuniao')
export class TipoReuniaoController {
    logger = new Logger('TipoReuniaoController');

    constructor(private readonly service: TipoReuniaoService) {
    }

    @Get()
    async getAll(): Promise<TipoReuniaoDto[]> {
        return this.service.findAll();
    }

    @Post()
    @UsePipes(new ValidationPipe({transform: true}))
    async save(@Body() data: TipoReuniaoDto) {
        return this.service.save(data);
    }

    @Get('/:id')
    async getById(@Param('id') id: number): Promise<TipoReuniaoDto> {
        return this.service.findOne(id);
    }

    @Delete('/:id')
    async detelar(@Param('id') id: number) {
        return this.service.deletar(id);
    }
}