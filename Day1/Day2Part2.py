

zeroCount = 0
def click(start, d, n):
    zeroCount = 0
    if(d == 'R'):
        for i in range(n):
            start += 1
            if(start > 99):
                start = 0
                zeroCount += 1
                
        return [start, zeroCount]
        
    else:
        
        for i in range(n):
            start -= 1
            if(start < 0):
                start = 99
                
            if(start == 0):
                zeroCount += 1
                
        return [start, zeroCount]
        

def extraction(this):
    return [this[0],int(this[1:])]
    



with open("sample.txt", 'r') as n:
    nList = [line.rstrip() for line in n]
    
    instructions = []
    
    for i in nList:
        instructions.append(extraction(i))
    
    
    cur = 50
    zC = 0
    
    for i in instructions:
        
        obj = click(cur, i[0], i[1])
    
        cur = obj[0]
        zC += obj[1]
        
    print(zC)

    

