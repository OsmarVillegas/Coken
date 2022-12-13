import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/models/producto.model';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-recibos',
  templateUrl: './recibos.component.html',
  styleUrls: ['./recibos.component.css']
})
export class RecibosComponent implements OnInit {

  productos: Producto[] = [];

  newNombre: string = "";
  newCantidad: number = 0;
  newPrecio: number = 0;

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.getAllProductos(false);
  }

  getAllProductos(conserveEdit: boolean){
    this.productoService.getAll().subscribe({
      next: (data) =>{
        if(!conserveEdit){
          this.productos = data;
          console.log(data);
          this.productos.forEach(element => {
            element.noEdit = true;
          });
        }
        else{
          for (let index = 0; index < data.length; index++) {
            if(this.productos[index].noEdit){
              this.productos[index].nombre = data[index].nombre;
              this.productos[index].cantidad = data[index].cantidad;
              this.productos[index].precio = data[index].precio;
            }
          }
        }
      },
      error: (e) => console.error(e)
    })
  }

  removeOne(id: any){
    this.productoService.removeOne(id).subscribe({
      next: () => {
        this.productos.find(x => x.id == id)?.removeOne();
        //window.location.reload();
      }
    })
  }

  addOne(id: any){
    this.productoService.addOne(id).subscribe({
      next: () => {
        this.productos.find(x => x.id == id)?.addOne();
        //window.location.reload();
      }
    })
  }

  createProducto(){

    if(this.newCantidad < 0){
      this.newCantidad = 0;
    }

    if(this.newPrecio < 0){
      this.newPrecio = 0;
    }

    const data = {
      nombre: this.newNombre,
      cantidad: this.newCantidad,
      precio: this.newPrecio
    };

    this.productoService.create(data).subscribe({
      next: (res) =>{
        console.log(res);
        this.refresValues();
      }
    });
  }

  editProducto(index: number){
    this.productos[index].noEdit = false;
  }

  saveProducto(index: number){
    this.productoService.update(this.productos[index].id, this.productos[index]).subscribe({
      next: (res) =>{
        this.productos[index].noEdit = true;
        console.log(res);
        this.getAllProductos(true);
      }
    })
  }

  private refresValues(){
    this.newNombre = "";
    this.newCantidad = 0;
    this.newPrecio = 0;
  }

}
