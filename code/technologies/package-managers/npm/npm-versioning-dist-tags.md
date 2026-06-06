# 📘 El símbolo @ en NPM

## 🧠 ¿Qué es @?

Cuando ves un `@` en npm, normalmente significa:

> "Quiero algo específico de este paquete."

Ese "algo específico" puede ser:

- una versión concreta
- una etiqueta (tag)
- un scope (namespace)

Por eso el mismo símbolo aparece en varios contextos.

---

## 🎯 ¿Por qué existe @?

Imagina que existe un paquete:

```bash
npm install react
```

npm normalmente instalará la versión marcada como:

```text
latest
```

Pero muchas veces eso no es suficiente.

Tal vez quieres:

- una versión exacta
- una beta
- una release candidate
- un paquete perteneciente a una organización

Para eso existe `@`.

---

# 📦 Caso 1: Instalar una versión específica

## Ejemplo

```bash
npm install react@18.2.0
```

### Traducción humana

> Quiero exactamente la versión 18.2.0

### npm instalará

- `18.2.0`

### npm NO instalará

- `18.2.1`
- `19.0.0`

### Cuándo usarlo

Cuando necesitas reproducibilidad exacta.

Ejemplos:

- debugging
- proyectos legacy
- compatibilidad específica

---

# 📦 Caso 2: Instalar la versión estable

## Ejemplo

```bash
npm install react@latest
```

### Traducción humana

> Quiero la versión estable recomendada

### ¿Qué significa latest?

No significa:

> La más nueva

Significa:

> La estable recomendada por el mantenedor

Por ejemplo:

| Versión | Estado |
|----------|----------|
| 19.0.0-alpha.1 | experimental |
| 18.5.0-beta.2 | beta |
| 18.4.1 | estable |

El tag:

```text
latest
```

probablemente apuntará a:

```text
18.4.1
```

### Uso típico

Producción.

---

# 📦 Caso 3: Instalar una Beta

## Ejemplo

```bash
npm install react@beta
```

### Traducción humana

> Quiero probar funciones nuevas antes de que salgan oficialmente

### Características

✅ funcionalidades nuevas

✅ feedback temprano

### Riesgos

❌ bugs

❌ cambios frecuentes

❌ APIs inestables

### Uso típico

Testing.

---

# 📦 Caso 4: Instalar una Alpha

## Ejemplo

```bash
npm install react@alpha
```

### Traducción humana

> Quiero probar algo muy experimental

### Características

✅ acceso anticipado

### Riesgos

❌ puede romperse

❌ puede desaparecer

❌ APIs incompletas

### Uso típico

Desarrollo experimental.

---

# 📦 Caso 5: Instalar una Release Candidate (RC)

## Ejemplo

```bash
npm install react@rc
```

### Traducción humana

> Quiero probar la versión casi final

### ¿Qué es una RC?

RC significa:

```text
Release Candidate
```

Es una versión que:

- ya está terminada
- pero sigue en pruebas

### Uso típico

Validación antes del lanzamiento oficial.

---

# 📦 Caso 6: Instalar la próxima versión importante

## Ejemplo

```bash
npm install react@next
```

### Traducción humana

> Quiero la próxima generación del paquete

### Ejemplo

Supongamos:

```text
latest → 18.4.1
next   → 19.0.0-beta.3
```

### Uso típico

Prepararse para futuras migraciones.

---

# 🏷️ ¿Qué son los Dist-Tags?

Todos estos:

- latest
- beta
- alpha
- next
- rc

se llaman:

```text
Dist-Tags
```

(dist = distribution)

### ¿Qué hacen?

Son alias.

### Ejemplo

| Tag | Apunta a |
|------|------|
| latest | 18.4.1 |
| beta | 19.0.0-beta.4 |
| rc | 19.0.0-rc.1 |
| next | 20.0.0-alpha.3 |

Entonces:

```bash
npm install react@beta
```

realmente significa:

```bash
npm install react@19.0.0-beta.4
```

---

# 📦 Caso 7: Scopes

Aquí `@` significa algo completamente distinto.

### Ejemplos

```text
@angular/core
@nestjs/common
@types/node
```

### Traducción humana

> Este paquete pertenece a una organización o grupo

### Ejemplo

