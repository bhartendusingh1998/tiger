import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  userFormGroup!: UntypedFormGroup
  genderValue: any;
  merriedField: any;
  file: any;
  loading: boolean = false;
  shortLink: any;

  constructor(private formBuilder: UntypedFormBuilder,
              private userService: UserService,
              private router:Router) { }

  ngOnInit(): void {
    this.userFormGroup = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      fatherName: ['', [Validators.required]],
      motherName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      address: ['', [Validators.required]],
      gender: [''],
      qualification: ['', [Validators.required]],
      contectNumber: ['', [Validators.required]],
      wifeName: [''],
      husbandName: [''],
    })
  }

  submitUser() {
    const userObj = {
      firstName: this.userFormGroup.get('firstName')?.value,
      lastName: this.userFormGroup.get('lastName')?.value,
      fatherName: this.userFormGroup.get('fatherName')?.value,
      motherName: this.userFormGroup.get('motherName')?.value,
      email: this.userFormGroup.get('email')?.value,
      dob: this.userFormGroup.get('dob')?.value,
      address: this.userFormGroup.get('address')?.value,
      gender: this.genderValue,
      qualification: this.userFormGroup.get('qualification')?.value,
      contectNumber: this.userFormGroup.get('contectNumber')?.value,
      wifeName: this.userFormGroup.get('wifeName')?.value,
      husbandName: this.userFormGroup.get('husbandName')?.value
    }
    this.userService.submitUser(userObj).subscribe((resp) => {
         console.log(resp, 'resp')
         this.router.navigate(['/user']); 
    })  
  }

  ImageUpload(event: any) {
    this.file = event.target.files[0]
    console.log(this.file, 'this.file')
  }

  onUpload() {
    this.loading
    console.log(this.loading);
  }

  merriedStatus(event: any) {  
    this.merriedField = event.target.value
  
  }

  genderStatus(event: any) {
    this.genderValue= event.target.value   
  }
  

}
