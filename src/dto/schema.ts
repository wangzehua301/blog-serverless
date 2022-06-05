import { Rule, RuleType } from '@midwayjs/validate';
//参数校验规则的集合@rule,也就是接口规范


export class SchemaSaveDTO {
  @Rule(RuleType.string().required())
  schema: string;
}