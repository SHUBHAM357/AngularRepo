import { ItemServiceService } from './../item-service.service';
import { AddItemsComponent } from './../add-items/add-items.component';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-show-items',
  templateUrl: './show-items.component.html',
  styleUrls: ['./show-items.component.css']
})
export class ShowItemsComponent implements OnInit {

  items: String;
  listItems: String[];
  totalQty:number = 0;

  productLists: ProductDetails[] = [];  

   constructor(private router:ActivatedRoute) { 
   }

  ngOnInit() {
    
    console.log("Inserted Items::"+this.router.snapshot.params.id);
    this.items = this.router.snapshot.params.id;
    this.listItems = this.items.split(',');

    for(let i=0; i<this.listItems.length; i++){
      this.productLists.push(new ProductDetails(this.listItems[i],1));
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
          }       
      }
    }  
  }
}

class ProductDetails{
  name: String;
  qty: number=1;

  constructor(productName:String,quantity:number){
     this.name =  productName;
     this.qty  =  quantity;
  }
}
