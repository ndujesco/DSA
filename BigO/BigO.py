import time

nemo = ["nemo"]

def find_nemo(arr):
    initial = time.time()
    for i in range(len(arr)):
        if arr[i] == "nemo":
            print("Found NEMO!")
    final = time.time()
    print(final - initial)

# find_nemo #  O(n)

def print_first_two(boxes):
    print(boxes[0])
    print(boxes[1])

# print_first_two O(1)

def another_fn():
    # does something
    return

def fun_challenge(input):
    a = 10 #O(1)
    a = 50 + 3 #O(1)

    for i in range(len(input)): #O(n)
        another_fn() #O(n)
        stranger = True #O(n)
        a += 1 #O(n)
    return a #O(1)

