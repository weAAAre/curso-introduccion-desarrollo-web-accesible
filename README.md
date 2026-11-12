# Introducción al desarrollo web accesible

[![CI](https://github.com/weAAAre/curso-introduccion-desarrollo-web-accesible/actions/workflows/ci.yml/badge.svg)](https://github.com/weAAAre/curso-introduccion-desarrollo-web-accesible/actions/workflows/ci.yml) [![Licencia: MIT](https://img.shields.io/badge/licencia-MIT-informational.svg)](./LICENSE)

Ejemplos del curso **Introducción al desarrollo web accesible** de [weAAAre](https://weaaare.com), con Jesús González Álvarez.

Los errores de accesibilidad más frecuentes en la web y cómo resolverlos con HTML y CSS.

**Ábrelos en <https://weaaare.github.io/curso-introduccion-desarrollo-web-accesible/>.**

Cada ejemplo es la web de una empresa ficticia que con ratón funciona bien y esconde barreras de accesibilidad a propósito, más la misma web ya arreglada. Puedes abrirlas, probarlas con teclado o con lector de pantalla y comparar el código de las dos versiones.

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

| Dirección             | Qué ves                                           |
| --------------------- | ------------------------------------------------- |
| `/`                   | La lista de webs de ejemplo                       |
| `/<ejemplo>/`         | La web con sus barreras, sin nada más en pantalla |
| `/<ejemplo>/arreglo/` | La misma web ya arreglada                         |

Las webs no llevan ningún elemento del curso: lo que inspecciones en el DOM, en el árbol de accesibilidad o con el tabulador es solo de la web.

## Cómo está hecho cada ejemplo

Cada carpeta de `src/examples/` contiene:

- `Página.tsx`: el componente. Recibe `fixed`: con `false` dibuja la barrera y con `true`, el arreglo.
- `página.css`: sus estilos. Las barreras que dependen del CSS están al final, bajo la clase `--barrier`.
- `Página.example.ts`: la clave (lección, pasos para probarlo y cada cambio con su código antes y después). No se muestra en la web.
- `Página.test.tsx`: las pruebas de las dos versiones.

`src/examples/registry.ts` registra los ejemplos en el orden del curso.

## Estilo de los ejemplos

Cada ejemplo es la web de una empresa ficticia, con su marca, sus colores y contenido verosímil, como las webs de práctica de [retos.weaaare.com](https://retos.weaaare.com). Con ratón todo funciona; fuera de las barreras que enseña la lección, todo es accesible. No llevan dependencias ni recursos externos, y nada se mueve solo salvo en la lección de movimiento.

La portada (`src/app/`) sigue la de retos.weaaare.com y usa los tokens de weAAAre de `src/brand/tokens.css`. La web no se indexa en buscadores, porque contiene barreras a propósito.

## Comprobaciones

```bash
pnpm check
```

Ejecuta las pruebas (Vitest, Testing Library y axe), el lint (Biome) y la compilación. Las pruebas automáticas no sustituyen la revisión con teclado, lector de pantalla y zoom.

## Contribuir

Las reglas de los ejemplos y los pasos para añadir uno están en [CONTRIBUTING.md](./CONTRIBUTING.md).

## Licencia

El código se publica con licencia [MIT](./LICENSE). El nombre y el logotipo de weAAAre son marca de weAAAre y no forman parte de esa licencia. Las tipografías (Fraunces y Atkinson Hyperlegible) se distribuyen con la SIL Open Font License.
