import { Component } from "@angular/core";
import { AppService } from "./app.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  token = ""
  user = ""

  constructor(private service: AppService) { }

  async authentication() {
    try {
      this.token = await this.service.post.jwtForAuthentication()
      localStorage.setItem("jwt", this.token)
    } catch (err: any) {
      alert(err.message)
      console.error(err)
    }
  }

  async initUser(jwt: boolean) {
    try {
      if (jwt) {
        this.user = await this.service.get.jwt()
      } else {
        this.user = await this.service.get.windows()
      }
    } catch (err: any) {
      alert(err.message)
      console.error(err)
    }
  }
}
