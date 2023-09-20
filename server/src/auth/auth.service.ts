import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '@src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  //TODO: use pipe to validate incoming data for all methods
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  public welcome(): string {
    return 'Authenticating...';
  }

  public async signIn(email: string, pass: string) {
    const user = this.userService.findOne(email);
    if (user?.password !== pass) {
      throw new UnauthorizedException('Wrong email/password');
    }

    const payload = { sub: user.userId, details: user };
    const token = await this.jwtService.signAsync(payload);
    return { access_token: token, payload };
  }

  public signUp(UserDTO: Record<string, any>) {
    return this.userService.create(UserDTO);
  }
}
