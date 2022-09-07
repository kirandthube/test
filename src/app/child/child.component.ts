

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  
    @Input() data:any
  constructor() { }

  ngOnInit(): void {

    console.log("inside child component")
    
    console.log("inside child component from main branch...........")


    console.log("inside child component for dev-3")
    
    console.log("inside child compo for rebase operation.........")
  }

}


