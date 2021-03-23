import { Component, OnInit, Inject } from '@angular/core';
import * as moment from 'moment'
import { ServicioService } from '../../services/servicio.service';
import { Recordatorio } from '../../models/recordatorio';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  dayss: any = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo"
  ];

  ciudades: any = [
    {
      id: 1,
      value: 'Bogota' 
    },
    {
      id: 2,
      value: 'Medellin' 
    },
    {
      id: 3,
      value: 'Cali' 
    },
    {
      id: 4,
      value: 'Cartagena' 
    },
  ]

  monthSelect: any[];
  dateSelect: any;
  dateSelectCa: any;
  dateValue: any;

  mes: string // any
  anio: string // any
  fecha_actual: string

  recordatorios: Recordatorio[] = [] //any = []
  recordatoriosFiltra: Recordatorio[] = [] // any = []
  dia: string // any
  hora: string // any
  id = 5
  selectedA: string // any
  selectedActua: string // any

  constructor(private servicioService: ServicioService){
    }

  ngOnInit(): void {
    this.obtenerDatos()
    this.obtenerFechaActual()
  }

  obtenerFechaActual(){
    this.fecha_actual = this.servicioService.fechaActual
    this.selectedA = moment().format("DD")
    if (this.fecha_actual.length !== 0) {
      let anio = this.fecha_actual.substring(0,4)
      let mes = this.fecha_actual.substring(5,7)
      let dia = this.fecha_actual.substring(8,10)
      this.selectedActua = dia
      this.getDaysFromDate(mes, anio)
      this.filtrar(this.fecha_actual)
    } else {
      this.mes = moment().format("MM");
      this.anio = moment().format("YYYY"); 
      this.dia = moment().format("YYYY-MM-DD")
      this.getDaysFromDate(this.mes, this.anio)
      this.filtrar(this.dia)
    }
  }


  getDaysFromDate(month, year) {

    const startDate = moment.utc(`${year}/${month}/01`)
    const endDate = startDate.clone().endOf('month')
    this.dateSelect = startDate;
    this.dateSelectCa = this.dateSelect._i

    const diffDays = endDate.diff(startDate, 'days', true)
    const numberDays = Math.round(diffDays);

    const arrayDays = Object.keys([...Array(numberDays)]).map((a: any) => {
      a = parseInt(a) + 1;
      const dayObject = moment(`${year}-${month}-${a}`);
      return {
        name: dayObject.format("dddd"),
        value: a,
        indexWeek: dayObject.isoWeekday()
      };
    });
    this.monthSelect = arrayDays;
  }

  changeMonth(flag) {
    if (flag < 0) {
      const prevDate = this.dateSelect.clone().subtract(1, "month");
      this.getDaysFromDate(prevDate.format("MM"), prevDate.format("YYYY"));
    } else {
      const nextDate = this.dateSelect.clone().add(1, "month");
      this.getDaysFromDate(nextDate.format("MM"), nextDate.format("YYYY"));
    }
  }

  clickDay(day) {
    // console.log('dayyyy',day);
    this.selectedActua = day.value
    const monthYear = this.dateSelect.format('YYYY-MM')
    const parse = `${monthYear}-${day.value}`
    this.dia = parse
    const objectDate = moment(parse)
    this.dateValue = objectDate;
    this.filtrar(parse)
  }

  obtenerDatos(){
    this.recordatorios = this.servicioService.obtenerDatos()
    // console.log('this.recordatorios', this.recordatorios);
  }

  agregar(){
    console.log('Agregar');
    console.log(this.dia);
  }

  filtrar(dia: string){
    this.recordatoriosFiltra = []
    this.recordatorios.filter(elem => {
      elem.fecha == dia
      if(elem.fecha == dia){
        this.recordatoriosFiltra.push(elem)
      }
    })
  }

  eliminar(id: number){
    this.servicioService.eliminarDatos(id)
    this.filtrar(this.dia)
  }

  agregarRecorColorCalen(){
    
  }
  
}
