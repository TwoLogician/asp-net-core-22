import { Injectable } from "@angular/core"
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from "@angular/common/http"
import { Observable } from "rxjs"

@Injectable()
export class NoopInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authReq: HttpRequest<any>
        if (req.url.includes("api/windows")) {
            authReq = req.clone({ withCredentials: true })
        } else {
            authReq = req.clone({ setHeaders: { Authorization: `Bearer ${localStorage.getItem("jwt")}` } })
        }
        return next.handle(authReq)
    }
}
