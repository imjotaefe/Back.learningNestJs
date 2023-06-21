import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { PlayerService } from './player.service';
import { PlayerDTO } from './player.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post()
  async create(@Body() data: PlayerDTO) {
    return this.playerService.create(data);
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAll() {
    return this.playerService.findAll();
  }

  @Put(':employerCode')
  async update(
    @Param('employerCode') employerCode: string,
    @Body() data: PlayerDTO,
  ) {
    return this.playerService.update(employerCode, data);
  }

  @Delete(':employerCode')
  async delete(@Param('employerCode') employerCode: string) {
    return this.playerService.delete(employerCode);
  }
}
