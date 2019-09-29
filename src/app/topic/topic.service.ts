import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http: HttpClient) { }

  getTopics() {
    return this.http.get('http://localhost:7171/api/topic/all');
  }
}
