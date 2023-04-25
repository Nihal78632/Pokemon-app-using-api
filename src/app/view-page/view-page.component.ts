import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.css']
})
export class ViewPageComponent implements OnInit {

  parameter:any
  pokedetails:any
  

  constructor(private api:ApiService , private activated:ActivatedRoute){}


  ngOnInit(): void {
    //getting parameter
    this.activated.params.subscribe((param)=>{
     this.parameter= param['name']
      
    })

    this.api.getapi(this.parameter).subscribe((data)=>{
      this.pokedetails=data
      
    })
  }




}
