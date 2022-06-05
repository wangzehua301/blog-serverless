import { Inject, Provide, Controller, Get } from '@midwayjs/decorator';
import { Context } from '@midwayjs/faas';
import axios from 'axios';

@Provide()
@Controller('/')
export class HomeController {
  @Inject()
  ctx: Context;

  @Get('/', { middleware: ['errorMiddleware'] })
  async home() {
    const result = await axios.get('http://static.wanggyp.top/code/index.html');
    return result.data;
  }
  @Get('/admin', { middleware: ['errorMiddleware'] })
  async admin() {
    const result = await axios.get('http://static.wanggyp.top/code/admin.html');
    return result.data;
  }
}
