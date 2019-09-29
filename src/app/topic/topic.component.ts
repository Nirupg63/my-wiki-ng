import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TopicService } from './topic.service';
import { ArticleService } from '../article/article.service';
import { Article } from '../article/article';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private topicService: TopicService,
    private articleService: ArticleService
  ) { }

  private articleList: Article[] = [];

  ngOnInit(): void {
    this.getTopic();
  }

  getTopic(): void {
    const title = this.route.snapshot.paramMap.get('title');
    // send request to backend asking for top 5 recent articles under this topic
    this.articleService.getArticlesByTopic(title).subscribe((data: any) => {
      this.articleList = this.articleList.concat(data);
    })
  }
}
