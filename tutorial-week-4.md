

# DOM

The Document Model Object specifies how browsers should create a model of an HTML page and how Javascript can access and update the contents of a web page while it is in the browser window.

#### The DOM is not part of the HTML or Javascript so it has its own separate rules. 

This rules primarily cover:

Making a model of the HTML page and

Accessing and changing the HTML page.


#### The DOM is an API (application programming interface)

When a browser loads a web page, it creates a model of that page that it is stored in the browser’s memory.

Any changes made to the DOM tree are reflected in the browser.

#### Body of HTML page 

<html>
  <body>
      <section class="container">

         <section class="name">
          <h1 class=“house">The House</h1>
          <h2 class=“room">My Room</h2>
          </section>
          <ul >
            <li id="bed">Bed</li>
            <li id=“table">Side table</li>
            <li id="rug">Rug</li>
            <li id="mirror">Mirror</li>
         </ul>
                  
        </section>

      </body>

</html>

DOM tree

    Document
      |
    html
      |
    body
      |
    section---attribute
      |               |                 
    section           ul
      |               |   |   |
    h1---h2           li  li  li

The relationships between the document and the elements nodes are described using the same terms as a family tree:
parents, children, siblings, ancestors and descendant (every node is a descendant of the document node).

The DOM consist in four types of nodes:

### The Document Node.

Every piece of of text, attribute or element is represented by its own DOM node.
AT the top of the document a node is added and represent the entire page. When we access to an element, attribute or text node, we navigate through the document node.

### Element Nodes

 To access the DOM tree you, we start looking for the elements. Once you find an element we want, we can access to its attributes or text node if we want.

Each node is an object with methods and properties.

### Attribute Nodes.

Each opening tags of the elements in the DOM tree can carry attributes and they are part of that element. Once you access to this element, there are specific Javascript methods and properties to read and change that element’s attributes. Attribute nodes are not children of the element, they part of the element.

### Text Nodes

Once we can access to an element, like it happens with the attribute, we can access to the text within that element. This is stored in its own text node. Text node can not have children.

## Working with the DOM tree

When we work with the DOM tree we normally go through two steps:

### 1.Access the elements

##### We can do it selecting one element

`getElementById()`. Select the element by its unique attribute id

`querySelector()`. Select the first match.

##### multiple elements

`getElementsByClassName()`. Selects all elements with specific value in their class 			attribute

`getElementsByTagName()`. Select all elements that have specific tag name

`querySelector()`. Select all matching elements

##### traversing between element nodes

`parentNode`. Selects the parent of the current element node.

`previousSibling`. Selects the previous sibling.

### 2.Work with the elements.

#### access/update text nodes.

The text inside the element is store inside the text node. We can access this text:
Selecting the element---.nodeValue property

#### work with HTML content

We can access to the content using:

`innerHTML` access to the child elements and text content.

`textContent` access just to the text content.

We can manipulate the DOM with:

`createElement()`
`createTextNode()`
`appendChild()/removeChild()`

We can access or update attribute values:

`hasAttribute()`  checks if an attribute exists.

`getAttribute()` gets the value of the attribute.

`setAttribute()` updates the value of the attribute.

`removeAttribute()` removes an attribute.


