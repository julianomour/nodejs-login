import { BackendService } from './../providers/backend.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormControl,
} from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})



export class LoginComponent implements OnInit {

loginForm = new FormGroup({
  email: new FormControl('', Validators.required),
  password: new FormControl('', Validators.required)
});

constructor(private backend: BackendService) {  }


ngOnInit() {
}

userLogin = (data) => {
  console.log(data)
  this.backend.authUser(data).then((response) => {
    try {
      console.log(response)
      return response;
    } catch (reject) {
      console.log(reject)
      return reject;
    }
  })
}


userRegister = (data) => {
  this.backend.registerUser(data).then((response) => {
    try {

      console.log(response)
      return response;
    } catch (reject) {
      return reject;
    }
  });
}

}
