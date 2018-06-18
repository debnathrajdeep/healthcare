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
    this.patientList = [{"Id":"1","Name":"Aaaa","Country":"India"},
      {"Id":"2","Name":"Bbb","Country":"Germany"},{"Id":"3","Name":"Ccc","Country":"Germany"},
      {"Id":"4","Name":"Ddd","Country":"Germany"},{"Id":"5","Name":"Eee","Country":"Germany"},
      {"Id":"6","Name":"Fff","Country":"Germany"},{"Id":"7","Name":"Ggg","Country":"Germany"},
      {"Id":"8","Name":"Hhh","Country":"Germany"},{"Id":"9","Name":"Iii","Country":"Germany"},
      {"Id":"10","Name":"Jjj","Country":"Germany"},{"Id":"11","Name":"Kkk","Country":"Germany"},
      {"Id":"12","Name":"Lll","Country":"Germany"},{"Id":"13","Name":"Mmm","Country":"Germany"},
      {"Id":"14","Name":"Nnn","Country":"Germany"},{"Id":"15","Name":"Ooo","Country":"Germany"},
      {"Id":"16","Name":"Ppp","Country":"Germany"},{"Id":"17","Name":"Qqq","Country":"Germany"},
      {"Id":"18","Name":"Rrr","Country":"Germany"},{"Id":"19","Name":"Sss","Country":"Germany"},
      {"Id":"20","Name":"Ttt","Country":"Germany"},{"Id":"21","Name":"Uuu","Country":"Germany"},];
    this.selectedPatient = {"Id":"0","Name":"","Country":""};
  }

  showPatientDetails(patientId:String) {
    this.selectedPatient = _.find(this.patientList, {"Id":patientId});
    console.log(this.selectedPatient);
  }

}
