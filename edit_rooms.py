# utils
def decimalToBinary(n):  
    return bin(n).replace("0b", "")  

# Driver code  
if __name__ == '__main__':  
    print(decimalToBinary(8))  
    print(decimalToBinary(18))  