namespace Csharp;
class Program
{
    static void Main(string[] args)
    {
                
        string dataHora = Console.ReadLine(); //2023-01-01 19:00:00
        int fusoHorarioLocal = Convert.ToInt32(Console.ReadLine()); //-3 
        string cidadeDestino = Console.ReadLine(); //Grécia, Atenas 
        int fusoHorarioDestino = Convert.ToInt32(Console.ReadLine()); //2 

        DateTime dataHoraLocal = DateTime.Parse(dataHora);
        dataHoraLocal = dataHoraLocal.AddHours(fusoHorarioLocal + fusoHorarioDestino - 3);
        DateTime dataHoraDestino = TimeZoneInfo.ConvertTimeBySystemTimeZoneId(dataHoraLocal, "Europe/Athens");
        Console.WriteLine("Já é Ano Novo em " + cidadeDestino + "? " + Convert.ToString(dataHoraDestino.Year == dataHoraLocal.Year).ToLower());

    }
}
