import sys
from collections import defaultdict

def total_fruit(fruits):
    l = 0
    m = 0
    fc = defaultdict(int) 
    for r in range(len(fruits)):
        fc[fruits[r]] += 1
        while len(fc) > 2:
            fc[fruits[l]] -= 1
            if fc[fruits[l]] == 0:
                del fc[fruits[l]]
            l += 1
        m = max(m, r - l + 1)
    
    return m
input_str = sys.stdin.read().strip()
fruits = list(map(int, input_str.split()))
print(total_fruit(fruits))