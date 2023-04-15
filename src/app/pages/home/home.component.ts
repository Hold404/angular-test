import { Component } from '@angular/core';
import { IArticle } from 'src/app/article';
import { articles } from 'src/app/data/articles';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  articles: Array<IArticle> = articles;
}
