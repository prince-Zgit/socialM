import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
  standalone:false
})
export class FriendsPage implements OnInit {

  friends: any;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.loadFriends();
  }

  loadFriends() {
    this.apiService.getFriends().subscribe(result => {
        // console.log('getFriends result', result);
        this.friends = result;
    });
  }

}
