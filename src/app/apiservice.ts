import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient
  ) {
  }


  public getAll() {
    return this.http.get("http://www.paretohealthcare.com/callcenter/getPatient.php");
  }
  public getAllCommunication() {
    return this.http.get("http://www.paretohealthcare.com/callcenter/getCommunication.php");
  }
  public getAllVisits() {
    return this.http.get("http://www.paretohealthcare.com/callcenter/getVisits.php");
  }
  public getAllValues() {
    return this.http.get("http://www.paretohealthcare.com/callcenter/getValues.php");
  }

  public save(formsBody:String) {
    let url = "http://www.paretohealthcare.com/callcenter/postPatient.php";
    let httpHeaders = new HttpHeaders({
        'Content-Type' : 'application/x-www-form-urlencoded'
   });
   return this.http.post(url, formsBody,
       {
         headers: httpHeaders,
         observe: 'response'
       }
   );
  }

}
