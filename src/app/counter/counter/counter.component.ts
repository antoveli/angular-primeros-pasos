import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
     <h3>Counter: {{couter}} </h3>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCounter()">reset</button>
    <button (click)="increaseBy(-1)">-1</button>
    `
})

export class CounterComponent {

    public couter: number = 10;
    
    constructor() { }

    public increaseBy(value: number):void{
        this.couter += value;
      }
    
      public resetCounter ():void{
        this.couter = 10;
      }
}