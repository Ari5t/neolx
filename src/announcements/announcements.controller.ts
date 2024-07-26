import { Controller } from '@nestjs/common';
import { AnnouncementsService } from './announcements.service';

@Controller('announcements')
export class AnnouncementsController {
  constructor(private announcementsService: AnnouncementsService) {}
}
