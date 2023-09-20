import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthModule } from '@src/auth/auth.module';

@Module({
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
