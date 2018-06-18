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

  constructor(
    private api: ApiService) { }

  ngOnInit() {
    this.api.getAll();
    this.patientList = [{"Id":"1","Name":"Abcd","Country":"India"},{"Id":"2","Name":"Xyz","Country":"Germany"}];
    this.selectedPatient = {"Id":"0","Name":"","Country":""};
  }

  showPatientDetails(patientId:String) {
    this.selectedPatient = _.find(this.patientList, {"Id":patientId});
    console.log(this.selectedPatient);
  }

}
