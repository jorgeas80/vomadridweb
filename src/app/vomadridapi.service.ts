/**
 * Created by jorge on 30/08/16.
 */
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class VOMadridAPIService {
  constructor(private http: Http) {}

  getData() {
    // TODO: This should be a configuration parameter
    let url = "http://localhost:3000/v1";

    return this.http.get(url)
      .map(response => this.parseData(response))
      .catch(error => Observable.throw('Server error'));
  }

  private parseData(response: Response) {
    return response.json().map( movie => movie.movie_title)
  }
}
