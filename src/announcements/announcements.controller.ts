import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { AnnouncementsService } from './announcements.service';
import { Announcement } from './schemas/announcement.schemas';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';
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

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAnnouncementDto: UpdateAnnouncementDto,
  ): Promise<Announcement> {
    return this.announcementsService.update(id, updateAnnouncementDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.announcementsService.delete(id);
  }
}
