import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Article } from "../../interfaces/article";
import { HomeService } from "../../services/home.service";

@Component({
  selector: "app-page-details",
  templateUrl: "./page-details.component.html",
  styleUrls: ["./page-details.component.scss"],
})
export class PageDetailsComponent implements OnInit {
  articles: Article[] = [];
  currentArticleIndex: any;
  commentForm!: FormGroup;
  constructor(
    private homeService: HomeService,
    private router: ActivatedRoute,
    private fb: FormBuilder
  ) {
    router.params.subscribe((res) => {
      this.currentArticleIndex = res.id;
    });
    this.initForm();
  }

  ngOnInit(): void {
    this.articles = this.homeService.articles;
    console.log("articles", this.articles[this.currentArticleIndex]);
  }

  /**
   * Generate Comment Form to collect comments from users
   */

  initForm() {
    this.commentForm = this.fb.group({
      name: [""],
      email: [""],
      comment: [""],
    });
  }
  sendComment() {}
}
