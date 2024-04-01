### REACT JS
-React is one of the most popular, efficient, and powerful open-source **JavaScript libraries** for building dynamic and interactive user interfaces.

### How To Initialized New REACT Project
-Basically there are many ways to initialized react project but the main two are:

(1) npx create-react-app = this is traditional way to initialized the react project but the drawback is it time consuming process and install many dependency which not even imp.

(2) npm create vite@latest = this is most use way to initialized react app, it do not install any unwanted dependency, but here we nodemodule file is not present therefore we need to run "npm i" or "npm install"

***Important***
- As we know to run javaScript we need to inject JS in HTML file so that it can run, so lets see how react inject js in HTML
    > when we create an app using traditional react app it also install dependency called as **react-script** which automatically inject the '.js' or '.jsx' file in HTML.

    > When we create app using vite, firstly it will put the HTML file in main (i.e open) folder and use a script tag to inject the '.js' or '.jsx' file.

- Best Naming convention of component in React:
    >Always, the first letter of component file name should be in capital and also the name of the component function should  be staring with capital letter.
    
    >In vite, the component should be in .jsx extension, but in create react app there is no such rules.




## Counter Project
- Basics aim of this project is to learn about react hooks.

-hooks was introduce to change or update multiple value in ui at same time.

-Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.

-There are multiple types of hooks but the main are useState(), useEffect(), useMemo(), etc.

*In Counter Project we use UseState() hooks to update value of counter*  



## TailwindCSS and Props
// In this project we are implementing **tailwindCSS** and with the help of **props** we can pass the diff values in components

//***TailwindCSS***

    >Tailwind CSS is basically a Utility first CSS framework for building rapid custom UI. It is a highly customizable, low-level CSS framework that gives you all of the building blocks that you need. Also, it is a cool way to write inline styling and achieve an awesome interface without writing a single line of your own CSS.

    >For more: tailwindcss.com

//***props***

    >React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.

    >function(props){} or just destructure the prop function({propsName}){}.

    >You can also give default value in case the value is not passed the default value will appear i.e function({propName="defaultValue"}){}
    
    >For Example go through the project.