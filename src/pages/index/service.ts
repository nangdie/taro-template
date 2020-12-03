import fly from "../../utils/request/index";

export function getList() {
    return fly.request({
        url: "/api/xxx",
        method: "post"
    });
}