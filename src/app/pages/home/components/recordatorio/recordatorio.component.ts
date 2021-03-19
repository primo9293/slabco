import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ServicioService } from '../../../../services/servicio.service';

@Component({
  selector: 'app-recordatorio',
  templateUrl: './recordatorio.component.html',
  styleUrls: ['./recordatorio.component.css']
})
export class RecordatorioComponent implements OnInit {

  form: FormGroup;
  id: any;
  datos: any = []

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private activeRoute: ActivatedRoute,
              private servicioService: ServicioService) { 
    // this.buildForm();
  }

  ngOnInit(): void {
    this.buildForm();
    this.activeRoute.params.subscribe(( params: Params ) => {
      this.id = params.id;
      let a  = this.servicioService.obtenerDatosId(this.id)
      this.datos = a 
      console.log('datos',this.datos);
    });
    this.patchValue(this.datos[0]);   
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', []],
      titulo: ['', [ Validators.required]],
      ciudad: ['', [ Validators.required]],
      fecha: [''],
      hora: ['', [ Validators.required ]],
      color: ['', [ ]],
    });
  }

  patchValue(data?) {
    this.form.patchValue({
        id:data.id,
        titulo: data.titulo,
        ciudad: data.ciudad,
        fecha: data.fecha,
        hora: data.hora,
        color: data.color,
    })
  
  }

  creaActua(){
    console.log(this.form.value);
  }

  cancelar(){
    this.router.navigate(['./home']);
  }

}
