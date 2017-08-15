import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any = null;
  urlString: string;
  domain: string;
  jobData: any = null;
  flag:boolean;

  constructor(private _http: Http) {

    this.urlString = 'http://service.dice.com/api/rest/jobsearch/v1/simple.json?skill=java';
    this.getMyBlog(this.urlString);
    this.domain = 'http://service.dice.com';
  }

  private getMyBlog(urlString) {
    console.log('calling' + urlString);
    return this._http.get(urlString)
      .map((res: Response) => res.json())
      .subscribe(data => {
        this.data = data;
        console.log(this.data);
      });
  }
  
  
  loadData(newUrlString) {
    console.log(this.domain + newUrlString);
    this.getMyBlog(this.domain + newUrlString);
  }
  loadJob(newUrlString) {

    this.getMyBlog(newUrlString);
  }
}
