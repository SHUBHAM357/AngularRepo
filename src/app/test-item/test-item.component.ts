import { AddItemsComponent } from './../add-items/add-items.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-test-item',
  templateUrl: './test-item.component.html',
  styleUrls: ['./test-item.component.css']
})
export class TestItemComponent implements OnInit {

  public item: string;
  lists:string[]=[];

  constructor(private router: ActivatedRoute) {

  }

  ngOnInit() {
    
  }

  printValues(){
    console.log(this.router.snapshot.params);
  }

}
