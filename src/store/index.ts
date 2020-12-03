import dva from './dva';
import models from '../models/index';

const dvaApp = dva.createApp({
    initialState: {},
    models      // 创建
});

const store = dvaApp.getStore();

export default store;