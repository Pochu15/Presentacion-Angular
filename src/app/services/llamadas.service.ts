import { User } from './../interfaces/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LlamadasService {

  constructor(private http: HttpClient) { }

  private adress = 'http://localhost:3000/api/';

  getUser(param: string) {
    return this.http.get(`${this.adress}user/${param}`);
  }

  getUsers() {
    return this.http.get(`${this.adress}user/`);
  }

  saveUser(user: User) {
    return this.http.post(`${this.adress}user/`, user);
  }
}
