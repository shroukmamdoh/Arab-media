import { Component, Input, OnInit } from "@angular/core";
import { Article } from "../../interfaces/article";

@Component({
  selector: "app-trending",
  templateUrl: "./trending.component.html",
  styleUrls: ["./trending.component.scss"],
})
export class TrendingComponent implements OnInit {
  @Input() articles: Article[] = [];
  constructor() {
  }

  ngOnInit(): void {

  }
}
