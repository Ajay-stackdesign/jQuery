heros=['spider man','thor','hulk','iron man','captain america']
print(len(heros))
heros.append("black panther")
print(heros)
heros.remove("black panther")
print(heros)
heros.insert(3, "black panther")
print(heros)
heros[1:3] = ["doctor strange"]
print(heros)
heros.sort()
print(heros)


number = int(input("enter the number"))

odd = []
for i in range(1, number):
    if i % 2 == 1:
        odd.append(i)

print(odd)
    
