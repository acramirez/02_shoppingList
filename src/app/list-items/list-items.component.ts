import { Component, OnInit } from '@angular/core';
import {ShoppingItemsService} from "../services/shopping-items.service";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss'],
})
export class ListItemsComponent  implements OnInit {

  constructor(
    public shoppingItemsService: ShoppingItemsService,
    private alertCtrl: AlertController
  ) { }

  async removeItem(item:string) {
    const alert = await this.alertCtrl.create({
      header: 'Remove Item',
      message: 'Are you sure you want to remove this item?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Remove canceled');
          }
        },
        {
          text: 'Remove',
          handler: () => {
            console.log('Item removed');
            this.shoppingItemsService.removeItem(item);
          }
        }
      ]
    });
    await alert.present();
  }

  ngOnInit() {}

}
