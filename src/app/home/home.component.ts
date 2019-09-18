import { Component, OnInit } from '@angular/core';
import { TopicService } from '../topic/topic.service';
import { Topic } from '../topic/topic';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private topicService: TopicService) { }

  private topicList: Topic[] = [];

  ngOnInit() {
    this.topicService.getTopics().subscribe((data: any) => {
      this.topicList =  this.topicList.concat(data);
    });
  }

}
