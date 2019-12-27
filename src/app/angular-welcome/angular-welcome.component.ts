import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-angular-welcome",
  templateUrl: "./angular-welcome.component.html",
  styleUrls: ["./angular-welcome.component.sass"],
  encapsulation: ViewEncapsulation.Native
})
export class AngularWelcomeComponent implements OnInit {
  title = "csjcFront";
  constructor() {}

  ngOnInit() {}
}
