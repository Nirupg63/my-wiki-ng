import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from './article.service';
import { Article } from './article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  private article: Article;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) { }

  ngOnInit() {
      const uuid = this.route.snapshot.paramMap.get('uuid');
      this.articleService.getArticleByUuid(uuid).subscribe((article: Article) => {
        this.article = article;
      });
  }
}
