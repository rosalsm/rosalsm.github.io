My tutorial this week it will be about CSS selectors

I think it could be useful just to have a list of them for a quick guide.

###The most important and useful CSS selectors are:

#### `A`

Selects all elements of type A. Type refers to the type of tag, so `div`, `p` and `ul` are all different element types.

#### `#id`

Selects the element with the `id` attribute. You can also combine the ID selector with the type selector.

#### `AB`

Selects all `B` inside of `A`. Here `B` is the descendant element, meaning an element that is inside of another element.

#### `#id A`

You can combine any selector with the descendent selector.

#### `.className`

The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.

#### `A.className`

You can combine the class selector with other selectors, like the type selector.

#### `A,B`

This will select all `A` and `B` elements. You can combine any selectors this way, and you can specify more than two.

#### `*`

You can select all elements with the universal selector!

#### `A*`

This will select all elements inside of A.

#### `A+B`

This selects all B elements that directly follow A. Elements that follow one another are called siblings. They're on the same level, or depth. (next sibling or next child of the same parent). Selects every B elements placed immediatly after A.

#### `A~B`

You can select all siblings of an element that follow it. This is like the Adjacent Selector (A + B) except it gets all of the following elements instead of one. Selects every B element preceed by A.

#### `A>B`

You can select elements that are direct children of other elements. A child element is any element that is nested directly in another element. 


I will continue with the rest next week...







