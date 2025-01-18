import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone:false
})
export class ChatPage implements OnInit {

  user: any = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(() => {
      const navigation = this.route.snapshot.firstChild?.firstChild;
      if (navigation && navigation.queryParams) {
        this.user = navigation.queryParams['user'] ? JSON.parse(navigation.queryParams['user']) : null;
      }
    });
  }
}