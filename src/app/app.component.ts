import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './user.service';
import { User } from './data';
import { UserInfoComponent } from './user-info/user-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserInfoComponent],
  template: ` <h1>User Listing</h1>
  @for (user of userData; track user.id) {
    <app-user-info [user]="user"/>
  }
  `,
})
export class AppComponent {
  userService = inject(UserService);
  userData: User[] = [];

  constructor() {
    this.userService.getUserData().then((data) => {
      this.userData = data;
    });
  }
}
