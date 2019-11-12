import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  info: Object;

  pulls: object;

  urlGroupId: string = this.route.snapshot.paramMap.get('groupId');

  urlRepoId: string = this.route.snapshot.paramMap.get('repoId');

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {

    // this.dataService.getinfo(this.urlGroupId, this.urlRepoId).subscribe(data => {
    //   this.info = data;

    // }
    // );

    // this.dataService.getPulls(this.urlGroupId, this.urlRepoId).subscribe(data => {
    //   this.pulls = data;

    // }
    // );
  }

}