import { Component, OnInit } from '@angular/core';
import { Article } from '../../interfaces/article';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articles: Article[] = [];
  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    this.homeService.getList().subscribe((res: any)=> {
      console.log('data', res);
      this.articles = res.articles
    },
    (err)=> {
    })
  }

}
