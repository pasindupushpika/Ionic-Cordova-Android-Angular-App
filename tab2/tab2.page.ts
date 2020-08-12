/**@author Pasindu Pushpika Sudasinghe Appuhamilage.
    Southern Cross University Melbourne.
    Version 1.0.4
**/

import { Component } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

    phoneNumber: number;

  constructor(private callNumber: CallNumber) {
      
     
      
  }

  
    callNow() {
    let tel_number = this.phoneNumber;
    window.open(`tel:${tel_number}`, '_system');
  }
  
  
}
