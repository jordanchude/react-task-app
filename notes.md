Steps
1. Create react app
2. Delete extra code
3. Create components folder

Notes
- Use react snippets when possible (e.g. 'rafce' arrow function)
- Don't need "import React from 'react'" in function components (but do with classes
- Default props are in App.js
- Put props into imported components, then edit component to accept  props
- Component functions aren't returned; only jsx
- Use map array method to loop through array of objects for rendering
- Each child in a list should have a key property that's unique
- Don't import information directly into components; useState
- Can't push data to states because it's immutable
- Pass data you want in all states in App.js and not the specific component itself
- React icons allows you to use multiple icon librarys (npm install react-icons)
- Icons are imported like components
- High level functions (e.g. deleteTask) will be in app.js
- State gets passed down, actions get passed up
- Form submissions change state
- 'npm run build' creates build server for deployment
- 'npm  i -g serve' to  install static server
- 'serve -s build -p 8000' -> static build server
- 'npm i json server' to test example backend locally
- create new script --> 'json-server --watch db.json --port 5000' 
- set backend data as state