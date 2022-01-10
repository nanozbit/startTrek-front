import { Component, ElementRef, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-slider-component',
  templateUrl: './slider-component.component.html',
  styleUrls: ['./slider-component.component.css']
})
export class SliderComponentComponent implements OnInit {
  
  
  @Input() titleName:string = 'Slider';

  value:number = 0 ;
  rangeInput:number = 0;
  constructor() {
  }
  @Output() eventNumber = new EventEmitter();

  inputNumber(){
    this.eventNumber.emit(this.rangeInput.toString());
  }

  ngOnInit(): void {
  }

}