```text
@angular/core
│
└── organización Angular
```

```text
@nestjs/common
│
└── organización NestJS
```

```text
@types/node
│
└── organización DefinitelyTyped
```

> [!IMPORTANT]
> Aquí:
>
> `@angular`
>
> NO es una versión.
>
> NO es un tag.
>
> NO es latest.
>
> NO es beta.
>
> Simplemente es:
>
> el nombre del propietario.

---

# 🎯 Cómo recordarlo para siempre

Piensa que `@` significa:

> Quiero algo específico

Y luego mira qué viene después.

---

## Si viene un número

```text
react@18.2.0
```

Significa:

> Versión específica

---

## Si viene una palabra

```text
react@latest
react@beta
react@next
```

Significa:

> Dist-tag

---

## Si está al inicio

```text
@angular/core
```

Significa:

> Scope (organización)

---

# 🏆 Regla mental rápida

| Lo que ves | Significa |
|------------|------------|
| react@18.2.0 | Quiero esa versión exacta |
| react@latest | Quiero la versión estable |
| react@beta | Quiero la beta |
| react@alpha | Quiero la experimental |
| react@rc | Quiero la casi final |
| react@next | Quiero la próxima generación |
| @angular/core | Paquete perteneciente a Angular |
| @nestjs/common | Paquete perteneciente a NestJS |
| @types/node | Paquete perteneciente a DefinitelyTyped |

---

# 🧠 La idea clave

Cuando veas un `@` en npm, pregúntate:

> ¿Está indicando una versión, una etiqueta o un propietario?

Porque prácticamente todos los usos de `@` en npm se reducen a esas tres categorías:

| Categoría | Ejemplo |
|------------|------------|
| 📦 Versión | `react@18.2.0` |
| 🏷️ Tag | `react@latest` |
| 🏢 Scope | `@angular/core` |


# 📦 TABLA COMPLETA DEL SÍMBOLO `@` EN NPM

| Uso | Ejemplo | ¿Qué significa? | Traducción humana | Cuándo usarlo | 🧠 Categoría |
|------|---------|-----------------|------------------|---------------|-------------|
| 🔒 Versión exacta | `react@18.2.0` | Instala exactamente esa versión | "Quiero esa versión y ninguna otra" | Compatibilidad específica, debugging, proyectos legacy | 📦 Versión |
| 🟢 Estable | `react@latest` | Instala la versión estable recomendada | "Quiero la versión segura para producción" | Producción, proyectos normales | 🏷️ Dist-Tag |
| 🟡 Beta | `react@beta` | Instala una versión en pruebas | "Quiero probar novedades antes del lanzamiento oficial" | Testing, feedback temprano | 🏷️ Dist-Tag |
| 🟠 Alpha | `react@alpha` | Instala una versión experimental | "Quiero probar algo que aún está en desarrollo" | Experimentación | 🏷️ Dist-Tag |
| 🔵 RC | `react@rc` | Instala una Release Candidate | "Quiero probar la versión casi terminada" | Validación previa al lanzamiento | 🏷️ Dist-Tag |
| 🚀 Next | `react@next` | Instala la próxima generación del paquete | "Quiero prepararme para futuras versiones" | Migraciones futuras | 🏷️ Dist-Tag |
| ⚙️ Dev | `package@dev` | Versión de desarrollo (si existe) | "Quiero la versión que usan los desarrolladores" | Desarrollo interno | 🏷️ Dist-Tag |
| 🧪 Canary | `package@canary` | Builds automáticas muy recientes | "Quiero lo último de lo último" | Testing avanzado | 🏷️ Dist-Tag |
| 🔥 Experimental | `package@experimental` | Funciones experimentales | "Quiero probar características no finalizadas" | Investigación | 🏷️ Dist-Tag |
| 📅 Nightly | `package@nightly` | Build generada cada noche | "Quiero la versión más reciente disponible" | QA y pruebas continuas | 🏷️ Dist-Tag |
| 🏢 Scope Angular | `@angular/core` | Paquete oficial de Angular | "Este paquete pertenece a Angular" | Desarrollo Angular | 🏢 Scope |
| 🏢 Scope NestJS | `@nestjs/common` | Paquete oficial de NestJS | "Este paquete pertenece a NestJS" | Desarrollo NestJS | 🏢 Scope |
| 🏢 Scope Types | `@types/node` | Tipos TypeScript para Node.js | "Este paquete pertenece a DefinitelyTyped" | TypeScript | 🏢 Scope |
| 🏢 Scope Empresa | `@empresa/utils` | Paquete privado de una organización | "Este paquete pertenece a mi empresa" | Monorepos, empresas | 🏢 Scope |
| 🏢 Scope Usuario | `@juan/lib` | Paquete publicado por una cuenta | "Este paquete pertenece a Juan" | Open Source | 🏢 Scope |

