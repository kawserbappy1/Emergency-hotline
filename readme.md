#### ✅ 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: This is the all Selector method in the DOM of JavaScript. Now I am describing the differences among the selectors.
1. getElementById(): This selector method selects an ID from a webpage. It's the most usable method for developers in JavaScript. For instance : getElementById("id-name")
2. getElementsByClassName(): This selector method selects all class names that you define in your HTML webpage. For instance : getElementsByClassName("class-name")
3. querySelector(): This selector method selects the first element of elements. It works like a CSS selector.For instance : querySelector()(".class-name")
4.querySelectorAll(): This selector method selects all the elements of elements that you define in your webpage. It also works like a CSS selector.For instance : querySelectorAll()(".class-name ")


#### ✅ 2. How do you create and insert a new element into the DOM?
Answer: If we want to create a new element by using the DOM in JavaScript, we must follow the following steps;
1. Create an element and put it in a variable. For example, const newEleme = document.createElement("h1");
2. Grab the parent div using a DOM selector. For example, const parentEleme = document.getElementById("parent-div");
3. Append a create element to the parent element. For example, parentEleme.append(newEleme);

#### ✅ 3. What is Event Bubbling and how does it work?
Answer: Event bubbling is a common concept in the DOM of JavaScript. When you set an event on an element and click this element, in general DOM click event and gradually bubbles up to its parents until the root.

#### ✅ 4. What is Event Delegation in JavaScript? Why is it useful?
Event delegation is a JavaScript technique where one event listener is added to a parent element. This listener can handle events from all of its child elements. It works by using event bubbling, so we don’t need to add separate listeners to each child.


#### ✅ 5.What is the difference between preventDefault() and stopPropagation() methods?
Answer: Both are common methods that are used in JavaScript. The preventDefault() method stops the default behaviour of some special HTML elements, like forms. Anotherhand the stopPropagation() method prevents the propagation of event bubbles.
