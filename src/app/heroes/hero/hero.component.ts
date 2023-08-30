import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 37;
  
  get capitalizeName(): string{
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name}-${this.age}`;
  }

  changeHero():void{
    this.name = 'Batman';
  }

  changeAge(): void{
    this.age = 40;
  }

  resetForm():void{
    this.age = 37;
    this.name = 'ironman'
  }
}
