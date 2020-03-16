import { Component, OnInit } from '@angular/core';
import {SidebarService} from '../../services/services.index';

@Component({
  selector: 'kenk-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor(public __sidebar: SidebarService) { }

  ngOnInit() {
  }

}
