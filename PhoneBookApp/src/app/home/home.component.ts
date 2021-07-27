import { Component, OnInit } from '@angular/core';
import { ContactService } from '../ContactService';
import { ContactModel } from '../Model/contactmodel';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contactList:ContactModel[]=[];
  homeobj:ContactModel={}
 

  addContact()
  {
    this.contactService.addNewContact(this.homeobj)
  }

  deleteContact(phonenumber:string)
  {
    this.contactService.deleteContact(phonenumber)
  }


  getContactList()
  {
    this.contactList=this.contactService.getContactList()
  }

  searchText?:any
  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
    this.getContactList()
  }

}
