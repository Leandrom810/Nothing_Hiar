print("...\n")
print("...\n")
print("...\n")
print("Você está em uma ilha... Qual seu nome?\n")
Player = input("Nome: ");
print(f"{Player} está em uma ilha, sozinho... é possivel ir para 3 direções sem que o mato o consuma\n")
print("E acabe ofuscando o caminho de volta... Para onde ir?");
Escolha = int(input(" 0 - Direita\n 1 - Esquerda\n 2 - Em frente\n"));

if(Escolha == 0):
    print(f"{Player} Foi para a direita...");
    print("...\n")
    print(f"Durante seu caminho para a direita, {Player} havia passado por um caminho calmo, arenoso, e suave.\n" + 
    f"Mas ao andar um pouco mais, cruzando a costa ocidental da ilha, {Player} se deparou com uma figura estranha..." + 
    "Era Remilia quem estava distante, ela andava em circulos, fazendo sons fofos do tipo uuuuuo...\n");
    Escolha = int(input(f"Oque {Player} fará? \n 0 - Andar em circulos com ela\n 1 - Sacar seu lança chamas e queimar esse monstro!!"))
    if(Escolha == 0):
        print(f"{Player} começa a andar em circulos com Remilia........");
        print("...");
        print(f"Após andar por dias sem se hidratar ou comer, {Player} acabou morrendo de exaustão e desidratação...");
    else:
        print(f"{Player} saca seu lança chamas e furiosamente desfere uma rajada de fogo contra Remilia!!!\n")
        print("...\n")
        print("Remilia misteriosamente desaparece... E logo... Surge, por trás...\n")
        print(f"{Player} Se desespera, e sai correndo para dentro do mato, aterrorizado, e desesperado!!\n");
        print(f"Sem olhar por onde andava ou pisava, {Player} acabou subindo um enorme morro, e sem olhar para onde ia, acabou caindo do topo do morro...\n")
        print(f"................... {Player} acabou morrendo em sua queda...");
elif(Escolha == 1):
    print(f"{Player} pegou a rota da esquerda... Mas porque esquerda é canalha e blá blá, {Player} morreu de fome!!! Comunismo não funciona wow!");
    print("Morte porque o dev desse jogo é vagabundo!!!");
else:
    print(f"{Player} Segue em frente, e adentra uma pequena trilha no meio do mato...\n" + 
    f"Ao se aprofundar, {Player} se depara com o palhaço do satanás! Brincando de pula corda com um macaco...\n"
    + f"Percebendo a presença de {Player} O palhaço sorri, olhando para {Player} e diz...\n"
    + f"Flandre: Oi!!! {Player} Quer brincar comigo e com o taluigi?[o macaco]\n");
    Escolha = int(input(f" 0 - Não! (Segue adiante...)\n 1 - Sim!\n"));
    if(Escolha == 0):
        print(f"{Player} Decide negar, deixando o palhaço triste, e com sua decisão, seguiu em frente...\n"
        + f"Ao se distanciar, {Player} chega no centro da ilha, e se depara com uma carta, e uma pilula azul...\n"
        + "A carta diz: Toma pra vc acordar lol\n");
        Escolha = int(input(" 0 - Tomar\n 1 - Não Tomar"));
        if(Escolha == 0):
            print(f"{Player} Toma a pilula e acorda em sua casa, era tudo um sonho.\n")
        else:
            print(f"{Player} segue em frente, sem tomar nada, e por não ter mais oque fazer, acaba morrendo na ilha...\n");
    else:
        print(f"{Player} brinca com o palhaço do satanás, até se cansarem, depois de tanto brincar, o palhaço, exausto, sorriu para {Player}\n"
        + f"Flandre: Quer ser meu amigo? Podemos sobreviver juntos aqui!\n");
        Escolha = int(input(f" 0 - Claro!\n 1 - Não sei..."));
        if(Escolha == 0):
            print(f"{Player} aceita, deixando O palhaço super feliz, e com isso, o palhaço descansa abraçado em {Player}...\n"
            + "Os dois sobrevivem juntos na ilha para sempre...\n"
            + f"{Player} está em um eterno coma, e em alguns meses...\n"
            + f"{Player} passará por eutanásia por conta de seu eterno coma...\n");
        else:
            print(f"O palhaço se chateia, mas não fica tão triste, {Player} foi sincero, portanto, o palhaço o recompensa...............\n"
            + f"Flandre: Isso é só um sonho, você está em coma por conta de um acidente que sofreu ta? Acorde logo, sua mãe está preocupada...\n"
            + f"{Player} em choque, encarando O palhaço com um olhar assustado, começava a desaparecer lentamente...\n"
            + f"Mas sorridente, o palhaço se afastou, saudou {Player} e disse carinhosamente...\n"
            + f"Flandre: Espero que possamos ser amigos no mundo real... Converse comigo, eu não sou quem eu sou agora...\n"
            + f"Flandre: Eu sou só a sua colega de Classe...");

print("Fim de jogo...");