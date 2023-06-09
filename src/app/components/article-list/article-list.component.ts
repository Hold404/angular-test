import { Component, Input } from '@angular/core';
import { IArticle } from 'src/app/article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent {
  @Input() articles!: Array<IArticle>;
}
