import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name:'contactpipe'
})

export class contactpipe implements PipeTransform{
    transform(contactList:any,searchText:any)
    {
        if(searchText)
        {
            return contactList.filter((x:{lastname:string;})=> x.lastname.toLowerCase().indexOf(searchText)!==-1)
        }
        else{
            return contactList;
        }
    }
}