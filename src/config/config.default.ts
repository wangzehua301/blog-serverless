export const middleware = ['errorMiddleware'];

export const orm = {
  /**
   * 单数据库实例
   */
  type: 'mysql',
  host: 'rm-2ze1d54dcj18sy3g9vo.mysql.rds.aliyuncs.com',
  port: 3306,
  username: 'wzh_blog',
  password: 'Wzh123123',
  database: 'blog',
  //自动化同步到数据库
  synchronize: true,
  logging: false,
  cors: {
    credentials: false,
    origin:"*",
    allowMethods:" * "
  },
};
