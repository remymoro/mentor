import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubjectController } from './subject/subject.controller';
import { SubjectService } from './subject/subject.service';
import { SubjectModule } from './subject/subject.module';
import { LevelModule } from './level/level.module';

@Module({
  imports: [SubjectModule, LevelModule],
  controllers: [AppController, SubjectController],
  providers: [AppService, SubjectService],
})
export class AppModule {}
