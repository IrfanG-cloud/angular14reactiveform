import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-postlisting',
  templateUrl: './postlisting.component.html',
  styleUrls: ['./postlisting.component.css']
})
export class PostlistingComponent implements OnInit{
  posts:any;

  constructor(private service:PostService) {}

  ngOnInit() {
      this.service.getPosts()
        .subscribe(response => {
          this.posts = response;
        });
  }
}
