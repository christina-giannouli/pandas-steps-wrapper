# React Wizard Component

## Prerequisites

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It uses `Typescript v4.9.5`, `TailwindCSS v3.2.7` and `React v18.2.0`.
You will need `node >= v14.x.x` to be installed on your computer.

This component was built using the Compound Component pattern and the Context API. It consists of:

1. the main `Wizard` component that creates the context to store the state, handles the logic and accepts children as props.
2. then there is the `Content` compound component which accepts children as props as well and is responsible for rendering the steps inside the wizard.
3. finally, there are the next and previous step components that are responsible for navigating the wizard. They render whichever component is being passed as child.

## How to use

The composition of the Wizard should be like this:

```jsx
import Wizard from './Wizard';

<Wizard>
  {/* Any other custom component you wish to render as a child */}
  <Wizard.Content>
    {/* any component you wish to use as a step */}
  </Wizard.Content>
  <Wizard.PrevStep>
    {/*  Any component or HTML element you wish to use for navigating through the steps  */}
  </Wizard.PrevStep>
  <Wizard.NextStep>
    {/*  Any component or HTML element you wish to use for navigating through the steps  */}
  </Wizard.NextStep>
</Wizard>;
```

The Child components cannot be rendered outside the Wizard component. If the composition is not correct an error is logged on the browser console.

To add styles to the component, wrap each child to a HTML tag and add your custom css classes. e.g.:

```jsx
import Wizard from './Wizard';

<Wizard>
  <div className="bg-black p-8 h-80 overflow-y-auto rounded-b-md">
    <Wizard.Content>...</Wizard.Content>
  </div>
  <div className="flex items-center justify-between pt-6 bg-[#fff]">
    <Wizard.PrevStep>...</Wizard.PrevStep>
    <Wizard.NextStep>...</Wizard.NextStep>
  </div>
</Wizard>;
```

To enhance the component with your custom components and functionalities, you will need to access the wizard context. To do so use the `useWizardContext()` hook which is of type `WizardCtx`.

## How to run

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
