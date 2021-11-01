import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { User } from '../../services/user/user.model';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
Users: User[];
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserList().subscribe(res => {
      this.Users = res.map( e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as User
        };
      })
    });    
  }

  removeUser = user => this.userService.deleteUser(user);
}
