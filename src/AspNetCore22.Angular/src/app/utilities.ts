import { ApiRoute } from "./models"

export let getApi = (route: ApiRoute, path?: string) => {
    return `http://192.168.1.21/api/${route}/${path || ""}`
}