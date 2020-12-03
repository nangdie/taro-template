import Taro from "@tarojs/taro";
import store from "../store";
const whiteUrlList = ["/pages/login/index"]; // 存放步需要拦截的路由地址

const routerHandle = {
  apply(target, object, args) {
    let url;
    if (args && args[0]) url = args[0].url;
    // 可以用于判断未登录步能访问，或者没权限步能访问，自己发挥
    if (!whiteUrlList.includes(url)) {
      const { user } = store.getState();
      if (!user.token) return target({ url: "/pages/login/index" });
    }
    return target(...args);
  }
};
Taro.switchTab = new Proxy(Taro.switchTab, routerHandle);
Taro.reLaunch = new Proxy(Taro.reLaunch, routerHandle);
Taro.redirectTo = new Proxy(Taro.redirectTo, routerHandle);
Taro.navigateTo = new Proxy(Taro.navigateTo, routerHandle);
Taro.navigateBack = new Proxy(Taro.navigateBack, routerHandle);
