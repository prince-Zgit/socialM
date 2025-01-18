import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
  standalone:false
})
export class InboxPage implements OnInit {

  segment: string = 'message';

  constructor() { }

  ngOnInit() {
  }

}
