import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'FirstApp';

  public currentRoute : any ;
  constructor(private router : Router){

  }
  gotohome() {
    this.currentRoute = "home";
    this.router.navigateByUrl("/home")
  }
gotoproducts() {
  this.currentRoute = "products";
  this.router.navigateByUrl("/products")
}

}
