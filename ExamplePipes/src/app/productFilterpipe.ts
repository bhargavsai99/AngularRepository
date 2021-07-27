import { Pipe,PipeTransform } from "@angular/core";

@Pipe(
{
    name:'productfilterpipe'
}
)

export class productfilterpipe implements PipeTransform
{
    transform(products:any,searchText:any)
    {
        if(searchText)
        {
            return products.filter((x: { pname: string; })=>x.pname.toLowerCase().startsWith(searchText.toLowerCase()));
        }
    }
}