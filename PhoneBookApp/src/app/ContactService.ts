import { Injectable } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ContactModel } from "./Model/contactmodel";
import { HomeComponent } from "./home/home.component";
import { elementEventFullName } from "@angular/compiler/src/view_compiler/view_compiler";




@Injectable()

export class ContactService
{
  contact:ContactModel[];


    getContactList(): any 
    {
      return this.contact;
    }

    deleteContact(phonenumber: string) 
    {
      this.contact.forEach((element,i)=>{
          if(element.phonenumber==phonenumber)
          {
              this.contact.splice(i,1);
              console.log("Deleted");
          }
      });
    }

    addNewContact(homeobj: ContactModel) 
    {
      this.contact.push(homeobj);
    }
    
    constructor()
    {
        this.contact=[

            { firstname:'Bhargav',lastname: 'Bolisetty' ,phonenumber:'8008608072'},
            { firstname:'Susheel',lastname: 'Thakur' , phonenumber:'7896543210'},
            { firstname:'Ravi  ',lastname: 'Sharma' ,phonenumber:'6987543210'},

        ];
    }
}
