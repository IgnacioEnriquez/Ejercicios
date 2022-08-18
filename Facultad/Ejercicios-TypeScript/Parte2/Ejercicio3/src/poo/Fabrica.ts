/// <reference path = "Empleado.ts" />

namespace Clases {
    export class Fabrica 
    {
        private _razonSocial: string;
        private _empleados: Empleado[];

        constructor(razonSocial: string) {
            this._razonSocial = razonSocial;
            this._empleados = new Array();
        }

        public CalcularSueldo(): number 
        {

            let acumulador = 0;
            this._empleados.forEach(empleado => 
            {
                acumulador += empleado.GetSueldo();
            });

            return acumulador;

        }

        public ToString() : string
        {
            let retorno = "";

            if(this._empleados.length > 0)
            {
                this._empleados.forEach(empleados => 
                    {
                        retorno += empleados.ToString() + "\n";

                });
            }
            else
            {
                retorno = "No contiene ningun empleado esta Fabrica"
            }

            return retorno;           
        }




    }

}