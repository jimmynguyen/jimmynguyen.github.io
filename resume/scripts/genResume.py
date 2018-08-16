import lib
import os
from render import RenderElement, RenderTagElement

# define constants
fontAwesomeClassMap = { \
	'[email]': 'fa-envelope-square', \
	'[github]': 'fa-github-square', \
	'[linkedin]': 'fa-linkedin-square'
}

# define file paths
outFilePathWithoutExt = 'generated/resume'
sectionsDir = 'generated/sections/'

# get outFileText
outFileText = ''
sections = []
for root, subFolders, filenames in os.walk(sectionsDir):
	for filename in filenames:
		fullPath = os.path.join(root, filename)
		file = open(fullPath, 'r')
		section_name = filename.split('.')[1]
		sectionName = lib.snakeCaseToCamelCase(section_name)
		sectionHeader = lib.addBoundaries(section_name)
		sectionBody = file.read()
		# don't add empty sections
		if sectionBody.strip():
			# preprocess software_skills
			if section_name == 'software_skills':
				sectionItems = sectionBody.split('> ')[1:]
				sectionBody = ''
				for sectionItem in sectionItems:
					lines = sectionItem.split('\n', 1)
					level = lines[0]
					if level != "Ignore":
						skills = lib.wrapText(lines[1].replace('\n', '. ')[:-1])
						sectionBody += level + '\n' + skills + '\n\n'
				sectionBody = sectionBody[:-2]
			sections.append((sectionName, sectionHeader, sectionBody))
			outFileText += '\n' + sectionHeader + sectionBody
outFileText = outFileText[1:]

# write output files
outTextFile = open(outFilePathWithoutExt + '.txt', mode='w', encoding='utf-8')
outTextFile.write(outFileText)
outTextFile.close()

outMarkdownFile = open(outFilePathWithoutExt + '.md', mode='w', encoding='utf-8')
outMarkdownFile.write('```\n' + outFileText + '\n```')
outMarkdownFile.close()

outHtmlFile = open(outFilePathWithoutExt + '.html', mode='w', encoding='utf-8')
resume = RenderTagElement('pre', True, [], [], 'resume')
for (sectionName, sectionHeader, sectionBody) in sections:
	header = RenderTagElement('div', True, ['sectionHeader'], [], '{}SectionHeader'.format(sectionName), sectionHeader)
	body = RenderTagElement('div', True, ['sectionBody'], [], '{}SectionBody'.format(sectionName))
	sectionItems = sectionBody.split('\n\n')
	for index, sectionItem in enumerate(sectionItems):
		item = RenderTagElement('div', True, ['sectionItem'], [], '{}SectionItem{}'.format(sectionName, lib.padZeros(index, len(sectionItems))), sectionItem)
		# do special things for personal info section
		if sectionName == 'jimmyNguyen':
			lines = item.content.split('\n')
			for lineIndex, line in enumerate(lines):
				key = list(fontAwesomeClassMap.keys())[[i for i, x in enumerate(key in line for key in fontAwesomeClassMap.keys()) if x][0]]
				fontAwesomeClass = fontAwesomeClassMap[key]
				href = '{}' if '[email]' not in line else 'mailto:{}'
				anchor = RenderTagElement('a', True, [], [], None, None, [('href', href.format(line.split(key)[1])), ('target', '_blank')])
				anchor.addElements(RenderTagElement('i', True, ['fa', 'fa-2x', fontAwesomeClass], [], None, None, [('aria-hidden', 'true')]))
				item.addElements(anchor)
				if lineIndex < len(lines)-1:
					item.addElements(RenderElement(None, ' '))
			item.content = None
			item.addClass('textAlignCenter')
			header.removeClass('sectionHeader')
			body.removeClass('sectionBody')
		body.addElements(item)
		if index < len(sectionItems)-1:
			body.addElements(RenderTagElement('br'))
	resume.addElements(RenderTagElement('div', True, ['section'], [header, body], '{}Section'.format(sectionName)))
resume.addElements(RenderTagElement('br'))
outHtmlFile.write(resume.render().replace('\n', '<br>'))
outHtmlFile.close()