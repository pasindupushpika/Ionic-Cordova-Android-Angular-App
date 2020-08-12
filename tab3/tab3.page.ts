/**@author Pasindu Pushpika Sudasinghe Appuhamilage.
    Southern Cross University Melbourne.
    Version 1.0.4
**/

import { Component } from '@angular/core';
import { BatteryStatus } from '@ionic-native/battery-status/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})


export class Tab3Page {
    
    charge_level: number; 
    plugged_in: boolean; 

    

  constructor(private batteryStatus: BatteryStatus) {
      
     // Battery Level
        let subscription = this.batteryStatus.onChange().subscribe(status => {
            this.charge_level= status.level;
            this.plugged_in= status.isPlugged;
        });    


     //Low battery warning 
        let warning = this.batteryStatus.onLow().subscribe(status => {
        this.charge_level= status.level;
        alert("Battery Level Low " + status.level + "%");
        
        });
      
     //Low battery warning   
         // onLow(status) {
            // alert("Battery Level Low " + status.level + "%");
        // }  
           
  

}

}
