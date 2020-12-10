import { viewClassName } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar';

@Component({
  selector: 'app-terc-ano',
  templateUrl: './terc-ano.page.html',
  styleUrls: ['./terc-ano.page.scss'],
})
export class TercAnoPage implements OnInit {
  event = {
    
    title: '',
    desc: '',
    startTime: '',
    endTime: '',
    allDay: false
  };
  minDate = new Date().toISOString();
  eventSource = [];

  calendar = {
    mode : 'month',
    currentDate: new Date()
  }

  viewTitle = '';

@ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor() { }

  ngOnInit() {
    this.resetEvent();
  }

  resetEvent(){
    this.event = {
      title: '',
    desc: '',
    startTime: new Date().toISOString(),
    endTime: new Date().toISOString(),
    allDay: false
    };
  }
  addEvent(){

  }

  onEventSelected(){

  }
  onViewTitleChanged(){

  }
  onTimeSelected(){

  }
  // onCurrentDateChanged(){

  // }
  // reloadSource(){

  // }

}
