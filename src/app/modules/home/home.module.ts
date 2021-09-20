import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrendingComponent } from './components/trending/trending.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { EditorsPicksComponent } from './components/editors-picks/editors-picks.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { HomeComponent } from './components/home/home.component';
import { PageDetailsComponent } from './components/page-details/page-details.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    TrendingComponent,
    HeaderComponent,
    FooterComponent,
    EditorsPicksComponent,
    ArticlesComponent,
    HomeComponent,
    PageDetailsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
