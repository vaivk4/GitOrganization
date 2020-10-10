import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
// import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }
    getData():Observable<any> {

      const url = "https://api.github.com/orgs/zero-to-mastery/repos"

      return this.http.get<any>(url)
    }

}
