import { Component } from '@angular/core';
import {ShoppingItemsService} from "../services/shopping-items.service";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent   {

  public item: string = '';
  constructor(
    private shoppingItemsService: ShoppingItemsService,
    private alertCtrl: AlertController
  ) { }

  addItem() {
    if (!this.shoppingItemsService.existsItem(this.item)) {
      this.shoppingItemsService.addItem(this.item);
      this.item = '';
      this.alertSuccess();
    } else {
      this.alertError();
    }
  }

  async alertSuccess() {
    const alert = await this.alertCtrl.create({
      header: 'Success',
      message: 'Item added successfully',
      buttons: ['OK']
    });
    await alert.present();
  }

  async alertError() {
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message: 'Item already exists',
      buttons: ['OK']
    });
    await alert.present();
  }

}
