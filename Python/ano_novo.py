from datetime import datetime, timedelta

data_hora = input() #2023-01-01 19:00:00
fuso_horario_local = int(input()) #-3 
cidade_destino = input() #Grécia, Atenas 
fuso_horario_destino = int(input()) #2 

data_hora_local = datetime.strptime(data_hora, '%Y-%m-%d %H:%M:%S')
data_hora_local += timedelta(hours=fuso_horario_local + fuso_horario_destino - 3)
data_hora_destino = datetime.strptime(data_hora, '%Y-%m-%d %H:%M:%S') + timedelta(hours=fuso_horario_destino)
data_hora_destino = data_hora_destino.replace(hour=0, minute=0, second=0, microsecond=0)

print("Já é Ano Novo em " + cidade_destino + "? " + str(data_hora_destino.year == data_hora_local.year).lower)
