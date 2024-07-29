import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Announcement } from './schemas/announcement.schemas';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';

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
    сreateAnnouncementDto: CreateAnnouncementDto,
  ): Promise<Announcement> {
    return this.announcementModel.create(сreateAnnouncementDto);
  }
}
