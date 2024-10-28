import { Injectable } from '@nestjs/common'
import { add } from '@parkit/sample-lib'
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! ' + add(4, 999)
  }
}
