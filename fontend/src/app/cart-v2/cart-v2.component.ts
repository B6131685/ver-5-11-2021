import { Component, OnInit, Input } from '@angular/core';
import { CartV2Service } from '../services/cart-v2.service';
import { LocalStorageService } from 'angular-web-storage';
@Component({
  selector: 'app-cart-v2',
  templateUrl: './cart-v2.component.html',
  styleUrls: ['./cart-v2.component.css']
})
export class CartV2Component implements OnInit {

  @Input() item: any;

  constructor(private CartV2Service:CartV2Service,public local:LocalStorageService) { }

  ngOnInit(): void {
  }

  checkaddTocart(){


    // console.log("token user:")
    // console.log(this.local.get('user').result.id);
    const token = this.local.get('user').result.id;
    
    try {
      this.CartV2Service.updateCart({idUser:token ,item:this.item._id}).subscribe(
        data => {
          console.log(data);
        },
        err => {
         throw err;
        }
      )
    } catch (error) {
      console.log(error);
    }
    
  }

}//cartV2
