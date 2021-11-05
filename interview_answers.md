# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
   Context API provides a way to share values between components without having to explicitly pass a prop through every level of of the tree.
2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   Actions:These are objects that describe an event in an application.
   Reducers:These are functions that determine the applications next state given a current state and a specific action
   Store:The store contains the state for my application.
   The store is known as the single source of truth because it contains the entire state of the application.
3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
   Redux Thunk allows action creators to return functions and action objects.It allows action creators functions to dispatch actions themselves.
   It also allows for dispatch to happen asynchronous and allows several dispatches to be executed within ONE action.

4. What is your favorite state management system you've learned and this sprint? Please explain why!

My favourite state management system is redux. I love how it allows me to connect state values and reducer actions to any component. Also I personally do not like mananging application state through prop drilling, this seems easier to me and it makes my state more predictable.
