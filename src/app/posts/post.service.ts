import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor() { }

  getPosts() {
    return [...this.posts];
  }

  getPostUpdatedListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(titlePost: string, contentPost: string) {
    const post: Post = {title: titlePost, content: contentPost};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
