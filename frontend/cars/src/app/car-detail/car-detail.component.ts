import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {MainService} from '../main.service';
@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  car:any;
  constructor( private location: Location,
    private route : ActivatedRoute,
    private mainservice: MainService) { }

  ngOnInit() {
    this.getCar();
  }
  goBack(): void {
    this.location.back();
  }
  getCar(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.mainservice.getCar(id)
      .subscribe(car => {
          this.car = car[0]
          console.log(this.car)
        });
  }
 
}