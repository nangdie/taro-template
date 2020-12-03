import { Effect } from "dva";
import { Reducer } from "redux";
import { showToast, hideLoading } from "@tarojs/taro";

export interface AppModelState {
    name: string		// 定义state的变量
    count: number
}

export interface AppModelType {
    namespace: "app";					// 这个名字调用这里的方法的时候需要使用
    /**
    * 例如：在页面中调用
    * useDispatch({
    *   type: "app/fetchApp"
    * })
    */
    state: AppModelState;
    effects: {
        fetchApp: Effect;
        fetchCount: Effect;
    };
    reducers: {
        saveApp: Reducer<AppModelState>;
        saveCount: Reducer<AppModelState>;
    };
}

const initState: AppModelState = {
    name: 'nangdie',
    count: 0
};

const AppModel: AppModelType = {
    namespace: "app",
    state: initState,
    effects: {
        *fetchApp(_, { call, put }) {
            const result = yield call(/* 放入请求函数，Promise函数 */);
            yield put({
                type: "saveApp",
                payload: result
            });
        },
        *fetchCount(_, { call, put }) {
            const getCount = () => new Promise((resolve) => { //模拟请求 , 假装我在等待服务器返回结果
                showToast({
                    title: "请求中...",
                    mask: true,
                    icon: "loading"
                });
                setTimeout(() => {
                    resolve(new Date().getTime())
                    hideLoading();
                }, 3000);
            })

            const result = yield call(getCount)
            yield put({         // 调用保存
                type: "saveCount",
                payload: result
            })
        }
    },
    reducers: {
        saveApp(state = initState, action) { return { ...state, ...action } },
        saveCount(state = initState, action) {
            console.log(action, '.action')
            return {
                ...state,
                count: action.payload
            }
        }
    }
};

export default AppModel;