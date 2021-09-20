import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class HomeService {
  constructor(private http: HttpClient) {}
  getList() {
    return this.http.get(
      `https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=33ba70d6367648b49a76910dfad62ad4`
    );
  }
}
