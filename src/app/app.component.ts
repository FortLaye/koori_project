import { Component, OnDestroy } from '@angular/core';
import { MessageService } from './message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

    constructor(private messageService: MessageService){} 

    ngOnDestroy(): void {

    }
    
}
