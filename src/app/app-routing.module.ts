
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicComponent } from './topic/topic.component';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'topic/:title', component: TopicComponent },
  { path: 'article/:uuid', component: ArticleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
