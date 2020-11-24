---
title: PyQuery for XML and HTML manipulation
date: 2020-11-24 16:27:06 -0500
categories: [Technology,Python]
tags: [ebook,shen yi di nu,sigil,web novel,python,pyquery,wget] # TAG names should always be lowercase
---

On a [previous post](https://jimmynguyen.github.io/posts/the-wonder-of-automator/), I discussed how I used [Automator](https://macosxautomation.com/automator/) as a tool to extract web content from web pages and compiled the content to create an EPUB ebook. In this post, I will discuss how I used the [PyQuery](https://pythonhosted.org/pyquery/) python library to read and extract web content. PyQuery is a [jquery](https://jquery.com/)-like library for python and can be used to perform similar functions.

My goal was to compile another ebook from a web novel that I previously read [*Shen Di Yi Nu*](https://www.novelupdates.com/series/divine-doctor-daughter-of-the-first-wife/) or *Divine Doctor: Daughter of the First Wife*. The workflow was as follows:

1. Extract and compile a list of links to each chapter from the [host website](https://readnovelfull.com/divine-doctor-daughter-of-the-first-wife.html#tab-chapters-title)
   * I ran the following javascript snippet in the DevTools console to copy the list of links to the clipboard and saved the content to a text file `links.txt`.
   ```javascript
   // get all link elements
   var elements = $(".list-chapter > li > a");
   // compile string of links separated by a newline \n char
   var links = "";
   for (var i = 0; i < elements.length; i++) {
      links += elements[i].href + "\n";
   }
   // Create a dummy input to copy the string array inside it
   var dummy = document.createElement('textarea');
   // Add it to the document
   document.body.appendChild(dummy);
   // Set its ID
   dummy.setAttribute('id', 'dummy_id');
   // Output the array into it
   document.getElementById('dummy_id').value=links;
   // Select it
   dummy.select();
   // Copy its contents
   document.execCommand('copy');
   // Remove it as its not needed anymore
   document.body.removeChild(dummy);
   ```
2. Download the HTML web pages using [wget](https://www.gnu.org/software/wget/)
   ```shell
   wget -i links.txt
   ```
3. Perform filename manipulation using python to format the filenames in a standardized format `chapter-{chapter_number}-{title}.html`
   * `{chapter_number}` is the chapter number represented as a zero padded string of length 4
   * `{title}` is the lowercase title of the chapter with punctation removed and each word delimited by a hyphen "-"
4. Read in each file and extract the chapter title and content using PyQuery
   ```python
   from pyquery import PyQuery as pq

   jQuery = pq(filename=filename)
   title = str(jQuery("span.chr-text").text())
   content = str(jQuery("#chr-content").remove('div.ads-holder').html())
   ```
   * As you can see, the usage of PyQuery is pretty similar to JQuery where we can pass in the element identifier to get the desired DOM element(s). In the content element container, there were unwanted ads `div` elements in the form of `div.ads-holder`, and I was able to easily remove those elements by using the `.remove()` function.
5. Format each chapter as a `.xhtml` file with the following format to prepare to create the EPUB ebook
   ```html
   <?xml version="1.0" encoding="utf-8"?>
   <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"
   "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">

   <html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" lang="en" xml:lang="en">
   <head>
   <title>Chapter {chapter_number}{chapter_title}</title>
   <link href="../Styles/stylesheet.css" type="text/css" rel="stylesheet"/>
   </head>

   <body>
   <section epub:type="chapter">
      <h2>Chapter {chapter_number}{chapter_title_html}</h2>
      {chapter_text}
   </section>
   </body>
   </html>
   ```
6. Compile the EPUB ebook with the `.xthml` files using [Sigil](https://sigil-ebook.com/), an EPUB editor

All in all, I think PyQuery was relatively easy to use and is a powerful library for manipulating XML and HTML documents in python.