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

  constructor(
    private api: ApiService) { }

  ngOnInit() {
    this.getAllPatient();
  }

  getAllPatient(): any {
    this.isUpdateSuccess = "";
    this.api.getAll()
    .subscribe(res => this.patientList = res,
        error => console.log(`Server error: ${error.status} - Details: ${error.error}`));
    

    this.selectedPatient = {"Id":"0","Name":"","Country":""};
  }

  showPatientDetails(patientId:String) {
    this.selectedPatient = _.find(this.patientList, {"Id":patientId});
    console.log(this.selectedPatient);
  }

  saveComments(){
    this.isUpdateSuccess = "updating...";
    console.log(this.selectedPatient);
    let formsBody = "id=" + this.selectedPatient.Id + "&iscompleted=0&comments=" + this.selectedPatient.Comments;
    this.api.save(formsBody)
    .subscribe(res => {
      console.log(res);
      this.isUpdateSuccess = "updated successfully";
    },
        error => console.log(`Server error: ${error.status} - Details: ${error.error}`));
    
  }

  close(patientId:String){
    this.isUpdateSuccess = "updating...";
    let closePatient = _.find(this.patientList, {"Id":patientId});
    console.log(closePatient);
    let formsBody = "id=" + closePatient.Id + "&iscompleted=1&comments=" + closePatient.Comments;
    this.api.save(formsBody)
    .subscribe(res => {
      console.log(res);
      this.getAllPatient();
      this.isUpdateSuccess = "updated successfully";
    },
        error => console.log(`Server error: ${error.status} - Details: ${error.error}`));
    
  }

}
