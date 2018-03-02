import MixTape from '../models/mixtape.model';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import { Injectable } from '@angular/core';

//RxJS operator for mapping the observable
import 'rxjs/add/operator/map';

@Injectable()
export class MixTapeService {

  api_url = 'http://localhost:3000';
  mixTapeUrl = `${this.api_url}/api/mixtapes`;

  constructor(
    private http: HttpClient
  ) { }


  //Create mixtape, takes a mixtape Object
  createMixTape(mixtape: MixTape): Observable<any>{
    //returns the observable of http post request
    return this.http.post(`${this.mixTapeUrl}`, mixtape);
  }

  //Read mixtape, takes no arguments
  getMixTape(): Observable<MixTape[]>{
    return this.http.get(this.mixTapeUrl)
    .map(res  => {
      //Maps the response object sent from the server

      return res["data"].docs as MixTape[];
    })
  }
  //Update mixtape, takes a mixtape Object as parameter
  editMixTape(mixtape:MixTape){
    let editUrl = `${this.mixTapeUrl}`
    //returns the observable of http put request
    return this.http.put(editUrl, mixtape);
  }

  deleteMixTape(id:string):any{
    //Delete the object by the id
    let deleteUrl = `${this.mixTapeUrl}/${id}`
    return this.http.delete(deleteUrl)
    .map(res  => {
      return res;
    })
  }

  //Default Error handling method.
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
