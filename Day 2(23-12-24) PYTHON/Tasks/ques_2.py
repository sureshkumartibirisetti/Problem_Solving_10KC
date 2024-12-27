# 2) WAP to print the sum of max. and min. digit in a number
# input: 5472
# output: 7+2=9
num=input()
min_digit=num[0]
max_digit=num[0]
for i in range(1,len(num)):
    if(min_digit>num[i]):
        min_digit=num[i]
    if(max_digit<num[i]):
        max_digit=num[i]
print(max_digit,"+",min_digit," = ",int(max_digit)+int(min_digit))
