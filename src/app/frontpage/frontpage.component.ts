import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-frontpage',
  standalone: true,
  imports: [],
  templateUrl: './frontpage.component.html',
  styleUrl: './frontpage.component.scss'
})
export class FrontpageComponent {

  constructor(private http: HttpClient){}

  contacts: any = {};

  public callApiHandler(){
    this.http.get('https://localhost:7150/api/Contacts').subscribe((res: any)=>{ this.contacts = res[0]; console.log(res[0])},)
  }

}



