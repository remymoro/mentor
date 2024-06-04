import { Injectable } from '@nestjs/common';
import { LEVELS } from './bdd';
import { SubjectService } from 'src/subject/subject.service';
import {  } from 'src/subject/subject';
import { LevelSubjectInterface } from './level';

@Injectable()
export class LevelService {
  constructor(private readonly subjectService: SubjectService) {}
  findLevelAndSubjectByName(name: string): LevelSubjectInterface[] {
    const level = LEVELS.find((l) => l.name === name);
    const subjects = this.subjectService.findAll();
    const filteredSubject = subjects.filter((s) => s.levelId === level.id);
    return filteredSubject.map<LevelSubjectInterface>((subject) => ({
      subject,
      level,
    }));
  }
}