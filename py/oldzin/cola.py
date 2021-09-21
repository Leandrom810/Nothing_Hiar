txt = input()

def maxinput(va):
    inputlist = va.split()
    big = ""
    for ll in inputlist:
        if len(ll) > len(big):
            big = ll
    return big

print(maxinput(txt))