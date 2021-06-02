"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongodbDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'mongodb',
    connector: 'mongodb',
    url: 'mongodb://root:root@localhost:27017/central_db',
    host: 'localhost',
    port: 27017,
    user: 'root',
    password: 'root',
    database: 'central_db',
    useNewUrlParser: true
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let MongodbDataSource = class MongodbDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
MongodbDataSource.dataSourceName = 'mongodb';
MongodbDataSource.defaultConfig = config;
MongodbDataSource = tslib_1.__decorate([
    core_1.lifeCycleObserver('datasource'),
    tslib_1.__param(0, core_1.inject('datasources.config.mongodb', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], MongodbDataSource);
exports.MongodbDataSource = MongodbDataSource;
//# sourceMappingURL=mongodb.datasource.js.map