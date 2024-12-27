# 2) WAP to check whether no-primes sum is more or prime sum is more
# input: 2024
# output: Both are equal

# input: 1976
# output: Non-Prime sum is more

import math
n=input()
nonPrime_sum=0
prime_sum=0
for i in n:
    num=int(i)
    if num==1:
        nonPrime_sum+=1
    else:
        count=0
        for j in range(2,math.floor(math.sqrt(num))+1):
            if(num%j==0):
                count=count+1
                break
        if(count!=0):
            nonPrime_sum+=num
        else:
            prime_sum+=num
if(nonPrime_sum>prime_sum):
    print("Non prime sum is high sum is ",nonPrime_sum)
elif(nonPrime_sum<prime_sum):
    print("prime sum is high sum is ",prime_sum)
else:
    print("Both sum's are equal")