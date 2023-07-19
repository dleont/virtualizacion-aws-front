import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-listar-personas',
  templateUrl: './listar-personas.component.html',
  styleUrls: ['./listar-personas.component.scss']
})
export class ListarPersonasComponent implements OnInit {
  title = "Lista de Personas"

  //displayedColumns: string[] = ['contraseña'];
  showPassword: boolean = false;

  lstLibros = new Array()
  libros: any
  displayedColumns: string[] = ['name', 'correo','contraseña'];

  constructor(
    private router: Router,
    private ps : PersonaService
  ){}

  ngOnInit(): void {
    this.loadPersonas()
  }

  loadPersonas(){
    this.libros = this.ps.list()
    this.libros.subscribe((data:any) => {
      console.log("data",data)
      this.lstLibros = data
    })
  }

  goAgregarLibro(){
    this.router.navigate(["persona/create"])
  }

  hidePassword(password: string): string {
    return this.showPassword ? password : '*'.repeat(password.length);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
