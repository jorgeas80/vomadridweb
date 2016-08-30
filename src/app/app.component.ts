import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import {VOMadridAPIService} from './vomadridapi.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [HTTP_PROVIDERS, VOMadridAPIService]
})
export class AppComponent {

  title = 'app works!';
  name = 'Nobody';
  imgUrl = 'https://cdn.meme.am/instances/500x/57410199.jpg';

  // TODO: This will be an object array, really
  private movies: string[]=[];

  constructor(private voservice: VOMadridAPIService) {}

  setName(name: string) {
    this.name = name;
  }

  load() {
    this.movies = [];
    this.voservice.getData().subscribe(
      movies => this.movies = movies,
      error => console.error(error)
    );
  }
}
