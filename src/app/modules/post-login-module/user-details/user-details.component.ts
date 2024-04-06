import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userData: any;
  userId: any;
  filterUserData: any;

  constructor(private userService: UserService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.userId = this.route.snapshot.params['id'];
    this.getUserData()
  }

  getUserData() {
    this.userService.getUserData().subscribe((resp: any) => {
    this.userData = resp.userDetails
    this.filterUserData = this.userData.filter((UD:any)=>{
           if(this.userId == UD._id){
              return UD
           }
         })
         console.log(this.filterUserData)
    })
   }

}
