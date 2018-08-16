from enum import Enum

class RenderElement:
	# constructor
	def __init__(self, id=None, content=None):
		self.id = id
		self.content = content
		self.str = None
	# public methods
	def render(self):
		return self \
			._initStr() \
			._appendContent() \
			._toString()
	# private methods
	def _initStr(self):
		self.str = ''
		return self
	def _appendContent(self):
		if self.content is not None:
			self.str += self.content
		return self
	def _toString(self):
		return self.str
class RenderTagElement(RenderElement) :
	# contructor
	def __init__(self, tagName, hasClosingTag=False, classes=[], elements=[], id=None, content=None, attributes=[]):
		super().__init__(id, content)
		self.tagName = tagName
		self.hasClosingTag = hasClosingTag
		self.classes = classes
		self.elements = elements
		self.attributes = attributes
	# public methods
	def render(self):
		return self \
			._initStr() \
			._openTag() \
			._appendId() \
			._appendClasses() \
			._appendAttributes() \
			._closeTag() \
			._appendElements() \
			._appendContent() \
			._appendCloseTag() \
			._toString()
	def addClass(self, c):
		if not self.hasClass(c):
			self.classes.append(c)
	def removeClass(self, c):
		if self.hasClass(c):
			self.classes.remove(c)
	def hasClass(self, c):
		return c in self.classes
	def addElements(self, *elements):
		for element in elements:
			self.elements.append(element)
	# private methods
	def _openTag(self):
		self.str = '<{}'.format(self.tagName)
		return self
	def _appendId(self):
		if self.id is not None:
			self.str += ' id="{}"'.format(self.id)
		return self
	def _appendClasses(self):
		if self.classes:
			self.str += ' class="{}"'.format(' '.join(self.classes))
		return self
	def _appendAttributes(self):
		if self.attributes:
			for (key, value) in self.attributes:
				self.str += ' {}="{}"'.format(key, value)
		return self
	def _appendElements(self):
		for element in self.elements:
			self.str += element.render()
		return self
	def _closeTag(self):
		self.str += '>'
		return self
	def _appendCloseTag(self):
		if self.hasClosingTag:
			self.str += '</{}>'.format(self.tagName)
		return self