from datetime import datetime, timedelta;

horario_encontro = datetime.fromisoformat(input()); # 2023-01-01T10:00:00Z
tempo_pessoa1 = int(input());      # -3 
fh_pessoa1 = int(input());         # 1 
tempo_pessoa2 = int(input());      # -2
fh_pessoa2 = int(input());         # 2

calc_pessoa1 = horario_encontro.hour - (fh_pessoa1 - (tempo_pessoa1));
saida_pessoa1 = horario_encontro.replace(hour=calc_pessoa1);

calc_pessoa2 = horario_encontro.hour - (fh_pessoa2 - (tempo_pessoa2));
saida_pessoa2 = horario_encontro.replace(hour=calc_pessoa2);

print("A primeira pessoa deve sair em " + str(saida_pessoa1)[0:19]);
print("A segunda pessoa deve sair em " + str(saida_pessoa2)[0:19]);
