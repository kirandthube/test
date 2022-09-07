import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  Data="Data Recieved from Parent to Child"
  
  constructor() { }

  ngOnInit(): void {

    console.log("main component:parent")
  }

}
