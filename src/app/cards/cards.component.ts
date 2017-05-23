import { Component, OnInit } from '@angular/core';


import { Router,ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {


   constructor(private router:Router,private route:ActivatedRoute) { }
typename:string
  ngOnInit() {
   console.log( this.route.snapshot.params["type"]);
    this.route.params.subscribe(p=>{this.typename= p["type"]})


  }
  OnPlus() {
    this.router.navigate(['/cards',parseInt(this.typename,10)+1])

  }
  OnMinus() {
  this.router.navigate(['/cards',parseInt(this.typename,10)-1])

  }
}
