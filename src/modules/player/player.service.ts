import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PlayerDTO } from './player.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class PlayerService {
  constructor(private prisma: PrismaService) {}

  async create(data: PlayerDTO) {
    const playerExists = await this.prisma.player.findFirst({
      where: {
        employerCode: data.employerCode,
      },
    });

    if (playerExists) {
      throw new ConflictException('player already exist!');
    }

    const player = await this.prisma.player.create({
      data,
    });

    return player;
  }

  async update(employerCode: string, data: PlayerDTO) {
    const playerFounded = await this.prisma.player.findUnique({
      where: {
        employerCode: employerCode,
      },
    });

    if (!playerFounded) {
      throw new NotFoundException('player does not exist');
    }

    const updatedPlayer = await this.prisma.player.update({
      data,
      where: {
        employerCode: employerCode,
      },
    });

    return updatedPlayer;
  }

  async delete(employerCode: string) {
    const playerFounded = await this.prisma.player.findUnique({
      where: {
        employerCode: employerCode,
      },
    });

    if (!playerFounded) {
      throw new NotFoundException('player does not exist');
    }

    const deletedPlayer = await this.prisma.player.delete({
      where: {
        employerCode: employerCode,
      },
    });

    return deletedPlayer;
  }

  async findAll() {
    return this.prisma.player.findMany();
  }
}
