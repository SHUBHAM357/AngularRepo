import { TestItemComponent } from './test-item/test-item.component';
import { ShowItemsComponent } from './show-items/show-items.component';
import { AddItemsComponent } from './add-items/add-items.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"",component:AddItemsComponent},
  {path:"showItems/:id",component:ShowItemsComponent},
  {path:"testItems",component:TestItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AddItemsComponent,ShowItemsComponent,TestItemComponent]

