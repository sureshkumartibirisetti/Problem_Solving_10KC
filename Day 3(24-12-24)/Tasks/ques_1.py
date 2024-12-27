# 1) WAP to print sum of non-primes in a number
# input: 588
# output: 16

import math
n=input()
nonPrime_sum=0
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
print(nonPrime_sum)