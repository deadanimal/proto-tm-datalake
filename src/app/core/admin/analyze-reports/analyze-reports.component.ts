import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analyze-reports',
  templateUrl: './analyze-reports.component.html',
  styleUrls: ['./analyze-reports.component.scss']
})
export class AnalyzeReportsComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  navigatePage(path: string) {
    this.router.navigate([path])
  }

}
