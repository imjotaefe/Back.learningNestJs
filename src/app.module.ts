import { Module } from '@nestjs/common';
import { PlayerModule } from './modules/player/player.module';
import { GameaModule } from './modules/gamea/gamea.module';

@Module({
  imports: [PlayerModule, GameaModule],
})
export class AppModule {}
