
import { Effect } from "dva";
import { Reducer } from "redux";
export interface TestModelState {
}
export interface TestModelType {
    namespace: "test";
    state: TestModelState;
    effects: {
        fetchTest: Effect;
    };
    reducers: {
        saveTest: Reducer<TestModelState>;
    };
}
const initState: TestModelState = {
};
const TestModel: TestModelType = {
    namespace: "test",
    state: initState,
    effects: {
        *fetchTest(_, { call, put }) {
        },
    },
    reducers: {
        saveTest(state = initState, action) {
            return { ...state, ...action.payload }
        }
    }
};
export default TestModel;
