import { Injectable } from '@nestjs/common';

@Injectable()
export class CoreService {

  welcome() {
    return 'Hello World!';
  }

}
