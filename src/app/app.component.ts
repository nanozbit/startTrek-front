import { Component } from '@angular/core';
import {Response} from '../app/model/response.interface'; 
import { ProviderService } from './provider.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'starTrek-injectors';
  listDamages:number[]= [0,0,0]
  speedLight:number=0;
  data:Response = {damageList: this.listDamages, lightSpeed:10};
  dataResponse: any= {};
  constructor(private providerServide:ProviderService){}

  getNumberRangeA(e: any){
    this.listDamages[0] = parseInt(e);
    console.log(this.listDamages)
  }
  getNumberRangeB(e: any){
    this.listDamages[1] = parseInt(e);
    console.log(this.listDamages)
  }
  getNumberRangeC(e: any){
    this.listDamages[2] = parseInt(e);
    console.log(this.listDamages)
  }
  sendData():void{
    this.data = {damageList: this.listDamages, lightSpeed:this.speedLight}
    this.providerServide.sendData(this.data).subscribe(resp => this.dataResponse = resp);
  }
}
