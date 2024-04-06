import { Component, OnInit, TemplateRef } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginFormGroup!: UntypedFormGroup;
  token: any;
  modalRef?: BsModalRef;
  email = new UntypedFormControl()

  constructor(
    private formBuilder: UntypedFormBuilder,
    private AuthService: AuthService,
    private modalService: BsModalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', [  Validators.required, Validators.pattern('[a-z0-9]+@[a-z]+.[a-z]{2,3}')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  submitLogin() {
    const loginObj = {
      email: this.loginFormGroup.get('email')?.value,
      password: this.loginFormGroup.get('password')?.value,
    };
    this.AuthService.submitLogin(loginObj).subscribe((resp: any) => {
      console.log(resp, 'resp');
      if(!resp.error) {
        this.router.navigate(['/user'])
      }
      localStorage.setItem('token', resp.token);
      this.loginFormGroup.reset()
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
 }

 forgotPassword() {
   
 }
  
}
