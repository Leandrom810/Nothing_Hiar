using System;
using System.Collections.Generic;
using entities.workerClass;

namespace wl
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Quantos Funcionarios tem?");
            int a = Int32.Parse(Console.ReadLine());
            int x = 0;
            var list = new List<Worker>();
            while(x < a){
                Console.WriteLine("ID");
                int tID = Int32.Parse(Console.ReadLine());
                Console.WriteLine("Nome");
                string tNome = Console.ReadLine();
                Console.WriteLine("Salario");
                float tSalario = float.Parse(Console.ReadLine());
                list.Add(new Worker(tID, tNome, tSalario));
                x++;
            }
            list.ForEach(delegate(Worker x){
            Console.WriteLine(x);
            });
            Console.WriteLine("Fim.");
        }
    }
}
