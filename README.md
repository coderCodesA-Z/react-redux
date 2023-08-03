# Hooking up Redux with React

### actions.js
- define the action types
- define the action creators
- export action types and action creators

### reducer.js
- define initialState for the app
- define the reducer
- export the reducer

### store.js
- import the reducer as rootReducer
- initialize the store object(pass the rootReducer)
- apply enhancers and middlewares
- export the store

### Main.jsx
- import Provider from "react-redux"
- import store 
- wrap the App component with Provider and pass the store object

### Counter.jsx
- for count use the counter recieved from the store
- to recieve the counter from the store use `useSelector` from "react-redux"
- to update the state in the store as well as re-render the UI use `useDispatch` from "react-redux"

### setCounter.jsx
- make the form controlled component using state
- `useSelector` for the state
- `useDispatch` to update the state
- `useEffect` to re-render the setCounter component whenever the count inside counter component gets changed
