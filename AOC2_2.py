strategy = #input data, wrapped as a string

newArr = strategy.split('\n')

del newArr[0]
del newArr[-1]

pointsMe = 0

for x in range(len(newArr)):
	if newArr[x][2] == 'X':
		if newArr[x][0] == 'A':
			pointsMe += 3
		if newArr[x][0] == 'B':
			pointsMe += 1
		if newArr[x][0] == 'C':
			pointsMe += 2
		pointsMe += 0

	elif newArr[x][2] == 'Y':
		if newArr[x][0] == 'A':
			pointsMe += 1
		if newArr[x][0] == 'B':
			pointsMe += 2
		if newArr[x][0] == 'C':
			pointsMe += 3
		pointsMe += 3

	elif newArr[x][2] == 'Z':
		if newArr[x][0] == 'A': #rock
			pointsMe += 2
		if newArr[x][0] == 'B': #paper
			pointsMe += 3
		if newArr[x][0] == 'C': #scissors
			pointsMe += 1
		pointsMe += 6

print(pointsMe)





