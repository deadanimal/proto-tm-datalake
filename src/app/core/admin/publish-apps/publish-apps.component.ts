import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publish-apps',
  templateUrl: './publish-apps.component.html',
  styleUrls: ['./publish-apps.component.scss']
})
export class PublishAppsComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  navigatePage(path: string) {
    this.router.navigate([path])
  }

}
