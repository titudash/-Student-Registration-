# React Student Registration App

This project demonstrates React State, Controlled Forms, and CSS Modules styling.

## Concepts Explained

1. **What is `useState`?**
   `useState` is a React Hook that allows you to add state variables to functional components. State is used to store data that changes over time, like the input typed into a form or the list of registered students.

2. **What is a controlled component?**
   A controlled component is an input element whose value is fully controlled by React state. The state acts as the "single source of truth."

3. **How `value` and `onChange` work:**
   - `value={state}` sets the input's current text to match the React state.
   - `onChange={handleChange}` triggers a function whenever the user types, which then calls a state setter (like `setFormData`) to update the React state.

4. **How form submission works:**
   When the user clicks the submit button, the `<form>`'s `onSubmit` event fires. Inside the handler, `e.preventDefault()` stops the browser from reloading the page. We then take the data from state, validate it, and add it to our list of registered students.

5. **How CSS Modules are used:**
   CSS Modules (e.g., `App.module.css`) scope CSS class names locally to the component by default. You import the styles as an object (`import styles from './App.module.css'`) and apply them using `className={styles.className}`. This prevents CSS conflicts across different parts of the app.
