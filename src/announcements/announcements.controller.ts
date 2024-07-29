import { Body, Controller, Get, Post } from '@nestjs/common';

import { AnnouncementsService } from './announcements.service';
import { Announcement } from './schemas/announcement.schemas';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
@Controller('announcements')
export class AnnouncementsController {
  constructor(private announcementsService: AnnouncementsService) {}

  @Get()
  async findAll(): Promise<Announcement[]> {
    return this.announcementsService.findAll();
  }

  @Post()
  async create(
    @Body() createAnnouncementDto: CreateAnnouncementDto,
  ): Promise<Announcement> {
    return this.announcementsService.create(createAnnouncementDto);
  }
}
