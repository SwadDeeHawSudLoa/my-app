import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { Contener1Component } from './contener1/contener1.component';
import { Contener2Component } from './contener2/contener2.component';
import { Contener3Component } from './contener3/contener3.component';
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,NavbarComponent,Navbar2Component,Contener1Component,Contener2Component,Contener3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
