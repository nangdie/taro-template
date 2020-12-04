
import fly from "../../utils/request";
export function getTestList() {
    return fly.request({
        url: "/api/test",
        method: "get"
    });
}
