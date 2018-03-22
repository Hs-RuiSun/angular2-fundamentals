import { Hero } from '../hero.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.css']
})
export class AppFormComponent {
  value = '';
  HEROES: Hero[] = [];
  powers: string[] = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  hero: Hero = new Hero('input the name', '', '');

  onKeyup(inputstr) {
  this.value = this.value + inputstr + ' | ';
  }

  onSubmit() {
    if(this.hero.alterEgo != undefined) {
    this.HEROES.push(new Hero(this.hero.name, this.hero.heroPower, this.hero.alterEgo));
    } else {
    this.HEROES.push(new Hero(this.hero.name, this.hero.heroPower));
    }
  }
}
