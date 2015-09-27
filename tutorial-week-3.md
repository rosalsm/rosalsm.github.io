
I would like to do my tutorial about HTML. 

At the same time that I am learning I can write so that way I will review whatever I learn new everyday this week.

HTML is a markup language and what it does is basically the representation of a web page in different elements. HTML separates content such as words, images, audio, etc from how this content is displaying.

HTML uses a set of elements to define content types. Elements are designators and define the structure and content of objects within a page. Those elements contain one or more "tags" that content or express content. Tags are enclosed by angle braches `< >`.

Elements have at least one tag, the one that it represents the beginning of this element, the opening tag `<p>` and most of them have a closing tag `</p>`. They have no white spaces in between characters. 

If we need to add comments with no code consequences we write this comments between <!- and ->

How to start an HTML document:

`<!DOCTYPE html>` 
Should be the first element on the top of the html document. This element informs the the browser that we are using the last version of html and the begining of the document. 

`<head>` 
This is the part of the document after the doctype tag. This is the next element and it identifies the top of the document including the metadata and it may include a document title.

`<body>`
This element indicates where all the visible content start. Almost all content in the website is included in the body element.

Now that we have the beginning of the document we can add some more elements depending on the content of our page.

We normally start a new part of the document with a new section of it or with a special part of it such as a table or list or a simple paragraph. Those are some of the different options:

## Text-based elements

#### Headings `<h1>, <h2>, <h3>,...,<h6>`
They are titles for the different parts of the document.

#### Paragraphs `<p>`
They are block-level elements, which means the content ocupys the width available and begin on a new line. 
Normally contens a piece of text.

#### Divisions <div> and Spans <span>

They are HTML elements for styling purposes. They don’t have a meaning just simply containers.

<div> is a block-level element that is generally used to identify large group of content and it helps to build a web page’s layout and design.


	Block -level elements begin on a new line, stacking one on top of the other and occupy 		any available width. May be nested inside one another and wrap inline-level elements. Commonly used for larger pieces of content such a paragraph. 

<span> is an inline-level element, normally used to identify small group of text within a block-level element.

	Inline-level elements do not begin in a new line. They line up one after the other and maintain the width of their content, they can be nested inside one another but they cannot wrap bloc-level elements. They are normally small pieces of content such as a few words. 


## Lists

#### `<ul>` Unordered lists.

When we want to order information in a list we can choose between different types of them:

It is simply a list of related items whose order does not matter. An <`ul>` is a block-level element. Each item is individually marked up using the list item element `<li>`. By default most browsers precede each items with a solid dot.

#### `<ol>` Ordered lists.

It is a list of items as well like `<ul>` but the main difference is that with an ordered list, the order in which items are presented is important. Ex a recipe or directions to go somewhere. In the case of `<ol>`, because the order matters, the list uses numbers as a default list item marker.

Also `<ol>` have unique attributes to them including `start` and `reversed`.

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


## Tables.

We can build tables in HTML and these are its elements.

#### `<table>`  
Element to initialize a table on a page. This is the first tag that we add when we are going to start a table.

#### `<tr>` 
This element will be the table row. We will have that many rows as `<tr>` tags

#### `<td>`
Table data element (data cells) making columns inside the row. These data element cells had the content of each cell. We have as many of data cells as columns we want in our table.

#### `<th>` 
Table header gives a heading to a column or row. When we add the `scope` attribute indicates what content of a table header relates to. The values can be `col`, `row`, `colgroup`, `rowgroup`. Having a table heading in a table can help readers giving sense of a table.

````
<table>
	<tr>
	    <th scope=‘col’>Item</th>  column has header Item
		.
		.
		.
````


#### `<caption>` 
This element provides a title for the table. It should be immediately after the opening `<table>`, this is its default position.

#### `<thead>`
Table head element wraps all the heading rows and columns to denote the head. Its position is after the `<caption>`

####`<tbody>`
It contains the primary data within a table.

#### `<tfoot>`
It contains data that outlines the contents of a table.




