---
author: Javier Ortuño Roig
pubDatetime: 2022-08-23
title: Mi configuración de VSCode
postSlug: mi-configuración-de-VSCode
featured: false
draft: false
tags:
  - IDE
description:
  Configuración de para el editor de código VSCode.
---

Como desarrolladores, uno de los sitios donde más tiempo pasamos cuando trabajamos es en nuestro editor de código favorito, en mi caso es Visual Studio Code. Como pasamos tanto tiempo usando los editores es importante sentirse a gusto y sacar el máximo potencial posible a estos, por eso hoy voy a explicar cuál es la configuración que tengo en VSCode.

## Paquete de iconos

Para los paquetes de iconos tengo instalada la extension [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme). Como se puede observar en la foto de abajo este paquete de iconos proporciona una gran variedad de iconos bonitos y limpios, para la mayoría de lenguajes y para carpetas con nombres de uso común.

<div style="display: flex; justify-content: center">
  ![imagen de icon packs](/mi-configuracion-de-VSCode/icon_pack.png)
</div>

## Tema de VSCode

Desde hace bastante tiempo mi tema favorito es One Dark Pro. Para activar el tema pulsamos `en el engranaje de abajo a la izquierda` -> hacemos clic en `color theme` -> elegimos `One Dark Pro`.

## Fuentes

En mi caso uso [Fira Code](https://github.com/tonsky/FiraCode) una fuente con ligaduras, esto permite unir varios caracteres para crear uno nuevo más visual. Abajo hay un ejemplo con todas las ligaduras que trae.

<div style="display: flex; justify-content: center">
  <div style="max-width: 70%">
    ![imagen de ligaduras](https://github.com/tonsky/FiraCode/blob/master/extras/ligatures.png?raw=true)
  </div>
</div>

La fuente se puede descargar desde el siguiente [enlace](https://github.com/tonsky/FiraCode/releases).

## Extensiones para el desarrollo web

Gracias a la comunidad VSCode mejora día a día mediante el uso de extensiones. Las extensiones pueden añadir funcionalidades al editor, resaltar código para ciertos lenguajes, añadir comandos, añadir snippets y muchos más!! 

A continuación dejo una lista de las extensiones más útiles que uso.

* [advanced-new-file](https://marketplace.visualstudio.com/items?itemName=patbenatar.advanced-new-file): Sirve para crear archivos de manera más cómoda con el comando `Advanced New File.`
* [AREPL for python](https://marketplace.visualstudio.com/items?itemName=almenon.arepl): Permite ejecutar código sin tener que ejecutar comandos en Python.
* [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag) Cierra automáticamente una etiqueta en HTML.
* [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag): Permite cambiar la etiqueta de inicio y cierre con cambiar uno solo en HTML.
* [Babel JavaScript](https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel): Añade highlight para JavaScript.
* [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments): Permite añadir colores a los comentarios del código.
* [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight): Resalta los colores.
* [CSS Flexbox Cheatsheet](https://marketplace.visualstudio.com/items?itemName=dzhavat.css-flexbox-cheatsheet): Con el comando `Open CSS Flexbox Cheatsheet` se abre un cheatsheet de flexbox.
* [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv): Resalta la sintaxis de .env
* [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens): Resalta los errores mientras escribes de una manera vistosa.
* [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets): Snnipets.
* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): Linter para javascript con varias configuraciones que se le pueden hacer con distintas reglas y para arreglar automáticamente varios errores.
* [File Utils](https://marketplace.visualstudio.com/items?itemName=sleistner.vscode-fileutils): Da mucho comandos útiles para mover, copiar, renombrar... archivos.
* [filesize](https://marketplace.visualstudio.com/items?itemName=mkxml.vscode-filesize): Muestra en la barra de abajo el tamaño del archivo actual.
* [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens): Añade funcionalidades a git.
* [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot): Copilot de GitHub.
* [HTML Snippets](https://marketplace.visualstudio.com/items?itemName=abusaidm.html-snippets): Snippets de HTML.
* [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost): Muestra el tamaño de la importaciones realizadas.
* [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets): Snippets de JS ES6.
* [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer): Siempre que se tenga abierto un archivo HTML se puede abrir un servidor pulsando el botón de Live Server de la barra de abajo.
* [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare): Permite trabajar de forma colaborativa con más gente.
* [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one): Utilidades varias. Con shortcuts y con comandos para pasar a PDF, HTML...
* [One Dark Pro](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme): Un tema en específico. De mis favoritos.
* [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense): Da recomendaciones para las rutas de los archivos.
* [Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager): Permite guardar varios proyectos con acceso rápido con un nuevo icono en la izquierda.
* [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets): Snippets de React.
* [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree): SSe añade un icono a la izquierda que te indica los sitios donde has dejado TODO's, u otras etiquetas personalizables, en el código.
* [Version Lens](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens): Te indica las versiones de los paquetes npm y si hay actualizaciones.

## Configuración

Hay una infinidad de opciones que se pueden cambiar en VSCode, además de que también se puede cambiar la configuración de las extensiones. Para cambiar la configuración de forma rápida podemos acceder a un json con toda la personalización del editor usando `ctrl + ,` y haciendo clic en <img style="display: initial !important; margin: 0 !important;" src="/assets/mi-configuracion-de-VSCode/confi.png" />. A continuación está la configuración que tengo para VSCode.

```json
{
    "editor.cursorSmoothCaretAnimation": true, // efecto de animación en el cursor
    "editor.tabSize": 2, // tamaño del tab de 2 espacios
    "editor.minimap.renderCharacters": false, // hace el minimapa de la derecha más limpio
    "editor.fontFamily": "Fira Code", // fira code como fuente
    "editor.fontLigatures": true, // activamos las ligaduras de la fuente
    "workbench.iconTheme": "material-icon-theme", // iconpack
    "editor.wordWrap": "on", // salto de líneas VISUAL automático
    "workbench.colorTheme": "One Dark Pro", // tema
    "editor.autoClosingBrackets": "always", // cerrar automáticamente {}, [] y ()
    "editor.guides.bracketPairs": true, // muestra las llaves que están relacionadas
    "editor.bracketPairColorization.enabled": true, // añade colores a los pares de {}, [] y ()
    "terminal.integrated.autoReplies": { // respuestas automáticas en el terminal a ciertos mensajes
       "¿Desea terminar el trabajo por lotes (S/N)? ": "S\r"
    },
    "oneDarkPro.bold": true, // da formato de negrita a ciertas palabras
    "oneDarkPro.vivid": true, // da formato de itálica a ciertas palabras
    "files.autoSave": "afterDelay" // guarda el archivo automáticamente después de un pequeño delay
}
```