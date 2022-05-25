import { Injectable } from "@angular/core"
import { GetService, PostService } from "./services"

@Injectable()
export class AppService {

    constructor(public get: GetService, public post: PostService) { }
}