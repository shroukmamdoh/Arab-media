import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrendingComponent } from './components/trending/trending.component';
import { EditorsPicksComponent } from './components/editors-picks/editors-picks.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { HomeComponent } from './components/home/home.component';
import { PageDetailsComponent } from './components/page-details/page-details.component';
import { HomeRoutingModule } from './home-routing.module';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    TrendingComponent,
    EditorsPicksComponent,
    ArticlesComponent,
    HomeComponent,
    PageDetailsComponent,
    LatestNewsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
