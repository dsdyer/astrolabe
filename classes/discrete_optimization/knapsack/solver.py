#!/usr/bin/python
# -*- coding: utf-8 -*-

from collections import namedtuple
Item = namedtuple("Item", ['index', 'value', 'weight', 'vdensity'])

def solve_it(input_data):
    # Modify this code to run your optimization algorithm

    # parse the input
    lines = input_data.split('\n')

    firstLine = lines[0].split()
    item_count = int(firstLine[0])
    capacity = int(firstLine[1])

    items = []

    for i in range(1, item_count+1):
        line = lines[i]
        parts = line.split()
        items.append(Item(i-1, int(parts[0]), int(parts[1]), float(parts[0]) / float(parts[1])))
    items = sorted(items, key=lambda item: item.vdensity, reverse=True)

    def relaxed_solution(capacity, items, includedItemsMap = [1]*len(items)):
      remainingCapacity = capacity
      wholeValue = 0
      fragmentValue = 0
      for i,x in enumerate(items):
        if includedItemsMap[i] == 1:
          remainingCapacity = remainingCapacity - x.weight
          if remainingCapacity >= 0:
            wholeValue += x.value
          else:
            fragmentValue = (x.weight + remainingCapacity) * x.vdensity
            break
      return wholeValue + fragmentValue


    def walk_tree(capacity, items, optimal):
      possibleItems = [1]*len(items)
      taken = [0]*len(items)
      bestSolution = [[0]*len(items), 0]
      def step(currentItem = 0, value = 0, weight = 0, bestSolution = [[0]*len(items), 0]):
        try:
          if weight + items[currentItem].weight <= capacity:
            weight += items[currentItem].weight
            value += items[currentItem].value
            taken[currentItem] = 1
          print currentItem, value, weight, taken
          currentItem += 1
          step(currentItem, value, weight)
        except:
          if value > bestSolution[1]:
            bestSolution = taken, value
          print 'end of tree'
          print bestSolution
      step()




    optimal = relaxed_solution(capacity, items, [0,0,0,1])
    walk_tree(capacity, items, optimal)
    # walk_tree(capacity, items, optimal)
    # a trivial greedy algorithm for filling the knapsack
    # it takes items in-order until the knapsack is full
    value = 0
    weight = 0
    taken = [0]*len(items)

    # for item in items:
    #   if weight + item.weight <= capacity:
    #     taken[item.index] = 1
    #     value += item.value
    #     weight += item.weight
    
    # prepare the solution in the specified output format
    output_data = str(value) + ' ' + str(0) + '\n'
    output_data += ' '.join(map(str, taken))
    return output_data


import sys

if __name__ == '__main__':
    if len(sys.argv) > 1:
        file_location = sys.argv[1].strip()
        input_data_file = open(file_location, 'r')
        input_data = ''.join(input_data_file.readlines())
        input_data_file.close()
        print solve_it(input_data)
    else:
        print 'This test requires an input file.  Please select one from the data directory. (i.e. python solver.py ./data/ks_4_0)'

