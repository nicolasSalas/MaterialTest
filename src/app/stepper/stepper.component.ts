import { Component, OnInit, Injectable } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

import * as myGlobals from '../global'; //<==== this one (**Updated**)




@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }],
})



export class StepperComponent implements OnInit {
  arrayData =[]
  writing = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  nameDisplay = "";
  addressDisplay = "";
  stepName =false;
  stepAddress =false;

  constructor(private _formBuilder: FormBuilder,private route: ActivatedRoute,public dialog: MatDialog) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  
  }
  
  ngClick(value : String){
    console.log('Click1',value);
    this.writing = false;
    // complete the current step
    
     var name = this.firstFormGroup.value.firstCtrl;
     var address = this.secondFormGroup.value.secondCtrl;
    //  Display html
     this.nameDisplay = this.firstFormGroup.value.firstCtrl;
     this.addressDisplay = this.secondFormGroup.value.secondCtrl;

    if(value == 'done'){
      this.dialog.open(DialogElementsExampleDialog);
      // this.arrayData.push({"id":1,"Name":name, "Address": address})
      myGlobals.ArrayData.push({"name":name, "address": address});
      // console.log("arrayData:", this.arrayData)
      console.log("myGlobals:",myGlobals);
    }else if (value == 'name'){
      this.stepName = true;
      this.writing = false;
      // if(this.writing == false){
      //   this.stepName = false;
      // }
    } else if( value == 'address'){
      this.stepAddress = true;
      this.writing = false;
      // if(this.writing == false){
      //   this.stepAddress = false;
      // }
      console.log('Paso Direccion',this.stepAddress);
     
    }

  }

  onKey(event: any){
    this.writing = true;
    if(this.firstFormGroup.value.firstCtrl == ''){
      this.writing = false;
      this.stepName = false;
      this.stepAddress = false;
    }
    // console.log('onKey',this);

  }
  
}
/**
 * @title Dialog elements
 */

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {}