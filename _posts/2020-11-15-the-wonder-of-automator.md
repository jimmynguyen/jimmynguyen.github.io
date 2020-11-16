---
title: The Wonder of Automator
date: 2020-11-15 18:39:20 -0500
categories: [Technology,Automation]
tags: [apple books,automation,automator,cheerio,ebook,martial peak,sigil,web novel,wget] # TAG names should always be lowercase
---

Last week, I started reading a Chinese web novel [*Martial Peak*](https://www.divinedaolibrary.com/martial-peak) on the [Divine Dao Library](https://www.divinedaolibrary.com/) website. I, personally, am a big fan of [Apple Books](https://www.apple.com/apple-books/) for reading. I have experimented with multiple ebook readers, but none of them provide an experience on par with [Apple Books](https://www.apple.com/apple-books/). Since I was unable to find an appropriate EPUB ebook for the novel, I resorted to reading the novel on the translation website and compiling the ebook as I read along in case I ever wanted to reread the novel. Since the novel is broken in to multiple volumes, I just need to extract the web content for each chapter and compile them into an EPUB ebook for each volume.

For the first volume, my workflow was quite laborious. For each chapter, I would
1. read the chapter
2. copy and paste the chapter information into a `.txt` file
   1. chapter number
   2. chapter title
   3. link to chapter on the website
   4. chapter content
3. edit any malformed content in the `.txt` file

After compiling all of the `.txt` files for a volume, I would
1. run a python script to convert the `.txt` files into `.xhtml` files with the appropriate formatting
2. compile the ebook with the `.xthml` files using [Sigil](https://sigil-ebook.com/), an EPUB editor

After a dozen chapters, I was tired of having to copy and paste each individual piece of information for each chapter so I wrote a javascript snippet that would copy the formatted information into my clipboard so that I can just paste the information into the `.txt` file. This helped to speed up the process slightly.

After compiling the first volume, I was thoroughly tired of the process because it hindered my reading speed and experience. In addition, it was monotonous and tedious. I decided to automate this process. In the past, I have used [Selenium Web Driver](https://www.selenium.dev/) to automate extracting web content, but I decided to take a different approach.

In my first attempt, I compiled a list of chapter links `links.txt` and used [wget](https://www.gnu.org/software/wget/) to download the individual chapter web pages. Then using the [cheerio](https://cheerio.js.org/) javascript library, I would extract and reformat the web content for each chapter into a `.txt` file so that it would be appropriate to pass to the python script. The additional reformatting was necessary because the python script expects the `.txt` file content to be regular text with newline characters, but the content returned by [cheerio](https://cheerio.js.org/) was in the form of HTML with `<p>` tags. In theory, this method would have worked; however, I did not feel like expending additional effort to reformat the HTML into regular text. Since I already had all of the parts from start to finish to extract the web content for each chapter and create a `.xhtml` file, I just need to automate the process and repeat it for each chapter. I knew I needed some software to perform macros on a Mac, and after a quick internet search, I found that Automator was the application for the job.

I have heard of Automator before, but I have never had the opportunity to learn and use it. Lo and behold, here is opportunity smacking me in the face. The workflow is as follows:
1. Get chapter url from `links.txt`
2. Open url in browser
3. Open developer console
4. Run javascript snippet to copy chapter information (number, title, link, content) into clipboard
5. Paste chapter information into `.txt` file and save
6. Repeat for every line in `links.txt` (each line contains a link to a chapter)

I was ecstatic when I finally got the Automator workflow to run for about 1400 chapters. Then realization hit me that while Automator was running, I would not be able to use my computer. I won't say how long it took for the Automator workflow to complete, but I will say say that in the future, I will be giving that [cheerio](https://cheerio.js.org/) script an attempt... In all seriousness, I think Automator is a great automation tool and can definitely make your life easier.

After compiling the list of `.txt` files, I ran the python script to create the `.xhtml` files and compiled the ebooks manually. In the future, I think automating the ebook compilation process will be the next step as well as investigating whether or not Automator has a silent or headless mode. For now, I am going to enjoy my 6 volumes of [*Martial Peak*](https://www.divinedaolibrary.com/martial-peak) using [Apple Books](https://www.apple.com/apple-books/).

Here are a list of *some* of my references for learning how to make the Automator workflow in case you want to try this yourself:
* How to read a `.txt` file line by line: [https://stackoverflow.com/questions/24853112/read-a-text-file-with-automator-app-line-by-line](https://stackoverflow.com/questions/24853112/read-a-text-file-with-automator-app-line-by-line)
* How to press keys using AppleScript: [https://apple.stackexchange.com/questions/36943/how-do-i-automate-a-key-press-in-applescript](https://apple.stackexchange.com/questions/36943/how-do-i-automate-a-key-press-in-applescript)
* List of AppleScript key codes: [https://eastmanreference.com/complete-list-of-applescript-key-codes](https://eastmanreference.com/complete-list-of-applescript-key-codes)
* How to use Automator variables anywhere in workflow: [http://hints.macworld.com/article.php?story=20080213200213250](http://hints.macworld.com/article.php?story=20080213200213250)