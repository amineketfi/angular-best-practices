import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserRepositoryService } from "../core/users-repository.service";
import { IUser } from "./users.model";


@Component({
  styleUrls: ['./register.component.css'],
  templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  saving:boolean=false;

  constructor(
    private router:Router,
    private userRepository:UserRepositoryService) {

    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);

    this.registerForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    });
   }

  ngOnInit() {

  }

  registerUser(user: IUser) {
    this.saving=true;
    this.saveAndRedirect(user);
  }

  cancel() {
      this.router.navigate(['/']);
    }

  private saveAndRedirect(user: IUser) {
    this.userRepository.saveUser(user)
      .subscribe(
        null,
        ()=>this.saving=false,
        () => this.router.navigate(['/catalog']));
  }


}
