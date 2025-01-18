import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'group-view',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
  standalone: false
})
export class GroupComponent implements OnInit {

  groups: any;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.loadGroups();
  }

  loadGroups() {
    this.apiService.getGroups().subscribe(result => {
        // console.log('getGroups result', result);
        this.groups = result;
    });
  }

  openChat() {
    // TODO: navigate to chat
  }

}
