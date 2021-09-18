valor = float(input("Digite o valor da conta.\n"));
percentual = float("1." + input("digite o percentual, 10, 15, 20.\n"));
total = valor * percentual;
pessoas = int(input("quantas pessoas há na casa?\n"));

print(f"Valor da conta pra cada membro da casa: R${format((round((total / pessoas))))}.00")