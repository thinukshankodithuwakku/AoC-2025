def click(start, d, n):

    #Function that increments/decrements based on start value and direction d
    # When incrementing, reset to zero if value exceeds 99
    # When decrementing, reset to 99 if value below 0

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
        

with open("Day1/input.txt", 'r') as n:

    #Parsing input data

    nList = [line.rstrip() for line in n]
    
    instructions = []
    
    for i in nList:
        instructions.append([i[0],int(i[1:])])

    
    
    zeroCount = 0
    cur = 50
    
    for i in instructions:

        #Click through sequence, if value is zero increment zero count by 1

        cur = click(cur, i[0], i[1])
        if(cur == 0):
            zeroCount += 1
        
    print(zeroCount)
