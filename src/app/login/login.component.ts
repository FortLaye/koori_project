import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private msgService: MessageService,
              private router: Router) { }

  ngOnInit(): void {

  }

  login(){
    this.msgService.logIn("login success !");
    this.router.navigate(['/']);
  }

}
