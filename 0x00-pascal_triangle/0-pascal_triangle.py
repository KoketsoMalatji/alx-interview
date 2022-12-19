#!/usr/bin/python3
"""
Returns a Pascal's Triangle
"""


def pascal_triangle(n):
    """Returns a list of lists
    of integers representing the Pascal’s triangle of n
    """
    pascal = []
    if n > 0:
        for i in range(1, n + 1):
            level = []
            C = 1
            for j in range(1, i + 1):
                level.append(C)
                C = C * (i - j) // j
            pascal.append(level)
    return pascal
