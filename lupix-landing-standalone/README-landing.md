# Landing page de Lupix — proyecto independiente

Este ya es un proyecto de Next.js completo y ejecutable por sí solo (trae
`package.json`, `tsconfig.json`, `next.config.ts`, etc.) — no depende del
repo `encuentraelobjeto`. Puedes subirlo tal cual a un repositorio de GitHub
nuevo.

## 1. Correrlo en local

Necesitas tener [Node.js](https://nodejs.org) instalado (versión 20+
recomendada). Luego, dentro de esta misma carpeta:

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`. Vas a ver la landing, pero con las imágenes del
hero y de "cómo funciona" rotas hasta que agregues las 2 imágenes del paso 3.

## 2. Estructura

```
app/
  layout.tsx        → tipografías de marca (Poppins + Nunito) y metadata
  globals.css        → colores de marca para Tailwind v4
  page.tsx           → arma la landing completa
  icon.png           → favicon automático (convención de Next.js)
  components/        → Header, Hero, Benefits, CtaBanner, SocialProof,
                        Explainer, Faq, Footer, icons.tsx
public/
  logo/               → logo real, extraído de tu manual de marca
  images/             → aquí van las 2 imágenes que generas tú (ver abajo)
```

## 3. Imágenes

`public/images/hero-lupix.png` y `public/images/lupix-explainer.png` ya
vienen incluidas (ilustraciones vectoriales hechas a partir de tu manual de
marca) — no tienes que generar nada para que la landing funcione.

Si más adelante quieres reemplazarlas por otras (por ejemplo hechas por un
diseñador o con otro generador de imágenes), usa el **prompt base** de abajo
antes de cada prompt específico, para mantener la consistencia visual.

### Prompt base (pégalo siempre primero)

```
Ilustración vectorial plana (flat vector illustration), estilo de app moderna
y amigable, trazos gruesos y redondeados, sin sombras 3D ni texturas
realistas. Paleta de color limitada: violeta #7C3AED como color dominante,
blanco #FFFFFF como fondo o espacios negativos, con acentos puntuales de
amarillo #FFC93C, coral #FF6B6B y verde menta #2EC4B6 (usar como máximo 2 de
estos acentos por imagen). El personaje central es "Lupix": una lupa
antropomorfizada con cara sonriente y minimalista (dos puntos como ojos, una
sonrisa curva simple), aro exterior en degradado violeta con borde teal, y
mango en degradado naranja-amarillo — igual a este ícono de referencia:
[adjunta o describe public/logo/lupix-icon.png]. Tono visual: curioso,
cercano, ágil y optimista — nunca infantil en exceso ni corporativo.
Composición limpia, con espacio negativo generoso, sin texto ni letras dentro
de la imagen, sin logotipos ni marcas de agua. Fondo blanco liso o
transparente.
```

### Imagen 1 — Hero → guarda como `public/images/hero-lupix.png`

```
Escena: la mascota Lupix flotando junto a una tarjeta o tableta que muestra
líneas de texto abstractas (representadas como barras redondeadas gris
claro). Una pequeña "píldora" o chip redondeado flota sobre el texto,
representando la palabra objetivo que hay que encontrar (sin letras reales
dentro, solo la forma del chip). Una de las líneas de texto está resaltada
en amarillo, como el momento exacto en que se encontró esa palabra, y junto
a ella un pequeño contador con un signo "+" representa los puntos ganados.
Un destello (sparkle) amarillo aparece junto al ojo de Lupix, transmitiendo
un logro relajado, sin sensación de urgencia ni reloj. Ángulo isométrico
suave. Formato cuadrado o vertical.
```

### Imagen 2 — Explicación → guarda como `public/images/lupix-explainer.png`

```
Escena: la mascota Lupix guiando paso a paso, señalando con su mango una
fila de tres tarjetas simples, redondeadas y numeradas (sin texto, solo
formas), como un mini tutorial. La primera tarjeta con un ícono abstracto de
documento (el texto curado), la segunda con un ícono abstracto de una
palabra u objetivo (la palabra por encontrar), la tercera con una marca de
coincidencia resaltada en verde menta junto a una pequeña estrella o "+"
(los puntos ganados). Ningún elemento sugiere un reloj o cronómetro.
Composición horizontal, Lupix a la izquierda mirando hacia las tarjetas a la
derecha, transmitiendo cercanía y calma, no urgencia.
```

## 4. Sobre la sección "Social Proof"

Por ahora esa sección usa cifras de ejemplo (marcadas con un comentario
`NOTA` en `app/components/SocialProof.tsx`) porque Lupix todavía no tiene
testimonios o métricas reales que mostrar. Antes de publicar, reemplázalas
por datos reales, o quítalas hasta que tengan usuarios que citar.

## 5. Subir a un repositorio de GitHub nuevo

Desde dentro de esta misma carpeta:

```bash
git init
git add .
git commit -m "Landing page de Lupix"
```

Luego, en GitHub, crea un repositorio nuevo y vacío (sin README, sin
.gitignore — para que no choque con lo que ya tienes), copia la URL que te da
y corre:

```bash
git branch -M main
git remote add origin <URL_DE_TU_REPO_NUEVO>
git push -u origin main
```

## 6. Desplegar en Vercel

1. Entra a [vercel.com/new](https://vercel.com/new) e importa ese repositorio
   nuevo de GitHub (autoriza acceso si es la primera vez).
2. Vercel detecta que es Next.js automáticamente — no toques nada en
   "Build & Output Settings".
3. Dale a **Deploy**. Cada push posterior a `main` vuelve a desplegar solo.
