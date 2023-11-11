# utils
import json
def make_item_dict(index=0, room_number='0000', name='',details='', year=None):
    return {'index':index, 'room_number':room_number, 'year':year, 'name':name, 'details':details}
def make_connection_dict(source=0, target=0):
    return { "source": source, "target": target}
def decimalToBinary(n):  
    return bin(n).replace("0b", "")  

# Driver code  
if __name__ == '__main__':
    rooms = {'edges':[], 'nodes':[]}
    for i in range(16):
        room_number = decimalToBinary(i)
        room_number = (4-len(room_number))*'0' + room_number
        index = int(room_number,2)
        rooms['nodes'] += [make_item_dict(index, room_number, room_number)]
        print(room_number)
        for i in range(len(room_number)):
            if room_number[i] == '1':
                print('\t',room_number[:i] + '0' + room_number[i+1:])
                rooms['edges'] += [make_connection_dict(index, int(room_number[:i] + '0' + room_number[i+1:],2))]
            if room_number[i] == '0':
                print('\t',room_number[:i] + '1' + room_number[i+1:])
                rooms['edges'] += [make_connection_dict(index, int(room_number[:i] + '1' + room_number[i+1:],2))]
    print(rooms)
            
    with open("./static/4d_hypercube.json", 'w') as json_file:
        json.dump(rooms, json_file)
    