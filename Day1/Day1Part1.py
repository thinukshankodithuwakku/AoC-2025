def click(start, d, n):
    if(d == 'R'):
        for i in range(n):
            start += 1
            if(start > 99):
                start = 0
                
        return start
        
    else:
        
        for i in range(n):
            start -= 1
            if(start < 0):
                start = 99
                
        return start
        

def extraction(this):
    return [this[0],int(this[1:])]
    



with open("sample.txt", 'r') as n:
    nList = [line.rstrip() for line in n]
    
    instructions = []
    
    for i in nList:
        instructions.append(extraction(i))
    
    zeroCount = 0
    cur = 50
    
    for i in instructions:

        cur = click(cur, i[0], i[1])
        if(cur == 0):
            zeroCount += 1
        
    print(zeroCount)
