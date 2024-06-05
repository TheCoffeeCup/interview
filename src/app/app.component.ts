import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // Can add router here instead of manually importing every component
  imports: [RouterOutlet, FrontpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
  title = 'my-app';
}
