import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 constructor() {
   
 }  
 public title: string = "library-app";
 ngOnInit() {
 console.log("Hiii")
 }
}
