//interface
interface CamisetaBase{

    setColor(color);
    getColor(color);
}

//Decorador

/*function estampar(logo:string){
    return function(target: Function) {
        target.prototype.estampacion = function():void{
            console.log("Camiseta estampada con el logo de: "+logo);
        }
    }
}
*/

//lo asigno a la clase
 //@estampar('Gucci Gang')

//Clase = viene siendo como un molde de un objeto
class Camiseta implements CamisetaBase{//export para poder usarlo en otro fichero

    //Propiedades = caracteristicas del objeto
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    //Metodos = funciones o acciones del objeto
    constructor(color,modelo,marca,talla,precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    public setColor(color){
        this.color = color;
    }

    public getColor(){

        return this.color;
    }

}

//Clase hija

class Sudadera extends Camiseta{
    public capucha: boolean;

    setCapucha(capucha: boolean){
        this.capucha = capucha;
    }

    getCapucha():boolean{
        return this.capucha;
    }

}

var camiseta =  new Camiseta("Rojo","Sin manga","Nike","M",19);
console.log(camiseta);
//llamado del decorador
//camiseta.estampacion();

var sudadera_nike = new Sudadera("Rojo","Manga Larga","Nike","M",19);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor("verde");
console.log(sudadera_nike);