import { Component } from '@angular/core';
import { Com } from '../../services/com';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-viajes',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DatePipe
],
  templateUrl: './viajes.html',
  styleUrl: './viajes.css',
})
export class Viajes {
  ciutats: {id: number, nom: string}[] = [];
  horaris: {id:number, origen: number, desti: number, hora_sortida: Date, dia_sortida: Date}[] = [];
  horarisGuardados: {id:number, origen: string, desti: string, hora_sortida: Date, dia_sortida: Date}[] = [];
  horari: {origen: number, desti: number};
  mensaje: string = "";
  guardaViaje: number[] = [];
  constructor (
    private com: Com,
    private router: Router
  ) {
    this.horari = {origen: 0, desti: 0};
  }
  ngOnInit() {
    this.getCiudades();
    const guardados = localStorage.getItem("horariosGuardados");
    if (guardados) {
      this.horarisGuardados = JSON.parse(guardados);
      this.horarisGuardados.forEach(id => this.guardaViaje.push(id?.id));
    }
  }
  getCiudades() {
    this.com.getCiutats().subscribe({
      next: (data)=> {
        this.ciutats = data.ciutats;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  contactForm: FormGroup = new FormGroup({
    ciutatOrigin: new FormControl('', [Validators.required]),
    ciutatDesti: new FormControl('', [Validators.required])
  });
  buscar() {
    const ciutatOriginId = this.contactForm.value.ciutatOrigin;
    const ciutatDestiId = this.contactForm.value.ciutatDesti;
    const ciudatOrigin = this.ciutats.find(c => c.id == ciutatOriginId);
    const ciudatDesti = this.ciutats.find(c => c.id == ciutatDestiId);
    localStorage.setItem('origen-destino', `${ciudatOrigin?.nom}-${ciudatDesti?.nom}`);
    this.com.coincidencia(ciutatOriginId, ciutatDestiId).subscribe({
      next: (data) => {
        this.horaris = data.data;
        this.mensaje = "";
      },
      error: (err) => {
        console.error(err);
        this.mensaje = "No se han encontrado viajes";
      }
    })
    this.selectForm.reset();
  }
  selectForm: FormGroup = new FormGroup({
    radio: new FormControl('', [Validators.required])
  });
  selecciona() {
    const idRadio = Number(this.selectForm.value.radio);
    if (this.guardaViaje.includes(idRadio)) {
      this.mensaje = "Este viaje ya fue seleccionado anteriormente";
      return;
    }
    const horari = this.horaris.find(h => h.id === idRadio);
    if (horari) {
      
      this.horarisGuardados.push({
          id: horari.id,
          origen: this.ciutats.find(c => c.id === horari.origen)?.nom || "",
          desti: this.ciutats.find(c => c.id === horari.desti)?.nom || "",
          hora_sortida: horari.hora_sortida,
          dia_sortida: horari.dia_sortida
        });
      this.guardaViaje.push(horari.id);
      localStorage.setItem("horariosGuardados", `${JSON.stringify(this.horarisGuardados)}`);
    }
  }
  eliminar(borariId:number) {
    this.horarisGuardados = this.horarisGuardados.filter(i => {
      return i.id !== borariId
    })
    this.guardaViaje = this.guardaViaje.filter(i => i !== borariId);
    localStorage.setItem("horariosGuardados", `${JSON.stringify(this.horarisGuardados)}`);
  }
}
