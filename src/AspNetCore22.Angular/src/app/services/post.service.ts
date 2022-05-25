import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { firstValueFrom } from "rxjs"

import { getApi } from "../utilities"

@Injectable()
export class PostService {

    constructor(private http: HttpClient) { }

    jwtForAuthentication() {
        return firstValueFrom(this.http.post<string>(getApi("jwts", "authentication"), {}, { responseType: "text" as any }))
    }
}