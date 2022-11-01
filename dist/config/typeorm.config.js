"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
exports.typeOrmConfig = {
    type: 'postgres',
    host: 'ec2-54-227-248-71.compute-1.amazonaws.com',
    port: 5432,
    username: 'dbbvmahgibvbwy',
    password: '2793daa0a94c1598508edbb987168b23d2e747a2173e42ff3af1029f4f4b2a5e',
    database: 'd7lgaf0cr8iqhm',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
    ssl: { rejectUnauthorized: false }
};
//# sourceMappingURL=typeorm.config.js.map