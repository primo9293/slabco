import { Component, OnInit, Inject } from '@angular/core';
import * as moment from 'moment'
/* import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { DialogRecordaComponent } from './components/dialog-recorda/dialog-recorda.component';
 */
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

  monthSelect: any[];
  dateSelect: any;
  dateSelectCa: any;
  dateValue: any;
  mes: any
  anio: any

  recordatorios: any
  dia: any

  constructor(/* public dialog: MatDialog */){
    }

  ngOnInit(): void {
    this.mes = moment().format("MM");
    this.anio = moment().format("YYYY"); 
    this.dia = moment().format("YYYY-MM-DD")
    console.log(this.dia);
    this.getDaysFromDate(this.mes, this.anio)
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
    // console.log(day);
    const monthYear = this.dateSelect.format('YYYY-MM')
    const parse = `${monthYear}-${day.value}`
    this.dia = parse
    const objectDate = moment(parse)
    this.dateValue = objectDate;
    console.log('monthYear',monthYear);
    console.log('parse',parse);
    console.log('objectDate',objectDate);

    /* const dialogRef = this.dialog.open(DialogRecordaComponent as any, {
      disableClose: true,
      panelClass: 'override-style',
      data: {
        title: 'Cambios aún sin guardar',
        message: `¿Desea guardar los cambios pendientes?`
      }
    })

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        if (res.opcion == 'Aceptar') {
         
        } else if (res.opcion == 'Cancelar') {

        } else if (res.opcion == 'Descartar') {
         
        }
      }
    }) */
  
  }

  agregar(){
    console.log('Agregar');
    console.log(this.dia);
  }


  
}
