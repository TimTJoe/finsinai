import { Controller, Get } from '@nestjs/common';
import { CoreService } from './core.service';
import { Public } from '@src/auth/auth.decorator';

@Controller()
export class CoreController {
  constructor(private coreService: CoreService) {}

  @Public()
  @Get()
  welcome() {
    return this.coreService.welcome();
  }
}
