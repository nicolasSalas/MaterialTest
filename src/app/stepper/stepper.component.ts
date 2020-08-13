import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';



@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class StepperComponent implements OnInit {
  writing = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder,private route: ActivatedRoute) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    console.log('onInit',this)

  }
  
  ngClick(value : String){
    console.log('Click1',this)
    this.writing = false;
    console.log('Click2',this)
    var name = this.firstFormGroup.value.firstCtrl;
    var address = this.secondFormGroup.value.secondCtrl;
    if(value == 'done'){
      console.log('Nombre: ',name, ' ', 'Direccion: ',address)
    }

  }

  onKey(event: any){
    this.writing = true
    console.log('onKey',this)
  }
  
}
