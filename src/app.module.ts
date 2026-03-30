import { Module } from '@nestjs/common';
import { CatsController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AccountModule } from './account/account.module';
import { Account } from './account/entities/account.entity';
import { PollsModule } from './polls/polls.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mysql',
    host: 'localhost',
    port: 3306,
    username: 'student',
    password: 'student',
    database: 'local_project',
    entities: [Account],
    synchronize: true,
  }), AccountModule, PollsModule],
  controllers: [CatsController],
  providers: [AppService],
})
export class AppModule {}
