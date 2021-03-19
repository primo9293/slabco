import { Component, OnInit, Inject } from '@angular/core';
import * as moment from 'moment'
import { ServicioService } from '../../services/servicio.service';
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
  mes: any
  anio: any

  recordatorios: any = []
  recordatoriosFiltra: any = []
  dia: any
  hora: any
  id = 5

  constructor(/* public dialog: MatDialog */
              private servicioService: ServicioService){
    }

  ngOnInit(): void {
    this.obtenerDatos()
    this.mes = moment().format("MM");
    this.anio = moment().format("YYYY"); 
    this.dia = moment().format("YYYY-MM-DD")
    this.hora = moment().format('HH:mm:ss')
    // console.log(this.dia);
    // console.log(this.hora);
    this.getDaysFromDate(this.mes, this.anio)
    this.filtrar(this.dia)
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
      // console.log('dayObject',dayObject);
      return {
        name: dayObject.format("dddd"),
        value: a,
        indexWeek: dayObject.isoWeekday()
      };
    });
    this.monthSelect = arrayDays;
    // console.log('this.monthSelect',this.monthSelect);
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
    const monthYear = this.dateSelect.format('YYYY-MM')
    const parse = `${monthYear}-${day.value}`
    this.dia = parse
    const objectDate = moment(parse)
    this.dateValue = objectDate;
    // console.log('monthYear',monthYear);
    console.log('parse',parse);
    // console.log('objectDate',objectDate);
    this.filtrar(parse)
  }

  obtenerDatos(){
    this.recordatorios = this.servicioService.obtenerDatos()
    console.log('this.recordatorios', this.recordatorios);
  }

  agregar(){
    console.log('Agregar');
    console.log(this.dia);
   
  }

  filtrar(dia: any){
    // console.log('dia',dia);
    this.recordatoriosFiltra = []
    this.recordatorios.filter(elem => {
      // console.log(elem.fecha);
      elem.fecha == dia
      if(elem.fecha == dia){
        // console.log('entro');
        this.recordatoriosFiltra.push(elem)
      }
    })
    // console.log('a',this.recordatoriosFiltra);

    // this.recordatoriosFiltra = this.recordatorios.filter
  }


  
}
