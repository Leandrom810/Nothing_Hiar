using System;

namespace entities.workerClass{
    public class Worker{
        //atributos
        public int ID;
        public string Nome;
        public float Salario;

        //construtores
        public Worker(){}
        public Worker(int ID, string Nome, float Salario){
            this.ID = ID; this.Nome = Nome; this.Salario = Salario;
        }

        public int GetID(){return ID;}
        public string GetNome(){return Nome;}
        public float GetSalario(){return Salario;}

        public override string ToString(){return $"ID: {GetID()} \n Nome: {GetNome()} \n Salario: {GetSalario()}";}
        

    }
}