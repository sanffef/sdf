import { Module } from '@nestjs/common';
import { CatsController } from './app.controller';
import { AppService } from './app.service';
import { PollsModule } from './polls/polls.module';
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [PollsModule, TypeOrmModule.forRoot({
    type:'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '2403',
    database: 'test',
    entities: [],
    synchronize: true,
  })],
  controllers: [CatsController],
  providers: [AppService],
})
export class AppModule {}
