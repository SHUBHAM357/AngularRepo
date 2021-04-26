import { Course } from './../course';
import { COURSES } from './../mock-courses';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  num: any='';
   
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.num++;
  }
}

 

