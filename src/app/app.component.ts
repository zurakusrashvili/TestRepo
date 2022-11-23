import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  showProducts = false;
  
  products = [
    {
      img: "https://ss7.vzw.com/is/image/VerizonWireless/iphone14-blue-fall22-a?hei=400&fmt=webp",
      title: "Iphone 14",
      description: "Iphone14 Iphone14 Iphone14 Iphone14",
      id: "231123"
    },
   

    {
      img: "https://ss7.vzw.com/is/image/VerizonWireless/iphone14-blue-fall22-a?hei=400&fmt=webp",
      title: "Iphone 14",
      description: "Iphone14 Iphone14 Iphone14 Iphone14",
      id: "231123"
    },
    {
      img: "https://ss7.vzw.com/is/image/VerizonWireless/iphone14-blue-fall22-a?hei=400&fmt=webp",
      title: "Iphone 17",
      description: "Iphone14 Iphone14 Iphone14 Iphone14",
      id: "231123"
    },
  ]

  showProductsContainer(){
    // if(this.showProducts == true){
    //   this.showProducts = false;
    // }else{
    //   this.showProducts = true;
    // }

    this.showProducts = !this.showProducts;


    



  }


  addProduct(){

    let newProduct = {
      img: "https://ss7.vzw.com/is/image/VerizonWireless/iphone14-blue-fall22-a?hei=400&fmt=webp",
      title: "Iphone 18",
      description: "Iphone14 Iphone14 Iphone14 Iphone14",
      id: "231123"
    };


    this.products.push(newProduct)
  }

}
