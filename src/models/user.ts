import { Effect } from "dva";
import { Reducer } from "redux";

export interface UserModelState {
    token?: string
}

export interface UserModelType {
    namespace: "user";
    state: UserModelState;
    effects: {
        fetchToken: Effect;
    };
    reducers: {
        saveToken: Reducer<UserModelState>;
    };
}

const initState: UserModelState = {

};

const UserModel: UserModelType = {
    namespace: "user",
    state: initState,
    effects: {
        *fetchToken(_, { call, put }) {
            const result = yield call(/* 放入请求函数，Promise函数 */);
            yield put({
                type: "saveUser",
                payload: result
            });
        },
    },
    reducers: {
        saveToken(state = initState, action) {
            return {
                ...state,
                token: action.payload
            }
        }
    }
};

export default UserModel;