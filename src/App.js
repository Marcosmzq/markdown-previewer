import "./App.css";
import marked from "marked";

import { useState } from "react";

function App() {
  const [
    markdown,
    setMarkdown,
  ] = useState(`# Bienvenido a mi  React Markdown Previewer!
  ***
  ## Este es un subtítulo ...
  ***
  ### Y aquí hay otras cosas interesantes:
  ***
  Podés editarlo para que se vea como vos querés!
  ***
  Aca código, \`<div></div>\`, entre comillas.
  
  \`\`\`
  // estas son unas lineas de código:
  
  function otroEjemplo(primeraLinea, ultimaLinea) {
    if (primeraLinea == '\`\`\`' && ultimaLinea == '\`\`\`') {
      return multiLineasDeCodigo;
    }
  }
  \`\`\`
  ***
  También puedes poner el texto en **negrita**... ¡vez!.
  O sino _italic_.
  O... podés tambien... **_ambas!_**
  
  También podés tachar cosas! ~~como esta palabra~~.
  
  Tambien hay links! [como este](https://www.google.com/), y además
  >Blockquotes
  ***
 
  - Por supuesto tambien hay listas.
    - Algunas tienen puntos.
       - Diferentes en cada nivel.
          - Como podés ver!.

          ***
  1. Y además hay listas enumeradas por supuesto!.
  1. Podes ver aca como esta enumerada.
  1. Y por último, antes de olviderme mostarte, tambien hay imagenes!:
  
  ![React Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png)
  `);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };
  return (
    <div id="container">
      <header>
        <h1>Markdown Previewer</h1>
        <p>
          Created by{" "}
          <a
            href="https://github.com/Marcosmzq/"
            target="_blank"
            rel="noopener noreferrer"
          >
            — Marcos
          </a>
        </p>
      </header>

      <div id="markdown-box">
        <div id="editor-box">
          <h2 className="center-text">Markdown Editor</h2>
          <textarea
            id="editor"
            value={markdown}
            onChange={handleChange}
          ></textarea>
        </div>
        <div id="previewer-box">
          <h2 className="center-text">Markdown Previewer</h2>
          <div
            id="preview"
            className="box"
            dangerouslySetInnerHTML={{
              __html: marked(markdown),
            }}
          ></div>
        </div>
      </div>
      <footer>
        <p>
          Proyecto creado para{" "}
          <a
            href="https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer"
            target="_blank"
            rel="noopener noreferrer"
          >
            freeCodeCamp.
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
