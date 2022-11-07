import {Body, Controller, Delete, Get, Logger, Param, Post, UsePipes, ValidationPipe} from "@nestjs/common";
import {ReuniaoService} from "../services/reuniao.service";
import {ReuniaoDto} from "../models/dto/reuniao.dto";

@Controller('/api/reuniao')
export class ReuniaoController {
    logger = new Logger('ReuniaoController');

    constructor(private readonly service: ReuniaoService) {
    }

    @Get()
    async getAll(): Promise<ReuniaoDto[]> {
        return this.service.findAll();
    }

    @Post()
    @UsePipes(new ValidationPipe({transform: true}))
    async save(@Body() data: ReuniaoDto) {
        return this.service.save(data);
    }

    @Get('/:id')
    async getById(@Param('id') id: number): Promise<ReuniaoDto> {
        return this.service.findOne(id);
    }

    @Delete('/:id')
    async detelar(@Param('id') id: number) {
        return this.service.deletar(id);
    }
}