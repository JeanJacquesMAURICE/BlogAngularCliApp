import {Component, Input} from '@angular/core';
import {Post} from '../post';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})

export class PostListItemComponentComponent {

  @Input() post: Post;

  likeLabel = 'J\'aime';
  dislikeLabel = 'Je n\'aime pas';

  constructor() {
  }

  onLikeClick() {
    console.log('onLikeClick');
    this.post.loveIts++;
  }

  onDislikeClick() {
    console.log('onDislikeClick');
    this.post.loveIts--;
  }

}
