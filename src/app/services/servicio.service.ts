import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  recordatorios = [
    {
      id: 2,
      color: '#48E126',
      titulo: 'Reunión en el colegio',
      ciudad: 1,
      fecha: '2021-03-18',
      hora: '20:52'
    },
    {
      id: 3,
      color: '#E1D326',
      titulo: 'Clase de Arquitectura',
      ciudad: 2,
      fecha: '2021-03-18',
      hora: '13:03'
    },
    {
      id: 4,
      color: '#2626E1',
      titulo: 'Clase de Electiva',
      ciudad: 3,
      fecha: '2021-03-20',
      hora: '18:35'
    },
    {
      id: 5,
      color: '#9C43C8',
      titulo: 'Reunion de la Asamblea',
      ciudad: 4,
      fecha: '2021-03-25',
      hora: '07:20'
    },
    {
      id: 6,
      color: 'black',
      titulo: 'b',
      ciudad: 1,
      fecha: 'd',
      hora: '09:45'
    }
  ]

  constructor() { 
  }

  obtenerDatos(){
    return this.recordatorios
  }

  obtenerDatosId(id){
    // this.recordatoriosFiltra = []
    return this.recordatorios.filter(elem => elem.id == id)
    // return this.recordatorios
  }

  crearDatos(data){
    this.recordatorios.push(data)
  }

  actualizarDatos(){
    
  }

  eliminarDatos(id){
    // console.log('this.recordatorios---',this.recordatorios);
    const index = this.recordatorios.findIndex(ele => ele.id == id);
    // console.log('index',index);
    if (index == -1) {
      return null
    }
    this.recordatorios.splice(index,1) 
    // console.log('this.recordatorios-*-*-*--*',this.recordatorios);
    return this.recordatorios
  }
}
