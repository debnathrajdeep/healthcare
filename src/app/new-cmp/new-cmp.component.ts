import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ApiService } from '../apiservice';
import * as _ from 'lodash';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
@Injectable()
export class NewCmpComponent implements OnInit {

  patientList:any;
  selectedPatient:any;
  isUpdateSuccess:String;
  communicationList:any;
  visitsList:any;
  valuesList:any;
  constructor(
    private api: ApiService) { }

  ngOnInit() {
    this.getAllPatient();
    this.getAllCommunication();
    this.getAllVisits();
    this.getAllValues();
  }

  getAllPatient(): any {
    this.isUpdateSuccess = "";
    this.api.getAll()
    .subscribe(res => this.patientList = res,
        error => console.log(`Server error: ${error.status} - Details: ${error.error}`));
    this.selectedPatient = {"Id":"0","Name":"","Country":""};
  }
  getAllCommunication(): any {
    this.isUpdateSuccess = "";
    this.api.getAllCommunication()
    .subscribe(res => this.communicationList = res,
        error => console.log(`Server error: ${error.status} - Details: ${error.error}`));
  // this.selectedPatient = {"Id":"0","Name":"","Country":""};
  }
  getAllVisits(): any {
    this.isUpdateSuccess = "";
    this.api.getAllVisits()
    .subscribe(res => this.visitsList = res,
        error => console.log(`Server error: ${error.status} - Details: ${error.error}`));
  // this.selectedPatient = {"Id":"0","Name":"","Country":""};
  }
  getAllValues(): any {
    this.isUpdateSuccess = "";
    this.api.getAllValues()
    .subscribe(res => this.valuesList = res,
        error => console.log(`Server error: ${error.status} - Details: ${error.error}`));
  // this.selectedPatient = {"Id":"0","Name":"","Country":""};
  }
  showPatientDetails(patientId:String) {
    this.selectedPatient = _.find(this.patientList, {"ParetoID":ParetoID});
    console.log(this.selectedPatient);
  }
  saveComments(){
    this.isUpdateSuccess = "updating...";
    console.log(this.selectedPatient);
    let formsBody = "ParetoID=" + this.selectedPatient.ParetoID + "&iscompleted=0&comments=" + this.selectedPatient.Source;
    this.api.save(formsBody)
    .subscribe(res => {
      console.log(res);
      this.isUpdateSuccess = "updated successfully";
    },
        error => console.log(`Server error: ${error.status} - Details: ${error.error}`));
  }
  close(patientId:String){
    this.isUpdateSuccess = "updating...";
    let closePatient = _.find(this.patientList, {"ParetoID":ParetoID});
    console.log(closePatient);
    let formsBody = "ParetoID=" + closePatient.ParetoID + "&iscompleted=1&comments=" + closePatient.Source;
    this.api.save(formsBody)
    .subscribe(res => {
      console.log(res);
      this.getAllPatient();
      this.isUpdateSuccess = "updated successfully";
    },
        error => console.log(`Server error: ${error.status} - Details: ${error.error}`));
  }

}
