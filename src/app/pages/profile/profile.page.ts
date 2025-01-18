import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false
})
export class ProfilePage implements OnInit {
  
  friends: any;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    console.log('profile component')
    this.loadPhotos();
  }

  loadPhotos() {
    this.apiService.getFriends().subscribe((result: any) => {
      console.log(result)
        this.friends = result;
    });
  }

}
