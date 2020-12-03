import { create } from 'dva-core'
import { createLogger } from 'redux-logger'
import createLoading from 'dva-loading'

let app, store, dispatch, registered

function createApp(options?: any) {
    const { models } = options
    if (process.env.NODE_ENV === 'development') {
        // 是否打印redux变化的日志
        options.onAction = [createLogger()]
    }
    app = create({ ...options })
    app.use(createLoading({}))
    if (!registered) models.forEach((model) => app.model(model))
    registered = true
    app.start()

    store = app._store
    app.getStore = () => store

    dispatch = store.dispatch
    app.dispatch = dispatch
    return app
}

export default {
    createApp,
    getDispatch() {
        return app.dispatch
    }
}