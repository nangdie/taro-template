declare namespace API {
  export interface BasicData<T> {
    errcode: number
    errmsg: string
    data: T
  }
  export interface ListData<T> extends BasicData<undefined> {
    data: {
      list: T[],
      totalCount: number
    }
  }

  export interface CurrentUser {
    avatar?: string;
    name?: string;
    title?: string;
    mobile?: string;
    email?: string;
    qr_code?: string;
    userid?: string;
    status?: number;
    isRoot?: boolean;
    gender?: string;
    updateAt?: string;
    createAt?: string;
  }

  export interface LoginStateType {
    status?: 'ok' | 'error';
    type?: string;
  }

  export interface ListParams {
    pageSize?: number;
    current?: number;
    keyword?: string
  }

}
