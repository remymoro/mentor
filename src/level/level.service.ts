import { Injectable } from '@nestjs/common';
import { LEVELS } from './bdd';
import { SubjectService } from 'src/subject/subject.service';
import {  } from 'src/subject/subject';
import { LevelInterface, LevelSubjectInterface } from './level';
import { BddService } from 'src/bdd/bdd.service';

@Injectable()
export class LevelService {
  constructor(
    private readonly subjectService: SubjectService,
    private bdd: BddService,
  ) {}
  findLevelAndSubjectByName(name: string): LevelSubjectInterface[] {
    const level = this.bdd
      .get<LevelInterface>('levels')
      .find((l) => l.name === name);
    const subjects = this.subjectService.findAll();
    const filteredSubject = subjects.filter((s) => s.levelId === level.id);
    return filteredSubject.map<LevelSubjectInterface>((subject) => ({
      subject,
      level,
    }));
  }
}