import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userData:any = [];
  defultImg: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUserData()
    this.getnewsapi() 
  }

  getUserData() {
     this.userService.getUserData().subscribe((resp: any) => {
          this.userData = resp.userDetails
          console.log(this.userData)
          this.defultImg = resp.userDetails.image
     })
    }

  userDelete(_id: any) {
    console.log(_id)
    this.userService.userDelete(_id).subscribe((resp => {
      console.log(resp)
      this.getUserData()
    }))
  }

  getnewsapi() {
    this.userService.getnewsapi().subscribe((resp) => {
      console.log(resp, 'resp')
    })
  }

}
