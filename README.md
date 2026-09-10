# DevStack

DevStack is a simple and responsive website where users can explore different development technologies and create their own development stack. Users can add technologies to their stack, remove them, and manage their selected technologies easily.

## Features

- Responsive navbar with mobile menu
- Hero section with Explore Technologies button
- Technologies loaded from JSON data
- Responsive technology cards
- Technology category and difficulty information
- Rating for each technology
- Add technologies to your own stack
- Duplicate technology prevention
- Remove individual technologies
- Remove all selected technologies
- Toast notifications for stack actions
- Loading state while technology data is loading
- Responsive design for mobile, tablet, and desktop
- Footer with useful links and social links

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- DaisyUI
- React Toastify

## How to Run the Project

First, install the packages:

```bash
npm install
```

Then run the project:

```bash
npm run dev
```

## React Questions & Answers

### 1. What is React?

React is a JavaScript library used to build user interfaces. It helps us create websites by dividing the UI into small and reusable components. This makes the code easier to manage.

### 2. What is the difference between State and Props?

State is data that belongs to a component and can be changed when needed.

Props are used to pass data from a parent component to a child component. Props cannot be directly changed by the child component.

Simply, **State is a component's own data, while Props are data received from another component.**

### 3. What is useState and how does it work?

`useState` is a React Hook that is used to store data inside a component.

When the state value changes, React updates the component and shows the new value on the screen.

In this project, I used `useState` to keep the selected technologies in the user's stack.

### 4. What is useEffect and when should you use it?

`useEffect` is a React Hook that is used to perform some work after a component renders.

It can be used for things like loading data, working with external things, or doing something when a value changes.

In this project, I used `useEffect` to load the technology data from the JSON file.

### 5. What is a React Component?

A React Component is a small and reusable part of a website.

For example, Navbar, Hero, Technology Card, Your Stack, and Footer can all be separate components.

Breaking a website into components makes the code easier to manage and reuse.

### 6. What is JSX?

JSX is a syntax used in React that looks similar to HTML.

It allows us to write the UI structure together with JavaScript. It makes writing React components easier and more readable.

### 7. What is the difference between controlled and uncontrolled components?

A controlled component is controlled by React state. The input value is connected to the state and React manages its value.

An uncontrolled component is not directly controlled by React state. The input keeps track of its own value.

Simply, **in a controlled component React manages the data, while in an uncontrolled component the input manages its own data.**