import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fakeArray = [1,1,1,1,1];
  rate = 0;

  onClick(rate: number){
    this.rate = rate;
    console.log(rate)
  }

}
