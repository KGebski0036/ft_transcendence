import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, debounceTime, distinctUntilChanged, map, pipe, switchMap, tap, toArray } from 'rxjs';
import { UserI, UserPaginateI } from 'src/app/model/user.interface';
import { AuthService } from 'src/app/public/services/auth-service/auth.service';
import { UserService } from 'src/app/public/services/user-service/user.service';
import { ChatService } from '../../services/chat-service/chat.service';
import { RoomI, RoomPaginateI } from 'src/app/model/room.interface';

@Component({
  selector: 'app-users-listed',
  templateUrl: './users-listed.component.html',
  styleUrls: ['./users-listed.component.css']
})
export class UsersListedComponent implements OnInit {

  // @Input() users: UserI[] = []
  // @Output() addUser: EventEmitter<UserI> = new EventEmitter<UserI>()
  // @Output() removeuser: EventEmitter<UserI> = new EventEmitter<UserI>()
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private chatService: ChatService) {}

  filteredUsers: UserI[]
  numUsers: number = 0
  usernames: string[] = []
  currentUser: UserI = this.authService.getLoggedInUser()

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((data) => {
      this.filteredUsers = data.items
      this.numUsers = data.meta.totalItems
    //   console.log(this.filteredUsers)
      for (let i = 0; i < this.numUsers; i++) {
        const user = this.filteredUsers[i].username
        if (user != this.currentUser.username) {
          this.usernames.push(user)
        }
        // console.log(user)
      }
    })
  }

  createPrivateChat(username: string) {
    console.log('Clicked on username: ' + username)
    this.chatService.createDmRoom(username);
  }
}
