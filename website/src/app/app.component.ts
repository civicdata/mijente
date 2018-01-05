import { Component } from "@angular/core";
import { ViewStateService } from "./view-state-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "donation-matching system";

  constructor(public viewStateService: ViewStateService) {}
}
