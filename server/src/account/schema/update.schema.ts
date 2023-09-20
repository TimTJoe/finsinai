import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';

@Schema()
export class Update extends Document {
    @Prop()
    key: string

    @Prop()
    value: string
}