# utils
import json
def make_item_dict(index=0, room_number='0000', name='',details='', year=None):
    return {'index':index, 'room_number':room_number, 'year':year, 'name':name, 'details':details}
def make_connection_dict(source=0, target=0):
    return { "source": source, "target": target}
def decimalToBinary(n):  
    return bin(n).replace("0b", "")  

def create_entry(rooms):
    room_number = input('\nWhat is the room number? ')
    room_name = input('What is the room\'s name?')
    room_details = input('What details do you know about the room? ')
    rooms['nodes'] += [make_item_dict(len(rooms['nodes']),room_number, room_name, room_details)]
    print('done!\n')
    
def search_by_name(rooms, name):
    print('potential rooms: ')
    for room in rooms['nodes']:
        if name in room['name']:
            print('\t (' + room['index'] + '): ' + name)
        room['show'] = False
def rewrite_entry(rooms):
    knows = input('do you know the index of the entry you\'d like to rewrite? (y/n)')
    while not 'y' in knows:
        name = input('what is the name of the room you\'re looking for? ')
        search_by_name(name)
        knows = input('do you now know the index of the entry you\'d like to rewrite? (y/n)')
    index = int(input('What is the index? '))
    key = input('what key would you like to rewrite? ')
    while not (key in rooms['nodes'][0].keys()):
        key = input('please enter a valid key.\n valid keys are: ' + str(rooms['nodes'][0].keys()))
    print('previous vlaue: ' + rooms['nodes'][index][key])
    rooms['nodes'][index]['key'] = input('What would you like the new value to be? ')
    print('done!\n')
        
def append_to_entry(rooms):
    knows = input('do you know the index of the entry you\'d like to rewrite? (y/n)')
    while knows != 'y':
        name = input('what is the name of the room you\'re looking for? ')
        search_by_name(name)
        knows = input('do you now know the index of the entry you\'d like to rewrite? (y/n)')
    index = int(input('What is the index? '))
    key = input('what key would you like to rewrite? ')
    while not (key in rooms['nodes'][0].keys()):
        key = input('please enter a valid key.\n valid keys are: ' + str(rooms.keys()))
    print('previous vlaue: ' + rooms['nodes'][index][key])
    rooms['nodes'][index]['key'] += input('What would you like to add? ')
    print('done!\n')
def add_connection(rooms):
    worked = False
    while not worked:
        try:
            source = int(input('what is the source index? '))
            target = int(input('what is the target index? '))
            rooms['edges'] += [make_connection_dict(source,target)] 
            worked=True
        except:
            print('please input a number next time.\n')
def delete_connection(rooms):
    worked = False
    while not worked:
        try:
            source = int(input('what is the source index? '))
            target = int(input('what is the target index? '))
            for i in rooms['edges']:
                if i['source'] == source and i['target'] == target:
                    print('removing: (' + str(source) + " ,"  + str(target) + ' )')
                    rooms['edges'].remove(i)
            worked=True
        except:
            print('please input a number next time.\n')

# Driver code  
if __name__ == '__main__':
    rooms = None
    with open("./static/rooms.json", "r") as json_file:
        rooms = json.load(json_file)
    
    running= True
    while running:
        print('\t(0) create entry')
        print('\t(1) rewrite an entry')
        print('\t(2) add to an entry')
        print('\t(3) add a connection')
        print('\t(4) delete a connection')
        print('\t(5) find index')
        print('\t(6) exit')
        choice = input("\nWhat would you like to do? ")
        match choice:
            case '0':
                create_entry(rooms)
            case '1':
                rewrite_entry(rooms)
            case '2':
                append_to_entry(rooms)
            case '3':
                add_connection(rooms)
            case '4':
                delete_connection(rooms)
            case '5':
                name = input('what is the name of the room you\'re looking for? ')
                search_by_name(name)
            case '6':
                running=False
            case _:
                print('Please input only 0, 1, 2, 3, 4, 5 or 6')
        if running:
            print('what would you like to do next?')
            
        
    with open("./static/rooms.json", 'w') as json_file:
        json.dump(rooms, json_file)
    