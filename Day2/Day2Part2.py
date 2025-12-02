def invalid(ID):
    pattern = ID[0]
    c = 1
    
    for i in range(len(ID) - 1):
        builder = ""
        
        while(len(builder) < len(ID)):
            builder += pattern
            
            if(builder == ID):
                return True
                
        c += 1        
        pattern = ID[0:c]
        
    return False
    

        
    
def check(s, e):
    
    invalids = []
    
    for i in range(s, e+1):
        if(invalid(str(i))):
            invalids.append(i)
            
    return invalids
    
    
 
    
with open("input.txt", 'r') as n:
    nList = [line.rstrip() for line in n]
    

    
    invalids = []
    
    products = nList[0].split(',')

    
    for ID in products :

        vals = ID.split('-')

        start = int(vals[0])
        end =int(vals[1])
        
        
        
        ivs = check(start, end)
        
        
        for each in ivs:
            invalids.append(each)
            
            
    total = 0
    
    for ID in invalids:
        total += ID
        
    print(total)
