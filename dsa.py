lst= [3,4,0,2,1,6]

product=1  
for i in range(len(lst)):
    if lst[i]!=0:
        product*=lst[i]
        
print(product)