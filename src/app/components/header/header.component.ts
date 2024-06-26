import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LogInComponent } from '../log-in/log-in.component';
import { ConsultationMeetingComponent } from '../consultation-meeting/consultation-meeting.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  constructor(private dialog: MatDialog) {}

  openLogInDialog() {
    const dialogRef = this.dialog.open(LogInComponent, {
       width: '50rem',
    });
alert
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openConsultationMeetingDialog() {
    const dialogRef = this.dialog.open(ConsultationMeetingComponent, {
       width: '50rem',
    });
alert
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  
  scrollToAbout() {
    window.scrollTo( 0, window.innerHeight);
  }
}

