import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Post} from "../models/post";
import {ApiService} from "../services/ApiService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'gm-fe';
  posts$: Observable<Post[]> = new Observable<Post[]>();

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.posts$ = this.apiService.getPosts();
  }
}
