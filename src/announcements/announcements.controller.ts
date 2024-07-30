import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

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

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.announcementsService.delete(id);
  }
}
