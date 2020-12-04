import fly from "../../utils/request";

export function getList() {
    return fly.request({
        url: "/api/xxx",
        method: "post"
    });
}