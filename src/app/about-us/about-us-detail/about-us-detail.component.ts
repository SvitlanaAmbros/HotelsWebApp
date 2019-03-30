import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-about-us-detail',
  templateUrl: './about-us-detail.component.html',
  styleUrls: ['./about-us-detail.component.scss']
})
export class AboutUsDetailComponent implements OnInit {

  public url: String;
  constructor(private router: Router) { }

  ngOnInit() {
    let routerUrl = this.router.routerState.snapshot.url.split('/');
    this.url = routerUrl[routerUrl.length - 1];
    console.log(this.url);
  }

}
