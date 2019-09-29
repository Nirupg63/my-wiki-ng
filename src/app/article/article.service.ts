import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticlesByTopic(topic: string) {
    return this.http.post('http://localhost:7171/api/article/topic', {
      topic
    });
  }
  
  getArticleByUuid(uuid: string) {
    return this.http.get('http://localhost:7171/api/article/' + uuid);
  }
}
