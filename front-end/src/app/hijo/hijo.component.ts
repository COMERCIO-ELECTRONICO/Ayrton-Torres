import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  constructor() { }
  @Input() valorDelPadre: string;

  ngOnInit(): void {
    console.log(this.valorDelPadre);
  }
  alertaValorPadre(){
    alert(this.valorDelPadre)
  }

}
