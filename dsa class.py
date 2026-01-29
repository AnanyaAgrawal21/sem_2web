arr=[3,4,7,6,5,2]
i=0
j=len(arr)-1
while i<j:
    arr [i],arr[j]=arr[j],arr[i]
    i+=1
    j-=1
print(arr)

num=int(input("Enter a number:"))

original=num
reverse=0

while num>0:
    digit=num%10
    reverse=reverse*10+digit
    num=num//10
    
if original == reverse:
    print("palindrome number")
else:
    print("Not a palindrome number")
    
arr=[1,2,3,4]
number=0
for digit in arr:
    number=number*10+digit

print ("single number:",number)
