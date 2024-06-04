import { Body, Controller, Get, Post } from '@nestjs/common';
import { InterfaceSubject } from './subject';
import { SUBJECTS } from './bdd';

@Controller('subject')
export class SubjectController {

  @Post()
  addSubject(@Body() subject: InterfaceSubject): InterfaceSubject[] {
    return [...SUBJECTS, subject];
  }


  @Get()
  findAll(): InterfaceSubject[] {
    return SUBJECTS;
  }
}
