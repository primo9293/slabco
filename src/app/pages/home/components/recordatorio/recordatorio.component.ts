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
  boton: string

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private activeRoute: ActivatedRoute,
              private servicioService: ServicioService) { 
    // this.buildForm();
  }

  ngOnInit(): void {
    this.buildForm();
    /* this.activeRoute.params.subscribe(( params: Params ) => {
      this.id = params.id;
      let a  = this.servicioService.obtenerDatosId(this.id)
      this.datos = a 
      console.log('datos',this.datos);
    });
    this.patchValue(this.datos[0]); */  
    this.cargarDatos() 
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

  get tituloField(){
    return this.form.get('titulo');
  }

  get ciudadField(){
    return this.form.get('ciudad');
  }


  get horaField(){
    return this.form.get('hora');
  }

  
  cargarDatos(){
    this.activeRoute.params.subscribe(( params: Params ) => {
      this.id = params.id;
      console.log(this.id);
      if(this.id === '1'){
        console.log('entro111');
        this.boton = 'Crear'
        return
      } else {
        console.log('diferente111');
        let a  = this.servicioService.obtenerDatosId(this.id)
        this.datos = a 
        this.boton = 'Actualizar'
        this.patchValue(this.datos[0]); 
      }
      /* if (!this.id) {
        console.log('entrooo');
        return
      }
      console.log('pasopor');
      let a  = this.servicioService.obtenerDatosId(this.id)
      this.datos = a  */
    });
   /*  if(this.id === 1){
      this.boton = 'Crear'
    } else {
      this.boton = 'Actualizar'
      this.patchValue(this.datos[0]); 
    } */
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
    const data = this.form.value
    if (this.boton === 'Crear') {
      this.servicioService.crearDatos(data)
      this.router.navigate(['./home']);
    } else {
      this.servicioService.actualizarDatos(data)
      this.router.navigate(['./home']);
    }
    console.log(this.form.value);
  }

  cancelar(){
    this.router.navigate(['./home']);
  }

}
