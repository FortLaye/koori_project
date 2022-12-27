import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isConnected$!: Observable<string | null>;
  
  constructor(private messageService: MessageService,
              private router: Router) { }

  ngOnInit(): void {
    this.isConnected$ = this.messageService.isLoggedIn();
  }

  logout(){
    this.messageService.logOut();
  }

}

