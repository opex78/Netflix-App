# Netflix

- Create React App
- Configured Tailwind
- Header
- Routing for app
- Login form
- Signup form
- Form Validation
- useRef hook
- Firebase setup
- Deployment for app
- Implementation of sign in flow
- Created redux store to save the user obj in global pool
- Implemented sign out flow
- Update profile
- Bug fix : Sign up page user display name and user_avatar profile image
- Bug fix : if user is loggin we need to redirect ti browse page and if not redirect to / page and vice versa
- Register on TMDB API and create app - get access token and api key
- Get data from TMDB API now playing movie list
- Build Secondary Component
- Build Movie List
  - Now Playing
- Build Movie Card



=== Typescript ===
1. Error Reduciton : compile time error catch instead of runtime
2. Productivity : Auto Completion, type interface, intellisense
3. Scalable code : Refactoring
4. Demand 

==== RULES ====
1. Static typing
let username = "John"
username = 123; // Compile time ERROR 
console.log("username", username)

2. interface and type aliases
interface User {
  id: number;
  name: string;
}

const user: User = {id:1, name:"John"}
