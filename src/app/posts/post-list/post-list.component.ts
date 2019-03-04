import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  private postSub: Subscription;

  constructor(public postService: PostService) { }

  onDelete(id: string) {
    this.postService.deletePost(id);
  }

  ngOnInit() {
    this.postService.getPosts();
    this.postSub = this.postService.getPostUpdatedListener()
      .subscribe((post: Post[]) => {
        this.posts = post;
      });
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }

}
