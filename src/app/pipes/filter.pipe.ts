import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(pokedetails:any , Searchkey:string , propertyname:string ): any {
    const result: any=[]
    if(!pokedetails || Searchkey=='' || propertyname==''){
      return pokedetails
    }
    pokedetails.forEach((data:any)=>{
      
      if(data[propertyname].includes(Searchkey.trim().toLowerCase())){
        result.push(data)
      }
    
    
    
    })
      
    





    return result;
  }

}
