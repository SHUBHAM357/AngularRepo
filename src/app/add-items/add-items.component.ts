import { ItemServiceService } from './../item-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {

  items: string[]=[];
  item: string;

  private cartService: ItemServiceService

  constructor() {    
  }

  ngOnInit() {
  }

  saveItem(){
     this.items.push(this.item);
     //this.cartService.addToCart(this.item);
  }
}
