import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-badge",
  templateUrl: "./badge.component.html",
  styleUrls: ["./badge.component.css"]
})
export class BadgeComponent implements OnInit {
  badge_link: string = "";
  badge_text: string = "";

  constructor() {}

  ngOnInit() {}
}
