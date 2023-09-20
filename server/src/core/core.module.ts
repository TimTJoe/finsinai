import { Module } from '@nestjs/common';
import { CoreService } from './core.service';
import { CoreController } from './core.controller';
import { AuthController } from '@src/auth/auth.controller';
import { AuthModule } from '@src/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '@src/auth/auth.guard';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from '@src/user/user.module';
import { BudgetsModule } from '@src/budgets/budgets.module';
import { BudgetsController } from '@src/budgets/budgets.controller';
import { AccountModule } from '@src/account/account.module';
import { AccountController } from '@src/account/account.controller';
import {CorsModule} from '@nestjs/platform-express'; // Import CorsModule

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local'],
    }),
    CorsModule.forRoot({
      origin: process.env.FRONTEND_URI, // Replace with your frontend's URL
      methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
      allowedHeaders: ['Authorization', ],
      credentials: true, // Allow cookies and credentials
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AuthModule,
    JwtModule,
    BudgetsModule,
    AuthModule,
    AccountModule,
  ],
  providers: [
    CoreService,
    {
      //protect all endpoints by default
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  controllers: [
    CoreController,
    AuthController,
    BudgetsController,
    AccountController,
  ],
})
export class CoreModule {}
