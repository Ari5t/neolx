import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Announcement } from './schemas/announcement.schemas';

@Injectable()
export class AnnouncementsService {
  constructor(
    @InjectModel(Announcement.name)
    private announcementModel: Model<Announcement>,
  ) {}

  async findAll(): Promise<Announcement[]> {
    return this.announcementModel.find().exec();
  }
}
