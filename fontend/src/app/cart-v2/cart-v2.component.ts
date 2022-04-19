import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-v2',
  templateUrl: './cart-v2.component.html',
  styleUrls: ['./cart-v2.component.css']
})
export class CartV2Component implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit(): void {
  }

  checkaddTocart(){

  }

}//cartV2
