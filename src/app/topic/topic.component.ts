import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TopicService } from './topic.service';
import { Topic } from './topic';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private topicService: TopicService
  ) { }

  ngOnInit(): void {
    this.getTopic();
  }

  getTopic(): void {
    const title = this.route.snapshot.paramMap.get('title');
    console.log('routed title', title);
  }

}
