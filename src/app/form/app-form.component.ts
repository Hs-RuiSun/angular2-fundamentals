import { Hero } from '../hero.model';
import { Component } from '@angular/core';
import { User } from '../user.model';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-hero-form',
  providers: [LoggerService],
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.css']
})
export class AppFormComponent {
  constructor(private logger: LoggerService) { }

  Category = [{ id: 1, name: 'primary' },
  { id: 2, name: 'middle' },
  { id: 3, name: 'high' }];

  nationalities: string[] = ['Canada', 'China', 'India'];
  users: User[] = [];
  user: User = new User('', '', '', 2);

  onSubmit() {
    this.users.push(this.user);
    this.logger.info(this.user.username);
  }
}
