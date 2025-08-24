import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { ShowsController } from './shows.controller';
import { ShowsService } from './shows.service';

@Module({
  imports: [HttpModule],
  controllers: [ShowsController],
  providers: [ShowsService],
})
export class ShowsModule {}
