export class Producto {
    id?: any;
    nombre?: string;
    cantidad: number = 0;
    precio?: number;
    noEdit: boolean = true;

    removeOne(){
        if(this.cantidad > 0){
            this.cantidad -= 1;
        }
    }

    addOne(){
        this.cantidad += 1;
    }
}