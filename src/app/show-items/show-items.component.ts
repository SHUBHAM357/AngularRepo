import { ItemServiceService } from './../item-service.service';
import { AddItemsComponent } from './../add-items/add-items.component';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Directive, ElementRef } from '@angular/core';

@Component({
  selector: 'app-show-items',
  templateUrl: './show-items.component.html',
  styleUrls: ['./show-items.component.css']
})
export class ShowItemsComponent implements OnInit {

  items: String;
  listItems: String[];
  totalQty:number = 0;
  buttonName:string = "Edit";
  updatedNameValue: string;

  productLists: ProductDetails[] = [];  

   constructor(private router:ActivatedRoute) { 
   }

  ngOnInit() {
    
    console.log("Inserted Items::"+this.router.snapshot.params.id);
    this.items = this.router.snapshot.params.id;
    this.listItems = this.items.split(',');

    for(let i=0; i<this.listItems.length; i++){
      this.productLists.push(new ProductDetails(this.listItems[i],1,false));
      this.totalQty++;
    }
  }

  operations(obj:ProductDetails,oprName:string){
    console.log("Clicked Item Is ::"+obj.name);

    for(let i=0; i<this.productLists.length; i++){
      
      if(this.productLists[i]===obj){

          if(oprName=="add"){
            this.productLists[i].qty++;
            this.totalQty++;

          }else if((oprName=="del")){

            this.productLists[i].qty--;
            this.totalQty--;
          }else if(oprName=="edit"){

            this.productLists[i].itemIditable = !this.productLists[i].itemIditable;
               
                if(this.productLists[i].itemIditable == true){
                   this.buttonName = "Update"
                }else{
                  this.buttonName = "Edit"
                }

                if(this.buttonName == "Edit"){
                  this.productLists[i].name = this.updatedNameValue;
                  this.updatedNameValue = '';
                }
          }       
      }
    }  
  }
}

class ProductDetails{
  name: String;
  qty: number=1;
  itemIditable: boolean = false;
  

  constructor(productName:String,quantity:number,itemEdit:boolean){
     this.name =  productName;
     this.qty  =  quantity;
     this.itemIditable = itemEdit;
  }
}
