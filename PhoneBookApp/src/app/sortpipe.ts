import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name:'sortpipe'
})
export class sortpipe implements PipeTransform{
    transform(value:Array<any>,args?:any):any{

        value.sort((a,b)=>
        {
            let x=a.firstname.toLowerCase();
            let y=b.firstname.toLowerCase();
            if(x<y)
            {
                return -1;

            }
            else
            {
                return -1;
            }
            return 0;
        })

    }
   
}