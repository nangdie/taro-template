import Taro, { showToast, hideLoading } from "@tarojs/taro";
import Fly from "flyio/dist/npm/fly";  // 根据环境进行修改不同的包
import { baseURL, timeout } from "./config";
import store from "../../store";					// 你可能需要拿到获取公共数据进行判断
const request = new Fly();
request.config.timeout = timeout;				    // 超时时间
request.config.baseURL = baseURL;
const whiteUrl = [''];								// 不拦截的请求url
// 发送请求之前拦截
request.interceptors.request.use(async config => {
    if (!whiteUrl.includes(config.url)) {
        showToast({
            title: "加载中...",
            mask: true,
            icon: "loading"
        });
    }
    const AccessToken = store.getState().user.token; // 如果已登陆，请带上token
    config.headers = {
        ...config.headers,
        Accept: "application/json",
        "content-type": "application/json; charset=utf-8",
        Authorization: AccessToken && AccessToken.AccessToken
    };
    config.body &&
        Object.keys(config.body).forEach(val => {
            if (config.body[val] === "") {
                delete config.body[val];
            }
        });

    config.body = {
        ...config.body
    };
    return config;
});

request.interceptors.response.use(
    // 处理请求返回数据，如处理返回结构
    response => {
        hideLoading();
        return response.data;
    },
    // 错误时的处理
    async err => {
        try {
            const currentUrl = Taro.getCurrentPages()[  //获取当前页面路径
                Taro.getCurrentPages().length - 1
            ].route;
            // 根据业务需求处理err 
            if (err.status === 0) throw `服务器无响应`
            const { status } = err.response;
            if (status !== 200) throw err.message
        } catch (e) {
            showToast({ title: e.message || e, mask: true, icon: "none" });
            throw e;
        } finally {
            setTimeout(() => {
                hideLoading();
            }, 3000);
        }
    }
);

export default request;