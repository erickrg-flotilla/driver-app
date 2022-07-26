import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private httpClient: HttpClient) { }

  public getPublicIPAddress() {
    return this.httpClient.get('http://checkip.amazonaws.com/');
  }

  public login() {
    let url = 'http://localhost:3000/api';
    let body = {username: 'abcde', pass: 'fhbrkagbrje'};
    return this.httpClient.post(url, body);
  }
}
