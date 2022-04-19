import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { FormControl } from '@angular/forms';
import { LocalStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
@Component({
  selector: 'app-showproducts',
  templateUrl: './showproducts.component.html',
  styleUrls: ['./showproducts.component.css']
})
export class ShowproductsComponent implements OnInit {
  products: any;
  show : boolean = true;
  counter: any;

  keyword = new FormControl('');

  constructor(private bk: BookService, public local:LocalStorageService,private router: Router) { 

  }

  ngOnInit(): void {
  }

  onLoading(){
    try{
      this.bk.getProducts().subscribe(
        data =>{
          this.products = data;
        },
        err =>{
          console.log(err)
        });
    }catch(error){
      console.log(error)
    }
  }

  receivData($event:any){
    this.products = $event
  }

  receivCounter($event:any){
    this.counter = $event
  }

  signOut(){
    this.local.clear();
    const loggedIn = localStorage.getItem('STATE');
    this.router.navigate(['login']);
  }

}
