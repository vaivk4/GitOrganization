import { Component } from '@angular/core';
import { GithubService } from "./services/github.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'GitOrganization';

  user:string[];

  constructor(private githubService:GithubService) {}

  getUsers(){
    this.githubService.getData().subscribe((data) => {
      console.log(data)
    })
  }
}
