namespace C_;
class Program
{
    static void Main(string[] args)
    {
        //#2023-01-01T12:00:00-03:00
        string horaPartida = Console.ReadLine();
        int tempoViagem = Convert.ToInt32(Console.ReadLine());
        int fusoHorario = Convert.ToInt32(Console.ReadLine());

        DateTime horarioUtc = DateTime.Parse(horaPartida).ToUniversalTime();
        DateTime calc = horarioUtc.AddHours(tempoViagem + fusoHorario);
        Console.WriteLine(calc.ToString("yyyy-MM-dd HH:mm:ss"));
    }
}
