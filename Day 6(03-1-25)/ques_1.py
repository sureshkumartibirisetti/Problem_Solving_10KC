def harshad(n):
    a=0
    temp=n
    while n>0:
        rem=n%10
        a+=rem
        n=n//10
    return temp%a==0
a=int(input())
if(harshad(a)):
    print("Harshad Number")
else:
    print("Not Harshad Number")