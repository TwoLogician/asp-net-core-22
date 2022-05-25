import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { firstValueFrom } from "rxjs"

import { getApi } from "../utilities"

@Injectable()
export class GetService {

    constructor(private http: HttpClient) { }

    jwt() {
        return firstValueFrom(this.http.get<string>(getApi("jwts"), { responseType: "text" as any }))
    }

    windows() {
        return firstValueFrom(this.http.get<string>(getApi("windows"), { responseType: "text" as any, withCredentials: true }))
    }
}