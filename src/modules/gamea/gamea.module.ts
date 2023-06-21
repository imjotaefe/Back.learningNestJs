import { Module } from '@nestjs/common';
import { GameaService } from './gamea.service';
import { GameaController } from './gamea.controller';

@Module({
  controllers: [GameaController],
  providers: [GameaService],
})
export class GameaModule {}
