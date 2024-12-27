# 1) WAP to print the min digit in a number
# input: 100
# output: 0

num=input()
min_digit=num[0]
for i in range(1,len(num)):
    if(min_digit>num[i]):
        min_digit=num[i]
print(min_digit)