---

# 🏷️ DIST-TAGS MÁS COMUNES

| Tag | Qué representa | Estabilidad |
|------|---------------|-------------|
| `latest` | Última versión estable | 🟢 Muy alta |
| `rc` | Release Candidate | 🔵 Alta |
| `beta` | Versión en pruebas | 🟡 Media |
| `alpha` | Versión experimental | 🟠 Baja |
| `next` | Próxima gran versión | 🟡 Media |
| `dev` | Desarrollo activo | 🔴 Baja |
| `canary` | Builds automáticas recientes | 🔴 Muy baja |
| `experimental` | Características experimentales | 🔴 Muy baja |
| `nightly` | Build generada cada noche | 🔴 Muy baja |

---

# 🎯 ¿CÓMO SABER QUÉ SIGNIFICA `@`?

| Lo que ves | Significa |
|------------|-----------|
| `react@18.2.0` | 📦 Quiero una versión específica |
| `react@latest` | 🏷️ Quiero la versión estable |
| `react@beta` | 🏷️ Quiero la beta |
| `react@alpha` | 🏷️ Quiero la experimental |
| `react@rc` | 🏷️ Quiero la casi final |
| `react@next` | 🏷️ Quiero la próxima versión |
| `@angular/core` | 🏢 Paquete perteneciente a Angular |
| `@nestjs/common` | 🏢 Paquete perteneciente a NestJS |
| `@types/node` | 🏢 Paquete perteneciente a DefinitelyTyped |
| `@empresa/utils` | 🏢 Paquete perteneciente a una organización |

---

# 🚦 NIVEL DE RIESGO

| Nivel | Ejemplos |
|--------|----------|
| 🔒 Máxima estabilidad | `react@18.2.0` |
| 🟢 Producción recomendada | `react@latest` |
| 🔵 Casi estable | `react@rc` |
| 🟡 Riesgo moderado | `react@beta`, `react@next` |
| 🟠 Riesgo alto | `react@alpha` |
| 🔴 Muy inestable | `react@dev`, `react@canary`, `react@nightly`, `react@experimental` |

---

# 🧠 REGLA MENTAL RÁPIDA

| Si `@` está... | Entonces significa... |
|---------------|----------------------|
| En medio + número | 📦 Versión (`react@18.2.0`) |
| En medio + palabra | 🏷️ Dist-Tag (`react@latest`) |
| Al inicio del paquete | 🏢 Scope (`@angular/core`) |

---

# 📦 EJEMPLOS REALES DE INSTALACIÓN

| Comando | Resultado |
|----------|-----------|
| `npm install react` | Instala la versión marcada como `latest` |
| `npm install react@18.2.0` | Instala exactamente la versión 18.2.0 |
| `npm install react@beta` | Instala la beta más reciente |
| `npm install react@next` | Instala la próxima versión principal |
| `npm install @types/node` | Instala los tipos de Node.js |
| `npm install @angular/core` | Instala el paquete principal de Angular |
| `npm install @nestjs/common` | Instala utilidades base de NestJS |

---

# ⚡ RESUMEN VISUAL

| Forma | Tipo | Ejemplo |
|---------|------|----------|
| `paquete@numero` | 📦 Versión | `react@18.2.0` |
| `paquete@tag` | 🏷️ Dist-Tag | `react@latest` |
| `@scope/paquete` | 🏢 Scope | `@angular/core` |

💡 **Idea para recordar**
El símbolo `@` siempre significa:
**"quiero algo específico"**
- 📦 Si lo específico es un número → versión.
- 🏷️ Si lo específico es una palabra → tag.
- 🏢 Si aparece al inicio → propietario, usuario u organización.