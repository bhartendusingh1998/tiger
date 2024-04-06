import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationFormGroup!: FormGroup

  constructor(private formBuilder: FormBuilder,
    private AuthService: AuthService) { }

  ngOnInit(): void {
    this.registrationFormGroup = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      address: ['', [Validators.required]],
      contectNumber: ['', [Validators.required]]
    })
  }

  submitRegistration() {
    const registerObj = {
      username: this.registrationFormGroup.get('username')?.value,
      email: this.registrationFormGroup.get('email')?.value,
      password: this.registrationFormGroup.get('password')?.value,
      phone: this.registrationFormGroup.get('contectNumber')?.value
    }
    this.AuthService.submitRegistration(registerObj).subscribe((resp) => {
      this.registrationFormGroup.reset()
    })
  }

  get registerFormControl() {
    return this.registrationFormGroup.controls;
  }


}








