import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewPostsComponent } from './components/view-posts/view-posts.component';
import { PostComponent } from './components/post/post.component';
@NgModule({
  declarations: [
    ViewPostsComponent,
    PostComponent
  ],
  imports: [
    CommonModule
  ],
  bootstrap: [ViewPostsComponent]
})
export class BlogDashboardModule { }
