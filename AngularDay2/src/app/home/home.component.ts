import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



	cars = [
{
	name: "Lightning McQueen",
	species: "Stock car",
	gender: "Male",
	occupation: "Piston Cup Racer",
	significant_other: "Sally Carrera",
	nationality: "American"
},{
	name: "Mater",
	species: "1956-57 International Harvester boom truck",
	gender: "Male",
	occupation: "Owner of Tow Mater Towing & Salvage",
	significant_other: "Holley Shiftwell",
	nationality: "American"
},{
	name: "Doc Hudson",
	species: "Hudson Hornet motorcar",
	gender: "Male",
	occupation: "MD, judge, former racer, coach and mentor",
	significant_other: "none",
	nationality: "American"
},{
	name: "Sally Carrera",
	species: "Porsche 996 motorcar",
	gender: "Female",
	occupation: "town attorney, hotelier",
	significant_other: "Lightning McQueen",
	nationality: "American"
}
	]	

	info = new FormGroup({
   name: new FormControl('',Validators.required),
   species: new FormControl('',Validators.required),
   gender: new FormControl('',Validators.required),
   occupation:new FormControl('',Validators.required),
   significant_other:new FormControl('',Validators.required),
   nationality:new FormControl('',Validators.required),
   
 });

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(){
   if(this.info.valid){
   	var new_car = this.info.value;
   	car.push(new_car)

	}
 }
}

