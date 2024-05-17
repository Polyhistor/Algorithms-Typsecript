# RULE 1 - O(n)

def find_largest_number(numbers): #N 
    """Finds the largest number in a list."""
    largest_so_far = numbers[0]  # Start by assuming the first is largest


    for number in numbers:  # Check every number in the list O(N)
        if number > largest_so_far:
            largest_so_far = number  # Update if we find a bigger one
    return largest_so_far

# Example usage
my_numbers = [3, 8, 1, 12, 5]
largest = find_largest_number(my_numbers)
print("The largest number is:", largest)


def processSomething (n):
    handleSomeSideEffect(n, someOtherArgs) # O(1) -> Does not matter.

    for i in n:  # O(n) Only focus on this one! 
        for J in i: # O(n^2)
            doSomeCalculations 
    


# RULE 2 & 3

def process_data(N): #N
    """Performs two distinct operations on a N."""

    # Operation 1: O(N) - Print each item
    print("Printing each item:")
    for item in N:
        print(item)

    # Operation 2: O(N^2) - Find pairs of items
    print("\nFinding pairs:")
    for i in range(len(N)):
        print(N[i], N[j])
        # for j in range(i + 1, len(N)):


# Example usage
my_data = [1, 2, 3, 4]
process_data(my_data)



# RULE 4

def process_items_with_sublists(data):
    """Processes items, each with a sublist."""
    
    for item in data:  # O(N) loop
        print(f"Processing item: {item}")
        
        sublist = item["sublist"] 
        for sub_item in sublist: # O(M) loop (where M is the average sublist size)
            print(f"   Sub-item: {sub_item}")

# Example usage
my_data = [
    {"name": "Alice", "sublist": [1, 2, 3]},
    {"name": "Bob", "sublist": [4, 5]},
    {"name": "Carol", "sublist": [6, 7, 8, 9]},
]
process_items_with_sublists(my_data)


# RULE 5

def do_something_repeatedly(data, repetitions):
    magicFunction()
    anotherMagicFunction()


    for item in data:  # O(N) loop
            # Some operation on 'item' (e.g., print it)
            print(item)


# Example usage
my_data = [1, 2, 3, 4]
repetitions = 5  # Constant multiple

do_something_repeatedly(my_data, repetitions)




# O(SQRT(N))
def find_primes_naive(n):
    """Finds all prime numbers less than or equal to 'n' using a naive approach."""

    primes = []
    for num in range(2, n + 1): # o(n)
        is_prime = True
        for i in range(2, int(num**0.5) + 1):  # square root of num of times 
            if num % i == 0:
                is_prime = False
                break  # Not a prime
        if is_prime:
            primes.append(num)

    return primes

# Example usage
number = 30
prime_numbers = find_primes_naive(number)
print(f"Prime numbers less than or equal to {number}: {prime_numbers}")


2^N

def find_all_subsets(set_of_items):
    """Generates all possible subsets of a set."""
    
    if not set_of_items:  # Base case: empty set has only one subset (itself)
        return [[]]

    first_item = set_of_items[0]
    rest_of_items = set_of_items[1:]

    subsets_without_first = find_all_subsets(rest_of_items)
    subsets_with_first = [subset + [first_item] for subset in subsets_without_first]

    return subsets_without_first + subsets_with_first


# Example usage
items = ['a', 'b', 'c']
all_subsets = find_all_subsets(items)
print("All subsets of", items, "are:", all_subsets) 


# N!

def generate_permutations(items):
    """Generates all permutations of a list."""

    if len(items) <= 1:  # Base case: single element or empty list
        return [items]

    all_permutations = []
    for i in range(len(items)):
        first_item = items[i]
        remaining_items = items[:i] + items[i+1:]  # Remove first item
        
        # Recursive step: generate permutations of the remaining items
        for permutation in generate_permutations(remaining_items):
            all_permutations.append([first_item] + permutation)

    return all_permutations


# N * (n-1 ) * (n-2) *.... * 2 * 1 = N! 


# Example usage
my_list = [1, 2, 3]
permutations = generate_permutations(my_list)
print(f"All permutations of {my_list} are: {permutations}")



#N log N

def findMyValue (number):

    for i in number:   #O(n)
        binarySearch(i) # log(on)
