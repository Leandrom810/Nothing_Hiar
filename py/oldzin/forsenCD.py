#name is fake ok
continuar = True
print("Bem vindo :)))))))))\n")
apostadores = []
while(continuar == True):
    nome = input("Digite seu nome.\n")
    aposta = int(input("Digite sua aposta meu caro. Tem que ser em numeros inteiros.\n"));
    apostadores.append({nome: aposta});
    escolha = int(input("Tem mais alguém? \n0 - Sim \n1 - Não\n"));
    if(escolha == 1):
        continuar = False


for x in apostadores:
    print(x.);

#ok fiquei sem ideias deixo pra algum outro dia lol
