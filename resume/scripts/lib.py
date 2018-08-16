from math import ceil, floor

def wrapText(inText):
	outText = ''
	while len(inText) >= 80:
		index = 79
		while inText[index+1] != ' ':
			index -= 1
		outText += inText[:index+1] + '\n'
		inText = inText[index+2:]
	if len(outText) == 0:
		outText = inText
	else:
		outText += inText
	return outText

def centerText(text, max_length=80):
	text = text.lstrip().rstrip()
	length = len(text)
	numSpaces = max_length - length
	return (' ' * floor(numSpaces/2)) + text + (' ' * ceil(numSpaces/2))

def addBoundaries(section):
	section = section.lstrip().rstrip().replace('_', ' ').upper()
	horizontalBoundary = '+' + ('-' * 78) + '+'
	return horizontalBoundary + '\n' + '|' + centerText(section, 78) + '|\n' + horizontalBoundary + '\n'

def snakeCaseToCamelCase(text):
	components = text.split('_')
	return components[0] + ''.join(x.title() for x in components[1:])

def padZeros(i, n):
	nStr = str(n-1)
	iStr = str(i)
	return '{}{}'.format('0' * (len(nStr) - len(iStr)), i)