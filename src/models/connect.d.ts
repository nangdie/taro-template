import { AnyAction } from 'redux';
import { EffectsCommandMap } from 'dva';

// import { UserModelState } from './user'; 其他model的文件可以导入这里，统一导出
// export { UserModelState };

export interface Loading {
    global: boolean;
    effects: { [key: string]: boolean | undefined };
    models: {
        global?: boolean;
        menu?: boolean;
        setting?: boolean;
        user?: boolean;
    };
}

export interface ConnectState {
    loading: Loading;
    // user: UserModelState;
}

export type Effect = (
    action: AnyAction,
    effects: EffectsCommandMap & { select: <T>(func: (state: ConnectState) => T) => T },
) => void;

/**
 * @type P: Type of payload
 * @type C: Type of callback
 */
export type Dispatch = <P = any, C = (payload: P) => void>(action: {
    type: string;
    payload?: P;
    callback?: C;
    [key: string]: any;
}) => any;


// export interface ConnectProps<T = {}> extends Partial<RouterTypes<Route, T>> {
export interface ConnectProps {
    dispatch: Dispatch;
}