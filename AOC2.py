strategy = #input data, wrapped as a string

newArr = strategy.replace("X", "A").replace("Y", "B").replace("Z","C").split('\n')
del newArr[0]
del newArr[-1]

me = []
opponent = []

for x in newArr:
	me.append(x[2])
	opponent.append(x[0])

pointsOpponent = 0;
pointsMe = 0;

for i in opponent:
	if i == 'A':
		pointsOpponent += 1
	elif i == 'B':
		pointsOpponent += 2
	elif i == 'C':
		pointsOpponent += 3

for i in me:
	if i == 'A':
		pointsMe += 1
	elif i == 'B':
		pointsMe += 2
	elif i == 'C':
		pointsMe += 3

for p in range(len(opponent)):
		if opponent[p] == 'A' and me[p] == 'C':
			pointsMe += 0
		if opponent[p] == 'A' and me[p] == 'A':
			pointsMe += 3
		if opponent[p] == 'A' and me[p] == 'B':
			pointsMe += 6
			
		if opponent[p] == 'B' and me[p] == 'A':
			pointsMe += 0
		if opponent[p] == 'B' and me[p] == 'B':
			pointsMe += 3
		if opponent[p] == 'B' and me[p] == 'C':
			pointsMe += 6
			
		if opponent[p] == 'C' and me[p] == 'B':
			pointsMe += 0
		if opponent[p] == 'C' and me[p] == 'C':
			pointsMe += 3
		if opponent[p] == 'C' and me[p] == 'A':
			pointsMe += 6
				
print(pointsMe)


