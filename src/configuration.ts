import { Configuration } from '@midwayjs/decorator';
import { ILifeCycle } from '@midwayjs/core';
import * as validate from '@midwayjs/validate';
import * as orm from '@midwayjs/orm';
import * as faas from '@midwayjs/faas';
import * as defaultConfig from './config/config.default';
import * as crossDomain from '@midwayjs/cross-domain';

@Configuration({
  imports: [
    faas, 
    orm, 
    validate,
    crossDomain
  ],
  importConfigs: [
    {
      default: defaultConfig,
    },
  ],
  conflictCheck: true,
})

export class ContainerLifeCycle implements ILifeCycle {
  async onReady() {}
}
