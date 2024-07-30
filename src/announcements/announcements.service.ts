import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Announcement, Status } from './schemas/announcement.schemas';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';

@Injectable()
export class AnnouncementsService {
  constructor(
    @InjectModel(Announcement.name)
    private announcementModel: Model<Announcement>,
  ) {}

  async findAll(): Promise<Announcement[]> {
    return this.announcementModel.find().exec();
  }

  async create(
    createAnnouncementDto: CreateAnnouncementDto,
  ): Promise<Announcement> {
    return this.announcementModel.create(createAnnouncementDto);
  }

  async update(
    id: string,
    updateAnnouncementDto: UpdateAnnouncementDto,
  ): Promise<Announcement> {
    return this.announcementModel.findByIdAndUpdate(id, updateAnnouncementDto, {
      new: true,
    });
  }

  async delete(id: string): Promise<void> {
    await this.announcementModel.findByIdAndUpdate(id, {
      status: Status.CLOSE,
    });
  }
}
