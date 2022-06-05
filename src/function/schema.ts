import { Inject, Provide, Controller, Get, Post , Body , ALL , Headers} from '@midwayjs/decorator';
import { Validate } from '@midwayjs/validate'
import { Context } from '@midwayjs/faas';
import { SchemaService } from '../service/schema';
import { SchemaSaveDTO } from '../dto/schema';
import { getStandardResponse} from '../util/common';
import { AuthenticationClient } from 'authing-js-sdk'

@Provide()
@Controller('/api/schema/')
export class APIService {
  @Inject()
  ctx: Context;

  //往controller类里面注入外部的属性
  @Inject()
  schemaService: SchemaService;

  @Get('/getLatestOne',{middleware: ['errorMiddleware']})
  async getLatestOne() {
    const result = await this.schemaService.getLatestOne();
    return getStandardResponse(true, result);
  }
 
  //从请求体body里面拿到数据
  @Post('/save',{middleware: ['errorMiddleware']})
  @Validate()
  async save(@Body(ALL) bodyObj: SchemaSaveDTO , @Headers('token') token: string) {
    const authing = new AuthenticationClient({
      appId: '62510c7b94e095bc30cf1ce1',
      appHost: 'https://serverlessblog.authing.cn',
      token,
    });
    const user = await authing.getCurrentUser()
    if(user?.username === 'wzh'){
      const result = await this.schemaService.save(bodyObj.schema);
      return getStandardResponse(true, result);
    }else{
      return getStandardResponse(false, null , '您没有登录权限');
    }
    
  }
}
