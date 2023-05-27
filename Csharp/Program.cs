namespace Csharp;
class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Insira o Número Um");
        double numeroEnviado1 = Convert.ToDouble(Console.ReadLine());
        Console.WriteLine("Insira o Número Dois");
        double numeroEnviado2 = Convert.ToDouble(Console.ReadLine());

        double x = Somar(numeroEnviado1, numeroEnviado2);
        Console.WriteLine(x);
    }

    public static double Somar(double num1, double num2)
    {
        double result = num1 + num2;
        return result;
    }

}
