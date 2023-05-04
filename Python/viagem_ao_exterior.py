from datetime import datetime, timezone
#2023-01-01T12:00:00-03:00
#2 tempo da viagem
#-5 fuso horário 

hora_partida = input();
tempo_viagem = int(input());
fuso_horario = int(input());


horario = datetime.fromisoformat(hora_partida);
horario_utc = horario.astimezone(timezone.utc);
calculo = int(horario_utc.hour) + tempo_viagem + fuso_horario;
horario_utc = horario_utc.replace(hour = calculo);
print("Você chegará em " + str(horario_utc)[0:19]);