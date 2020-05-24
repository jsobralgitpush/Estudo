// Let's Begin! :D

// A - CODE ACADEMY
// Instação do react

    npx create-react-app "nome da pasta"

// No react, temos uma mistura de código JS com HTML. +- Assim:

    const h1 = <h1>Hello world</h1>;

// Por conta disso, precisamos usar um compilador chamado JSX para traduzir esta informação para o navegador

// 1-Precisamos que as nossas constantes e variáveis tenham apenas um "outermost" item. Por exemplo:

    const blog = (
        <div>
            <img src="pics/192940u73.jpg" />
            <h1>
                Welcome to Dan's Blog!
            </h1>
            <article>
                Wow I had the tastiest sandwich today.  I <strong>literally</strong> almost freaked out.
            </article>
        </div>
        );


// 2-Aqui está uma forma de renderizarmos o nosso código em uma página HTML

    import React from 'react';
    import ReactDOM from 'react-dom';

    // o ReactDOM.render é uma das principais formas de renderização. No primeiro argumento passamos um atributo JSX
    // o segundo atributo se refere a qual elemento do HTML iremos atribuir o atributo JSX
    ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'));


// 3-Existem diferenças de sintaxes entre o react e o HTML...por exemplo:

        // "class" já é usado como uma expressão no JS, por isso usamos "classname" no react

        // Existem alguns elementos em HTML que são "self-closing" tags (como <input> e <br>). No react, eles precisam vir obrigatoriamente com /

// 4- Quando estivermos dentro de uma tag, tudo que estiver entre {} será tratado como um JS cod; exemplo:

        // Teremos 2 + 3 no nosso html
        ReactDOM.render(
            <h1>2 + 3</h1>,
            document.getElementById('app')
        );

        // Teremos 5 no nosso html
        ReactDOM.render(
            <h1>{2 + 3}</h1>,
            document.getElementById('app')
        );


        // O mesmo pode ser feito  com varíaveis
        const theBestString = 'tralalalala i am da best';

        ReactDOM.render(<h1>{theBestString}</h1>, document.getElementById('app'));

        // Também podemos usar isso para chamarmos atributos de uma classe
        const pics = {
            panda: "http://bit.ly/1Tqltv5",
            owl: "http://bit.ly/1XGtkM3",
            owlCat: "http://bit.ly/1Upbczi"
          }; 
          
          const panda = (
            <img 
              src={pics.panda} 
              alt="Lazy Panda" />
          );
          
          // Também podemos colocar funções 
          function coinToss() {
            // This function will randomly return either 'heads' or 'tails'.
            return Math.random() < 0.5 ? 'heads' : 'tails';
          }
          
          const pics = {
            kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
            doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
          };
          let img;
          
          
          if (coinToss() === "heads") {
            img = <img src={pics.kitty} /> // outra forma de usarmos pics.kitty é pics['kitty']
          } else {
            img = <img src={pics.doggy} />
          };
          
          ReactDOM.render(img, document.getElementById('app'));


        // Usando a função map - a função map serve para aplicarmos um metodo/ função a todos os elementos de uma lista
        const people = ['Rowe', 'Prevost', 'Gare'];

        const peopleLis = people.map(person =>
     
        <li>{person}</li>)
        );

        ReactDOM.render(peopleLis, document.getElementById('app'))
    
// Trabalhando com componentes

    class MyComponentClass extends React.Component {
        render() {
        return <h1>Hello world</h1>;
        }
    }
              
              
 
 // B-UDEMY: React
              
    // Configurações iniciais
              // precisamos ter o node no pc
              npm intall node // ou a versão de interesse
              npx create-react-app monsters-rolodex
             
    // Conceitos básicos dos arquivos que acabamos de criar
               // app.js
                    // Aqui temos uma função que nos gera um arquivo HTML através do JSX
              
               // index.js
                    // Aqui usamos a função ReactDOM.render para transformar este app.js em arquivo de HTML
              
               // index.html
                    // Aqui temos um arquivo HTML padrão; a diferença é que referenciamos uma das div's com um ID que puxamos na função de renderização
              
              
              
 
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
