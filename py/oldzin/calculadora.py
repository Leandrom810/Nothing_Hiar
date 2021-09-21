def calculadora(x, op, y):
    if(op == "+"):
        return x + y;
    elif(op == "-"):
        return x - y;
    elif(op == "*"):
        return x * y;
    elif(op == "/"):
        return x / y;
    else:
        return "erro!!!!!!!! o user ou o dev é otário!!!!"

x = float(input("Digite um numero(não é pegadinha eu juro.)\n"))
op = input("Qual operação você deseja realizar?\n +\n-\n*\n/\n")
y = float(input("digite agora o próximo numero farsen\n"))

print(f"Resultado: {calculadora(x, op, y)}");