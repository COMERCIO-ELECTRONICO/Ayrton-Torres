import { Component, OnInit, Input } from '@angular/core';
import { PadreComponent } from '../padre/padre.component';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
 
  constructor(public age: PadreComponent) { }

  @Input() valoredad: number;
  edad:number;
  
  ngOnInit(): void {
  }

  ageCalcular(){
    alert(this.valoredad)
    this.edad=2020-this.valoredad;
    this.age.edad=this.edad;
    return this.valoredad
  }
}
