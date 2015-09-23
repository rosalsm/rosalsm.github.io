
I would like to do my tutorial about HTML. At the same time that I am learning I can write so that way I will review 
whatever I learn new everyday this week.
Today was basics like elements in HTML. 
How to start:
<!DOCTYPE html> were we inform the the browser that we are using the last version of html and the begining of the document.
<head> will be the next element and it identifies the top of the document including the metadata and it may include a document title.


I would like to add more entries in my tutorial like:

<body> where all the visible content start.

Divisions <div> and Spans <span>

They are HTML elements for styling purposes. They don’t have a meaning just simply containers.

<div> is a block-level element that is generally used to identify large group of content and it helps to build a web page’s layout and design.


	Block -level elements begin on a new line, stacking one on top of the other and occupy 		any available width. May be nested inside one another and wrap inline-level elements. 		Commonly used for larger pieces of content such a paragraph. 

<span> is an inline-level element, normally used to identify small group of text within a block-level element.

	Inline-level elements do not begin in a new line. They line up one after the other and 		maintain the width of their content, they can be nested inside one another but they 		cannot wrap bloc-level elements. They are normally small pieces of content such as a 		few words. 


Comments in HTML

They start with <!— and end with —>


9/22/2015

Lists

When we want to order information in a list we can choose between different types of them:
`<ul>` Unordered lists.

It is simply a list of related items whose order does not matter. An <`ul>` is a block-level element. Each item is individually marked up using the list item element `<li>`. By default most browsers precede each items with a solid dot.

`<ol>` Ordered lists.

It is a list of items as well like `<ul>` but the main difference is that with an ordered list, the order in which items are presented is important. Ex a recipe or directions to go somewhere. In the case of `<ol>`, because the order matters, the list uses numbers as a default list item marker.
Also `<ol>` have a unique attributes to them including `start` and `reversed`.

`<ol start=“number”>` number which you want to start your list, default is 1.

`<ol reversed>` allows a list to appear in reversed order

`value` attribute in an `<li>` element in an ordered list changes its value and and the rest of the items after this.

 ````
<ol>
	<li value=“9”>do this</li>
	<li>do that</li>
</ol>
````
do that will have the marker 10.

 `<dl>` Description lists.

This type of list is used for multiple items and their descriptions. Ex, a glossary.
It is a block-level element but they required two block-level elements:

`<dt>` description term element (name of the item)
`<dd>` description element (its definition or description) includes a left `margin` by default.

