import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RegisterComponent } from "./register.component";
import { SignInComponent } from "./sign-in.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'users', component: RegisterComponent, },
      { path: 'sign-in', component: SignInComponent, },
    ])
  ],
  declarations: [
    RegisterComponent,
    SignInComponent
  ],
  exports: [],
  providers: []
})
export class UsersModule {}
