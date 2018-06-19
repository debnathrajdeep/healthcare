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
    return this.http.get("http://ec2-13-232-36-28.ap-south-1.compute.amazonaws.com/Pareto/getPatient.php");
  }
  
  
  public save(formsBody:String) {
    let url = "http://ec2-13-232-36-28.ap-south-1.compute.amazonaws.com/Pareto/postPatient.php";
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