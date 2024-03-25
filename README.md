# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

### Technologies Used
    typescript for language
    react for frame work
    vite for starter pack 
    framer motion for animations
    tailwind for styling
    heroicons for icons which created by tailwind
    yup for form checking and error handling
    

    I will create responsive typescript fitness app.
    It will have a navigation page which will response where the user at at the moment of 
    screen view and navigation bar will be color at the exact section .It will have 2 options one for phones and one for big screen i will pick the screen sizes on tailwing config file.

    I will use animations most of the project with frame motion motion.div
    At the end of the project i will send a email to my email adress the message that user sends
    The email is crypted by the formsubmit.co if you want to change the email 
 action="https://formsubmit.co/7f3cbf1997b36d5e152d0bae5f663cbd"  7f3cbf1997b36d5e152d0bae5f663cbd change this part to your email and u will recive and mail for your own crypted email.