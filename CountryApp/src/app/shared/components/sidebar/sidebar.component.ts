import { Component } from '@angular/core';


@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `li{
      cursor:pointer;
    }`
  ]
})
export class SidebarComponent {
  deleteLocalStorage(){
    localStorage.removeItem('cacheStore');
    location.reload();
  }
}
