import { Module } from '@nestjs/common';
import { CatsController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AccountModule } from './account/account.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mysql',
    host: 'localhost',
    port: 3306,
    username: 'student',
    password: 'student',
    database: 'local_project',
    entities: [],
    synchronize: true,
  }), AccountModule],
  controllers: [CatsController],
  providers: [AppService],
})
export class AppModule {}
