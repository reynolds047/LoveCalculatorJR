import { Component } from '@angular/core';
import { Contacts } from 'ionic-native';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  name1: string;
  name2: string;
  score: number;

  constructor(public navCtrl: NavController) {
    this.name1 = "";
    this.name2 = "";
  }

  getscore() {
    const letters = (this.name1 + this.name2).toString().toLowerCase();
    let sum = 0;
    for (let i = 0; i < letters.length; i++) {
      sum += letters.charCodeAt(i);
      console.log("sum inside loop" + sum);
    }

    console.log("sum" + sum);
    this.score = sum % 101;

  }


  pickContact1() {
    Contacts.pickContact()
      .then(contact => {
        this.name1 = contact.displayName;
      })
      .catch(error => {
       // ignore; user didn't select a contact
      });
  }

  pickContact2() {
    Contacts.pickContact()
      .then(contact => {
        this.name2 = contact.displayName;
      })
      .catch(error => {
      // ignore; user didn't select a contact
      });
  }

}
