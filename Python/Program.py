#2023-01-01T12:00:00-03:00
#2 tempo da viagem
#-5 fuso horário 
from datetime import datetime, timezone

horaPartida = input();
tempoViagem = int(input());
fusoHorario = int(input());


horario = datetime.fromisoformat(horaPartida);
horarioUtc = horario.astimezone(timezone.utc);
calculo = int(horarioUtc.hour) + tempoViagem + fusoHorario;
horarioUtc = horarioUtc.replace(hour = calculo);
print("Você chegará em " + str(horarioUtc)[0:19]);