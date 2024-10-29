app.jsx --> name, fun
---> component1.jsx -->name prop, fun
subcomponent1.jsx. ---> name prop, fun prop

<h1>{name}<h1>
<button fun> </button>

                            prop drilling

---

To create context

1.  createContext() ---> it is a wrapper function to store the data.
    ---> it returns a component.

2.  provider --> this is present inside the returned createcontext component.

        ---> here you will send the data.
        ----> value= {}

3.  wrap the provider to the parent component.

4.  the place where you want to access the data use --> useContext( createContext component);

let details= {
name: "flm",
age:"2yr"
}

const name= details.name;
const age= details.age;

const {name, age}= details;
