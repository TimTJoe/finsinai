import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';

@Schema()
export class Account extends Document {
  
  @Prop({ required: true })
  @IsNotEmpty()
  @Matches(/^[a-zA-Z_.]+$/, {
    message: 'Invalid character in name.',
  })
  fullname: string;

  @Prop({ required: true, unique: true })
  @IsNotEmpty()
  @IsEmail({}, { message: 'Invalid email format' }) // Validate email format
  email: string;

  @Prop({ required: true })
  @IsNotEmpty()
  @Length(6, 30)
  password: string;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
