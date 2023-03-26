---
author: Javier Ortuño Roig
pubDatetime: 2022-08-24
title: Propiedad className VS classList API
postSlug: propiedad-className-VS-classList-API
featured: false
draft: false
tags:
  - JavaScript
description:
  En este post compararemos las distintas posibilidades que nos ofrecen className y classList para manejar los estilos de un elemento.
---

Aunque en los últimos años se han extendido diversas librerías y framework que facilitan el manejo del comportamiento y estilos de nuestras web, aún son mucho los proyectos que no usan alguna de estas tecnologías o personas que deciden crear su página web con JavaScript vanilla. En este post **vamos a comparar dos formas de manejar los estilos de un elemento** desde el propio JavaScript.

Imaginad que tenemos un **div** que contiene dos estilos:

* La **clase rounded** indica si el elemento tiene bordes redondeados o no.
* La **clase light-theme** indica el tema del componente. Puede ser light-theme y dark-theme.

El HTML tendría el siguiente aspecto.

```html
<div class="rounded light-theme"></div>
```

## className

El **manejo de los estilos** usando [className](https://developer.mozilla.org/es/docs/Web/API/Element/className) es bastante **limitado** y nos supondrá una carga de trabajo para poder simular algunas funciones básicas que podrán facilitarnos el trabajo a largo plazo.

```javascript
const div = document.querySelector('div')

const estilos = div.className
console.log(estilos) // 'rounded light-theme'

// Podemos cambiar los estilos del elemento sustituyendo un string por otro
div.className = 'rounded dark-theme'

// Para manejar los estilos más fácilmente primero los convertiremos en una lista
let listaEstilos = estilos.split(" ")
console.log(listaEstilos) // ['rounded', 'light-theme']

// Length
console.log(listaEstilos.length) // 2

// Obtener una clase en específico
console.log(listaEstilos[1]) // light-theme

// Añadir una clase
listaEstilos.push("transparent")
console.log(listaEstilos) // ['rounded', 'light-theme', 'transparent']

// Eliminar una clase
listaEstilos.pop()
console.log(listaEstilos) // ['rounded', 'light-theme']

// Comprobar si tiene una clase en específico
console.log(listaEstilos.includes('light-theme')) // true

// Comprobar si una clase está, si está se quita, sino, se añade
if (listaEstilos.includes('rounded')) listaEstilos = listaEstilos.filter( estilo => estilo != "rounded")
else listaEstilos.push("rounded")
console.log(listaEstilos) // ['light-theme']

if (listaEstilos.includes('rounded')) listaEstilos = listaEstilos.filter( estilo => estilo != "rounded")
else listaEstilos.push("rounded")
console.log(listaEstilos) // ['light-theme', 'rounded']

// Después de acabar con los cambios que se quieran realizar se ha de modificar de nuevo el elemento
div.className = listaEstilos.join(' ')
```

Como se puede observar arriba el manejo de los estilos no es tan directo como podría ser ya que nos obliga a hacer una serie de transformaciones que, aunque fáciles, se pueden hacer un poco pesada.

## classList

A parte de manejar de forma directa un string con los estilos de los elementos, también tenemos la posibilidad de usar la API de [classList](https://developer.mozilla.org/es/docs/Web/API/Element/classList). Con esta API podremos manejar los estilos como una lista y nos permite hacer de una forma fácil y rápida todos los métodos implementados en el código de className. Cabe destacar que no nos devuelve un array, sino un [DOMTokenList](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList) el cual es bastante parecido a un array, pero implementa una serie de métodos para manejar los estilos de nuestro elemento.

```javascript
const div = document.querySelector('div')
const classList = div.classList
console.log(classList) // DOMTokenList(2) ['rounded', 'light-theme', value: 'rounded light-theme']

console.log(classList.length) // 2
console.log(classList.item(1)) // light-theme

classList.add('transparent')
console.log(classList) // DOMTokenList(3) ['rounded', 'light-theme', 'transparent', value: 'rounded light-theme transparent']

classList.remove('transparent')
console.log(classList) // DOMTokenList(2) ['rounded', 'light-theme', value: 'rounded light-theme']

console.log(classList.contains("rounded")) // true

classList.toggle("rounded")
console.log(classList) // DOMTokenList ['light-theme', value: 'light-theme']

classList.toggle("rounded")
console.log(classList) // DOMTokenList(2) ['light-theme', 'rounded', value: 'light-theme rounded']
```

## Conclusiones

Después de ver los métodos que nos ofrece la classList API y comparándolo con el manejo de las clases usando className podemos sacar en conclusión que por lo general es mejor usar classList en vez de className ya que presentas varas ventajas como pueden ser.

* Presenta una interfaz con una serie de **funciones bastante útiles** para manejar las clases.
* Es **más rápido y sencillo** de usar.
