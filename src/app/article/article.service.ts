import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticlesByTopic(topic: string) {
    return this.http.post('http://localhost:7171/article/topic', {
      topic
    });
  }
}
