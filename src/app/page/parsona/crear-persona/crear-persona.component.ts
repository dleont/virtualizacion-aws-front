import { Component } from '@angular/core';
import { Persona } from 'src/app/Domine/personas';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/services/persona.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.scss']
})
export class CrearPersonaComponent {
  title = "Registrarse"
  res =""
  r = ""
  p: Persona = new Persona()

  constructor(
    private router: Router,
    private ps: PersonaService,
    private snackBar: MatSnackBar,
  ){}

  ngOnInit(): void {

  }

  //guardar(){    
  //  console.log(this.p)
  //  this.ps.save(this.p)
  //  .subscribe(res=>{
  //    console.info('Registro guardado')
  //  })
  //  this.p = new Persona()
  //}
  guardar() {
    if (!this.p.name || !this.p.correo || !this.p.contrasena) {
      this.snackBar.open('Por favor, complete todos los campos obligatorios.', 'Cerrar', {
        duration: 3000, // Duración del mensaje emergente en milisegundos
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });
      return; // Salimos de la función si falta algún campo obligatorio.
    }

    console.log(this.p);
    this.ps.save(this.p).subscribe(res => {
      console.info('Registro guardado');
    });
    this.p = new Persona();
  }

  goList(){
    this.router.navigate(["persona/list"])
  }
}
