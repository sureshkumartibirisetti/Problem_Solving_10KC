#WAP to count the digit,alphabets and special character from the string

str=input("Enter a String : ")
str=str.lower()
cD=0
cA=0
cS=0
for i in str:
    if(i>='0' and i<='9'):
        cD+=1
    elif(i>='a' and i<='z'):
        cA+=1
    else:
        cS+=1
print("count Digit",cD)
print("count Alphabets",cA)
print("Count special characters",cS)