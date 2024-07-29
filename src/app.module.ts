import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnnouncementsModule } from './announcements/announcements.module';

const DATABASE_URL = 'mongodb://localhost:27018/neolx';

@Module({
  imports: [MongooseModule.forRoot(DATABASE_URL), AnnouncementsModule],
})
export class AppModule {}
