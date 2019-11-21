import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.css']
})
export class ContributorsComponent implements OnInit {

  contributors: any;

  @Input() urlGroupId: string;
  @Input() urlRepoId: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getInfo(this.urlGroupId, this.urlRepoId, 'contributors').subscribe(data => {
      this.contributors = data;
  
    }
    );
  }

}
