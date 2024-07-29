import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export enum Status {
  OPEN = 'open',
  CLOSE = 'close',
}

export type AnnouncementDocument = HydratedDocument<Announcement>;

@Schema()
export class Announcement {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop([String])
  images: string[];

  @Prop({ default: Status.OPEN })
  status: Status;
}

export const AnnouncementSchema = SchemaFactory.createForClass(Announcement);

// Duplicate the ID field.
AnnouncementSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
AnnouncementSchema.set('toJSON', { virtuals: true });

// To be able to see virtuals in output when using console.log(obj)
AnnouncementSchema.set('toObject', { virtuals: true });
