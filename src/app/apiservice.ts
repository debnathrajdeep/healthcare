import { Injectable } from '@angular/core';

import { HttpClient  } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient 
  ) {
  }

  
  public getAll() {
      console.log("hiiiiiiiiiiiiii");
    this.http.get("http://ec2-13-232-36-28.ap-south-1.compute.amazonaws.com/Pareto/patient.php")
    .subscribe(res => console.log(res));
  }

}