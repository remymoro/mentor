import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InterfacePostSubject, InterfaceSubject } from './subject';
import { SUBJECTS } from './bdd';
import { SubjectService } from './subject.service';
import { LevelSubjectInterface } from 'src/level/level';

@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}


  @Get()
  findAll(): InterfaceSubject[] {
    return SUBJECTS;
  }

  @Get(':id')
  findOneById(@Param('id') id: string): InterfaceSubject {
    return this.subjectService.findOneById(+id);
  }

  @Post()
  addSubject(@Body() subject: InterfacePostSubject): InterfaceSubject[] {
    return this.subjectService.createNewSubject(subject);
  }
  
  @Get(':name/level')
  findLevelAndSubject(@Param('name') name: string): LevelSubjectInterface[] {
    return this.subjectService.levelAndSubjectFromName(name);
  }

}
