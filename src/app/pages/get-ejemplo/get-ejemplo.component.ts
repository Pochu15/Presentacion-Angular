import { User } from './../../interfaces/user';
import { LlamadasService } from './../../services/llamadas.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-get-ejemplo',
  templateUrl: './get-ejemplo.component.html',
  styleUrls: ['./get-ejemplo.component.css']
})
export class GetEjemploComponent implements OnInit {

  constructor(private api: LlamadasService) { }

  user: User;
  user2: User;
  users: User[];

  ngOnInit() {
    this.api.getUser('Carlos').subscribe((data: User) => {
      console.log(data);
      this.user = data;
    });
  }

  enviar(form) {
    console.log(form);
    this.api.getUser(form.value.username).subscribe((data: User) => {
      this.user2 = data;
    }, (error: HttpErrorResponse) => {
      if (error.status === 404) {
        alert('Usuario no encontrado');
      }
      this.user2 = undefined;
    });
  }

  getUsers() {
    this.api.getUsers().subscribe((data: User[]) => {
      console.log(data);
      this.users = data;
    });
  }

}
