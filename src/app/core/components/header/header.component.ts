import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
    var nav = $('.navbar')
    var win = $(window).scroll(function(){
      if (win.scrollTop()! == nav.height()){
        nav.css("background-color", "white")
      }
    })
  }
  onViewHome(){
    this.route.navigateByUrl('/users/home')
  }
}
