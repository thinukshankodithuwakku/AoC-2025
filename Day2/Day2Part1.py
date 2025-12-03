def all_same(test):
    base = test[0]
    
    for char in test:
        if base != char:
            return False
            
    return True

def invalid(ID):
    h = int(len(ID) / 2 )
    
    if(len(ID) % 2 != 0):
        return False
        
    if(all_same(ID)):
        return True
        
    split = [ID[0:h], ID[h:2*h]]
    
    if(split[0] == split[1]):
        return True
        
    else:
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
