def findMaxV(battery):
    battery = list(battery)
    combs = []
    
    for i in range(len(battery) - 1):
        for j in range(1,len(battery) - i):
            
            
            
            combs.append(int(f"{battery[i]}{battery[i+j]}"))

            
    return max(combs)
    
with open("input.txt", 'r') as f:
    fL = [line.rstrip() for line in f]
    
    total = 0
    
    for each in fL:
        total += findMaxV(each)
        
    print(total)
