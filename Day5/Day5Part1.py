def is_fresh(ID, database):
    for r in database:
        raw = r.split('-')
        lims = [int(raw[0]), int(raw[1])]
        
        if(lims[0] <= ID and ID <= lims[1]):
            return True
            
            
    return False
    
with open("Day5/input.txt", 'r') as f:
    fL = [line.rstrip() for line in f]
    
    ranges = []
    IDs = []
    
    for line in fL:
        if('-' in line):
            ranges.append(line)
        elif(line != ""):
            IDs.append(int(line))
            
    count = 0
 
    
    for ID in IDs:
        if(is_fresh(ID, ranges)):

            count += 1 
            
    print(count)
