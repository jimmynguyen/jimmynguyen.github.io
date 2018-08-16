# define file paths
inFilePath = 'index_base.html'
outFilePath = 'index.html'
resumeFilePath = 'resume/generated/resume.html'

# read files
inFile = open(inFilePath, 'r')
inFileText = inFile.read()
inFile.close()

resumeFile = open(resumeFilePath, 'r')
resumeFileText = resumeFile.read()
resumeFile.close()

# replace resume
outFile = open(outFilePath, 'w')
outFile.write(inFileText.replace('[resume]', resumeFileText))
outFile.close()