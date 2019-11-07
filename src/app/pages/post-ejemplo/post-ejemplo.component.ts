import { LlamadasService } from './../../services/llamadas.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-post-ejemplo',
  templateUrl: './post-ejemplo.component.html',
  styleUrls: ['./post-ejemplo.component.css']
})
export class PostEjemploComponent implements OnInit {

  constructor(private api: LlamadasService) { }

  ngOnInit() {
  }

  enviar(data) {
    console.log(data.value);
    this.api.saveUser(data.value).subscribe((response) => {
      // Caso en el que todo ha ido bien.
      alert('Usuario guardado correctamente');
    }, (error: HttpErrorResponse) => {
      // Caso en el que ha habido un error.
      alert(error.message);
    });
  }

}
