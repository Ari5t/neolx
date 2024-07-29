import { Controller, Get } from '@nestjs/common';

import { AnnouncementsService } from './announcements.service';
import { Announcement } from './schemas/announcement.schemas';
@Controller('announcements')
export class AnnouncementsController {
  constructor(private announcementsService: AnnouncementsService) {}

  @Get()
  async findAll(): Promise<Announcement[]> {
    return this.announcementsService.findAll();
  }
}
