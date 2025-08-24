import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShowsModule } from './shows/shows.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ShowsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
