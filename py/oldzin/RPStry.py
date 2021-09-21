import random

def pString(x):
    if(x == 0):
        return "Pedra."
    elif(x == 1):
        return "Papel."
    else:
        return "tesoura";


Player = int(input("Digite um numero \n0 - Predra \n1 - Papel \n2 - Tesoura\n"));
pc = random.randint(0, 2);
print(f"o PCdoB escolhe: {pString(pc)}\n")
print(f"Player escolhe: {pString(Player)}\n")

if(Player == 0 and pc == 0):
    print("Empate.\n")
elif(Player == 0 and pc == 1):
    print("Derrota.\n")
elif(Player == 0 and pc == 2):
    print("Vitória.\n")
elif(Player == 1 and pc == 0):
    print("Vitória.\n")
elif(Player == 1 and pc == 1):
    print("Empate.\n")
elif(Player == 1 and pc == 2):
    print("Derrota.\n")
elif(Player >= 2 and pc == 0):
    print("Derrota.\n")
elif(Player >= 2 and pc == 1):
    print("Vitória.\n")
elif(Player >= 2 and pc == 2):
    print("Empate.\n")
