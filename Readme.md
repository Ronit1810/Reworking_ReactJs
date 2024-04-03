### REACT JS

-React is one of the most popular, efficient, and powerful open-source **JavaScript libraries** for building dynamic and interactive user interfaces.

### How To Initialized New REACT Project

-Basically there are many ways to initialized react project but the main two are:

(1) npx create-react-app = this is traditional way to initialized the react project but the drawback is it time consuming process and install many dependency which not even imp.

(2) npm create vite@latest = this is most use way to initialized react app, it do not install any unwanted dependency, but here we nodemodule file is not present therefore we need to run "npm i" or "npm install"





**_Important_**

- As we know to run javaScript we need to inject JS in HTML file so that it can run, so lets see how react inject js in HTML

  > when we create an app using traditional react app it also install dependency called as **react-script** which automatically inject the '.js' or '.jsx' file in HTML.

  > When we create app using vite, firstly it will put the HTML file in main (i.e open) folder and use a script tag to inject the '.js' or '.jsx' file.

- Best Naming convention of component in React:
  > Always, the first letter of component file name should be in capital and also the name of the component function should be staring with capital letter.
  > In vite, the component should be in .jsx extension, but in create react app there is no such rules.





## Counter Project

- Basics aim of this project is to learn about react hooks.

- hooks was introduce to change or update multiple value in ui at same time.

- Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.

- There are multiple types of hooks but the main are useState(), useEffect(), useMemo(), etc.

_In Counter Project we use UseState() hooks to update value of counter_





## TailwindCSS and Props

- In this project we are implementing **tailwindCSS** and with the help of **props** we can pass the diff values in components

- **_TailwindCSS_**

  > Tailwind CSS is basically a Utility first CSS framework for building rapid custom UI. It is a highly customizable, low-level CSS framework that gives you all of the building blocks that you need. Also, it is a cool way to write inline styling and achieve an awesome interface without writing a single line of your own CSS.

  > For more: tailwindcss.com

- **_props_**

  > React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.

  > function(props){} or just destructure the prop function({propsName}){}.

  > You can also give default value in case the value is not passed the default value will appear i.e function({propName="defaultValue"}){}

  > For Example go through the project.





## BackgroundColor Changer project

- This project is basically changing background color on clicking the color button, Here we use **useState()** for state management and in the main body we use inline styling for only bgColor so that we can inject javaScript and applied onClick event on button to setColor.





## Password Generator Project

- useCallback() : It is a hook use to optimized the and control the rendering of the function, basically it store or memorized the change in dependency and store in cache and if changed it optimized the function, let see more about it
  **_useCallback hook takes two parameter one function(fn) and dependencies._**

  > fn (Function): This is the function you want to cache. You provide this function to React. React will keep it and give it back to you when needed, without calling it immediately.

  > dependencies (Array): These are the values that your function relies on. These could be things like props, state, or any variables or functions used inside your component. You need to list all these values in an array. React will keep track of these values and re-run your function only if any of these values change.

  - when you use **useCallback**, you're telling React to remember your function and only re-run it if the values it depends on change. This can help optimize performance in certain scenarios, especially in cases where functions are passed down to child components, as it avoids creating new function references unnecessarily.

-  useEffect() : It is a hook use to re-run the function when the dependencies changes, let see more about it
    **_useEffect hook takes two parameter one function(fn) and dependencies._**

    > setup (Function): This is where you put the logic you want to happen when something changes in your component. It could be anything from fetching data to updating the UI. You can also return a cleanup function from it if needed.

    > optional dependencies (Array): These are the values that your setup function relies on. Just like with useCallback, you list these values in an array. React will keep track of them and re-run your setup function if any of them change. If you leave this array empty, the setup function will only run once when the component mounts, and never again. If you don't include this array at all, the setup function will run after every re-render of the component.

    - when you use **useEffect**, you're telling React to run some code (the setup function) after rendering, and to clean up after it if necessary. You also specify which values should trigger re-runs of this code. This helps you manage side effects in your components, like fetching data or subscribing to events, in a clear and efficient way.

    _let see how the copy button works_
    - here we use **window.navigator.clipboard.writeText(password)** onClick to select the text 'password'. Note here in ReactJs we can access the window but in NextJs we can't it is server side render.

    - we also use ***useRef()*** were we create variable and can provide it into input field as ref=''. In this project we use useRef() to select and highlight selected text.





## Currency Concertor Project

- ***Custom Hooks***
  > In this project we learn about how we can make our own customized hook and use as a hook. Let us how we create hooks and fetch data
    * Hook 01: to create hook just create a function and pass   two parameter function(fn) and dependencies(array [])

    * fetch Data: to fetch data from url ```https://latest.currency-api.pages.dev/v1/currencies/usd.json``` we use use fetch() and pass the url in "``", it also take .then pass response and convert it into .json()
