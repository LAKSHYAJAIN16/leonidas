# Getting Started with Leonidas
## Markdown of the 21st century
Leonidas is a Markdown Extention powered by React and Javascript
Leonidas serves to add CSS features like color, background-color to your Markdown.
It has support for `HTML`, `CSS` and even Basic `Javascript`
It even supports forms, data binding, and even API usage.

## Getting Started
Simply install it with this command
`npm i leonidas`

Write that and you're ready to go! 

## Adding Leonidas to your project
To Import Leonidas, use the following code
```
import Leonidas from "leonidas";

function App() {
  return (
    <div className="App">
      <Leonidas text={"@(fontSize:10vw) # Hello World!"} />
    </div>
  );
}

export default App;
```

## Leonidas Properties
**To Add a property, just type `@(your-property-name:your-value)`**
All CSS properties are supported and should have the same names. However, names with hyphens, like `background-color` become `backgroundColor`, and `margin-left` becomes `marginLeft`. Otherwise it should be the same

## Leonidas Units.
**All CSS Units are supported**
However, the default unit is `rem` instead of the default `pixel`. Everything is Responsive by default

## Leonidas Modules
Modules Supported are:
1. `rehype-raw` : To Add type `-(add:html)`, To Remove type `-(remove:html)`. Added by default. **Used for HTML**
2. `rehype-sanitize` : To Add type `-(add:sanitize)`, To Remove type `-(remove:sanitize)`. Added by default. **Used for Sanitization of Document**
3. `rehype-katex` : To Add type `-(add:katex)`, To Remove type `-(remove:katex)`. Not Added by default. **Used for Syntax Highlighting**
4. `remark-gfm` : To Add type `-(add:ttu)`, To Remove type `-(remove:ttu)`. Added by default. **Used for Tables, Links, Images, Lists, etc**
4. `remark-math` : To Add type `-(add:math)`, To Remove type `-(remove:math)`. Not Added by default. **Used for Math**

## Leonidas Templates
View the Template source [here](https://github.com/LAKSHYAJAIN16/leonidas/blob/main/src/leonidas-templates.jsx).
There are a wide number of templates which make your job easier

## Other
View the Github Repo [here](https://github.com/LAKSHYAJAIN16/leonidas)
This Website was Developed by me, Lakshya Jain, a 13 year old asian, so you know it's going to be good

Happy Hacking!!
