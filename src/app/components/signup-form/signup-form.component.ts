import { UsernameValidarors } from './user.validaros';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('', [
        Validators.minLength(3),
        Validators.required,
        UsernameValidarors.cannotContainSpace, //Regular Operator for validation
      ], [
          UsernameValidarors.shouldBeUnique //Async Operator  for validation
        ]),
      password: new FormControl('', Validators.required),
    })
  });

  get username() {
    return this.form.get('account.username')
  }

  login() {
    console.log(this.form)
    this.form.setErrors({
      invalidLogin: true
    });
  }
}
