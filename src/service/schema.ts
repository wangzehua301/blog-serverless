import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Schema } from '../entity/schema';
import { Repository } from 'typeorm';

//具体用来给数据库存，取数据的方法
@Provide()
export class SchemaService {

    @InjectEntityModel(Schema)
  schemaModel: Repository<Schema>;

    //像数据库里面新增一条数据
  async save(schemaStr: string) {
    const schema = new Schema();
    schema.schema = schemaStr;
    // save entity
    const result = await this.schemaModel.save(schema);
    //Response里面的数据内容
    return result;
  }

  async getLatestOne(){
    const schema = await this.schemaModel.findOne({
      select: ['schema'],
      order: {id: 'DESC' },//取数据库中最后一条id的数据
    })
    return schema
  } 
}   