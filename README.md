# Introducción al desarrollo web accesible

Ejemplos del curso **Introducción al desarrollo web accesible** de [weAAAre](https://weaaare.com), con Jesús González Álvarez.

Los errores de accesibilidad más frecuentes en la web y cómo resolverlos con HTML y CSS.

Cada ejemplo es una página pequeña con una barrera de accesibilidad y la misma página con el arreglo. Puedes abrirlas, probarlas con teclado o con lector de pantalla y comparar el código de las dos versiones.

## Ejemplos

| Lección | Página                                        | Código                                                                       | Dirección             |
| ------- | --------------------------------------------- | ---------------------------------------------------------------------------- | --------------------- |
| 2.1     | Ficha de producto de una tienda online        | [`src/examples/2.1-tienda-online`](./src/examples/2.1-tienda-online)         | `/tienda-online/`     |
| 2.2     | Elegir sesión en la web de un cine            | [`src/examples/2.2-cine`](./src/examples/2.2-cine)                           | `/cine/`              |
| 3.1     | Receta en un blog de cocina                   | [`src/examples/3.1-receta`](./src/examples/3.1-receta)                       | `/receta/`            |
| 3.2     | Noticia en un periódico local                 | [`src/examples/3.2-noticia`](./src/examples/3.2-noticia)                     | `/noticia/`           |
| 4.1     | Acceso a la cuenta de una biblioteca          | [`src/examples/4.1-biblioteca`](./src/examples/4.1-biblioteca)               | `/biblioteca/`        |
| 4.2     | Próximas salidas de una línea de autobús      | [`src/examples/4.2-horarios`](./src/examples/4.2-horarios)                   | `/horarios/`          |
| 4.3     | Portada de un festival de música              | [`src/examples/4.3-festival`](./src/examples/4.3-festival)                   | `/festival/`          |
| 5.1     | Exposición temporal en la web de un museo     | [`src/examples/5.1-museo`](./src/examples/5.1-museo)                         | `/museo/`             |
| 5.2     | Formulario de cita en un taller de bicicletas | [`src/examples/5.2-taller-bicicletas`](./src/examples/5.2-taller-bicicletas) | `/taller-bicicletas/` |

## Cómo usarlo

Necesitas Node.js 22.12 o posterior y pnpm 10.

```bash
pnpm install
pnpm dev
```

| Dirección             | Qué ves                                                    |
| --------------------- | ---------------------------------------------------------- |
| `/`                   | Todos los ejemplos, por módulo                             |
| `/<ejemplo>/`         | La ficha del ejemplo: qué probar y qué cambia en el código |
| `/<ejemplo>/barrera/` | La página con la barrera, sin nada más en pantalla         |
| `/<ejemplo>/arreglo/` | La página con el arreglo, sin nada más en pantalla         |

Las páginas con la barrera y con el arreglo no llevan ningún elemento del curso: lo que inspecciones en el DOM, en el árbol de accesibilidad o con el tabulador es solo de la página.

## Cómo está hecho cada ejemplo

Cada carpeta de `src/examples/` contiene:

- `Página.tsx`: el componente. Recibe `fixed`: con `false` dibuja la barrera y con `true`, el arreglo.
- `página.css`: sus estilos. Las barreras que dependen del CSS están al final, bajo la clase `--barrier`.
- `Página.example.ts`: la ficha (lección, pasos para probarlo y cada cambio con su código antes y después).
- `Página.test.tsx`: las pruebas de las dos versiones.

`src/examples/registry.ts` registra los ejemplos en el orden del curso.

## Estilo de los ejemplos

Todos los ejemplos comparten el lenguaje visual de weAAAre para que nada distraiga de lo que enseñan:

- Papel blanco, tinta negra y bordes de 2 px. Sin colores de marca propios en cada página.
- Sombra desplazada solo en lo que se puede pulsar (botones y tarjetas enlazables).
- Ámbar solo al pasar el puntero y en el foco.
- Hay color únicamente cuando la lección trata de él (estados, contraste) y en las ilustraciones que hacen de foto.
- Nada se mueve solo, salvo en la lección de movimiento.

Los tokens están en `src/brand/tokens.css` y la base común en `src/examples/example-base.css`.

## Comprobaciones

```bash
pnpm check
```

Ejecuta las pruebas (Vitest, Testing Library y axe), el lint (Biome) y la compilación. Las pruebas automáticas no sustituyen la revisión con teclado, lector de pantalla y zoom.
