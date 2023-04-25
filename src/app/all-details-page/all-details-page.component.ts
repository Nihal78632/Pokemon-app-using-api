
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';



@Component({
  selector: 'app-all-details-page',
  templateUrl: './all-details-page.component.html',
  styleUrls: ['./all-details-page.component.css']
})
export class AllDetailsPageComponent implements OnInit {
  pokedetails:any=[]
  typecolor:any=''
  searchkey:any=''
 

 constructor(private api:ApiService){}
ngOnInit(): void {
  this.getpokemondetails()

  
  
}

getpokemondetails(){
  for(let i=1;i<600;i++){
    
     this.api.getapi(i).subscribe((data)=>{
     
     
      
      this.pokedetails.push(data)
      this.pokedetails[i-1]["typecolor"]=this.pokedetails[i-1].types[0].type.name
      console.log(this.pokedetails);
      
      
      
      
      
      

     }) 
     
     
 
   
}


}

}
