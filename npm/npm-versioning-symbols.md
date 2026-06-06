# 📘 NPM — VERSIONADO Y RANGOS DE VERSIONES (TEORÍA COMPLETA)

## 🧠 Introducción

En npm, las versiones no se eligen solo como un número fijo.  
Se usan reglas de versionado que le dicen a npm qué actualizaciones puede instalar automáticamente.

👉 Esto existe para resolver un problema real:

- Si actualizas una librería, puede romper tu proyecto  
- Pero si nunca actualizas, te quedas con bugs y problemas de seguridad

📌 Entonces npm te deja controlar el equilibrio entre:

- estabilidad  
- actualización automática

---

# 📘 Versiones y Rangos en NPM

## 🧠 ¿Qué problema intenta resolver npm?

Imagina que hoy instalas una librería.

```json
{
  "dependencies": {
    "rxjs": "7.8.0"
  }
}
```

Todo funciona perfecto.

Pero mañana el autor publica:

- `7.8.1` → Corrigiendo bugs.
- `7.9.0` → Con nuevas funcionalidades.
- `8.0.0` → Rompiendo compatibilidad.

Entonces surge una pregunta:

> ¿Qué actualizaciones quieres aceptar automáticamente?

Porque tal vez:

✅ Quieres recibir correcciones de bugs.

Pero:

❌ No quieres que tu proyecto deje de funcionar.

Para resolver eso existen los **rangos de versiones**.

Los rangos son simplemente reglas que le dicen a npm:

> "Hasta dónde puedes actualizar esta dependencia."

---

# 📦 Antes de los símbolos: Semantic Versioning

Una versión tiene 3 números:

```text
1.2.3
│ │ │
│ │ └─ PATCH
│ └─── MINOR
└───── MAJOR
```

## 🔧 PATCH

`1.2.3 → 1.2.4`

Correcciones de errores.

Ejemplos:

- bug fixes
- mejoras internas
- optimizaciones

No debería romper nada.

---

## ✨ MINOR

`1.2.3 → 1.3.0`

Nuevas funcionalidades.

Ejemplos:

- nuevos métodos
- nuevas opciones
- nuevas APIs

Tampoco debería romper nada.

---

## 💥 MAJOR

`1.2.3 → 2.0.0`

Cambios incompatibles.

Ejemplos:

- eliminar funciones
- cambiar APIs existentes
- modificar comportamiento

Puede romper tu aplicación.

---

# 📦 1. Versión Exacta

```json
"rxjs": "7.8.0"
```

## 🧠 ¿Qué significa?

Significa:

> "Quiero exactamente esta versión y ninguna otra."

### npm podrá instalar

- `7.8.0`

### npm NO podrá instalar

- `7.8.1`
- `7.9.0`
- `8.0.0`

### 🎯 Cuándo usarlo

Cuando necesitas máxima estabilidad.

Ejemplos:

- producción crítica
- software empresarial
- proyectos donde nada debe cambiar

### Ventajas

✅ comportamiento siempre igual

✅ cero sorpresas

### Desventajas

❌ no recibes correcciones

❌ no recibes mejoras

❌ debes actualizar manualmente

---

# 📦 2. Tilde (~)

```json
"rxjs": "~7.8.0"
```

## 🧠 ¿Qué significa?

Significa:

> "Confío en las correcciones de errores, pero no quiero nuevas funcionalidades."

### npm podrá instalar

- `7.8.1`
- `7.8.2`
- `7.8.50`

### npm NO podrá instalar

- `7.9.0`
- `8.0.0`

### Regla mental

```text
~
=
Solo PATCH
```

### Traducción humana

> Arregla cosas, pero no agregues cosas nuevas.

### Cuándo usarlo

Cuando buscas mucha estabilidad.

Ejemplos:

- aplicaciones corporativas
- sistemas internos
- librerías sensibles

---

# 📦 3. Caret (^)

```json
"rxjs": "^7.8.0"
```

## 🧠 ¿Qué significa?

Significa:

> "Acepto correcciones y nuevas funcionalidades mientras no rompan compatibilidad."

### npm podrá instalar

- `7.8.1`
- `7.9.0`
- `7.15.3`

### npm NO podrá instalar

- `8.0.0`

### Regla mental

```text
^
=
PATCH + MINOR
```

### Traducción humana

> Puedes mejorar la librería, pero no me rompas el proyecto.

### Cuándo usarlo

Es el caso más común.

Por eso npm lo usa por defecto.

```bash
npm install rxjs
```

Genera algo parecido a:

```json
"rxjs": "^7.8.0"
```

### Ventajas

✅ recibes mejoras

✅ recibes fixes

✅ mantenimiento automático

### Desventajas

❌ una nueva feature podría cambiar comportamientos

❌ existe un poco más de riesgo que con `~`

---

# 📦 4. Mayor que (>)

```json
">7.8.0"
```

### Significa

Todo lo superior a `7.8.0`

### Permite

- `7.8.1`
- `8.0.0`
- `9.0.0`
- `50.0.0`

### Traducción humana

> No me importa la versión, solo que sea más nueva.

⚠️ Muy poco común en aplicaciones reales.

---

# 📦 5. Menor que (<)

```json
"<8.0.0"
```

### Significa

Todo lo menor a `8.0.0`

### Permite

- `7.9.9`
- `7.8.0`
- `6.0.0`

### No permite

- `8.0.0`
- `9.0.0`

---

# 📦 6. Mayor o igual (>=)

```json
">=7.8.0"
```

### Significa

Desde la `7.8.0` hacia arriba.

### Permite

- `7.8.0`
- `7.9.0`
- `8.0.0`
- `9.0.0`

### Uso típico

Definir versión mínima requerida.

---

# 📦 7. Menor o igual (<=)

```json
"<=8.0.0"
```

### Significa

Hasta la `8.0.0` incluida.

### Permite

- `7.0.0`
- `8.0.0`

### No permite

- `8.0.1`
- `9.0.0`

---

# 📦 8. Rango

```json
"7.8.0 - 7.9.0"
```

### Significa

Cualquier versión entre ambas.

### Permite

- `7.8.0`
- `7.8.5`
- `7.8.9`
- `7.9.0`

### No permite

- `7.7.9`
- `7.9.1`

### Traducción humana

> Quiero únicamente este intervalo.

---

# 📦 9. OR (||)

```json
"<7.0.0 || >=8.0.0"
```

### Significa

Acepto uno u otro rango.

### Permite

- `6.5.0`
- `8.0.0`
- `9.0.0`

### No permite

- `7.0.0`
- `7.5.0`
- `7.9.9`

### Traducción humana

> Acepto A o B.

---

# 📦 10. x (comodín)

```json
"7.x"
```

### Significa

Cualquier versión dentro de la 7.

### Permite

- `7.0.0`
- `7.8.0`
- `7.99.0`

### No permite

- `8.0.0`

### Otro ejemplo

```json
"7.8.x"
```

### Permite

- `7.8.1`
- `7.8.50`

### No permite

- `7.9.0`

---

# 📦 11. * (todo)

```json
"*"
```

### Significa

Instala lo que sea.

### Permite

- `1.0.0`
- `5.0.0`
- `20.0.0`

### Traducción humana

> No tengo ninguna restricción.

⚠️ Prácticamente nunca se recomienda en producción.

# 📦 TABLA DE SÍMBOLOS DE VERSIONES EN NPM

| Símbolo | Ejemplo | Traducción humana | Permite | NO permite | Uso típico | Nivel |
|----------|----------|------------------|----------|------------|------------|--------|
| *(sin símbolo)* | `1.2.3` | 🔒 "Quiero exactamente esta versión" | Solo `1.2.3` | Cualquier otra versión | Producción crítica | 🔒 Máximo control |
| `^` (caret) | `^1.2.3` | 🟢 "Acepto mejoras compatibles" | Patch + Minor | Major | Dependencias normales | 🟢 Recomendado |
| `~` (tilde) | `~1.2.3` | 🟡 "Solo corrige bugs" | Patch | Minor + Major | Máxima estabilidad | 🟡 Bajo riesgo |
| `>` | `>1.2.3` | 🔵 "Cualquier versión más nueva" | Todo lo superior | Igual o menor | Restricciones mínimas | 🔵 Flexible |
| `<` | `<1.2.3` | 🔵 "Cualquier versión más antigua" | Todo lo inferior | Igual o mayor | Compatibilidad antigua | 🔵 Flexible |
| `>=` | `>=1.2.3` | 🔵 "Desde esta versión hacia arriba" | Igual o superior | Menor | Versión mínima requerida | 🔵 Flexible |
| `<=` | `<=1.2.3` | 🔵 "Hasta esta versión" | Igual o inferior | Mayor | Límites máximos | 🔵 Flexible |
| `-` | `1.2.3 - 1.5.0` | 🔵 "Solo dentro de este intervalo" | Entre ambos extremos | Fuera del rango | Compatibilidad específica | 🔵 Flexible |
| `\|\|` | `<1.0.0 \|\| >=2.0.0` | 🔵 "Acepto A o B" | Múltiples rangos | Lo que no coincida | Casos avanzados | 🔵 Flexible |
| `x` | `1.2.x` | 🔵 "No me importa el Patch" | Cualquier patch | Cambios fuera del patrón | Flexibilidad parcial | 🔵 Flexible |
| `1.x` | `1.x` | 🔵 "No me importa Minor ni Patch" | Toda la rama 1 | Major | Actualizaciones controladas | 🔵 Flexible |
| `*` | `*` | 🔴 "Instala lo que quieras" | Todo | Nada | Testing rápido | 🔴 Sin control |
| `~1.2` | `~1.2` | 🟡 "Mantente en la 1.2" | `>=1.2.0 <1.3.0` | Cambios Minor | Abreviación común | 🟡 Bajo riesgo |
| `^1.2` | `^1.2` | 🟢 "Mantente en la versión mayor 1" | `>=1.2.0 <2.0.0` | Cambios Major | Muy común en npm | 🟢 Recomendado |
| `latest` | `latest` | 🔴 "Dame lo último que exista" | Última versión publicada | Estabilidad garantizada | Pruebas / experimentación | 🔴 Sin control |

---

# 🎨 SIGNIFICADO DE LOS NIVELES

| Emoji | Significado real |
|---------|------------------|
| 🔒 | "No quiero que npm cambie nada por mí" |
| 🟡 | "Acepto arreglos de bugs, pero no nuevas funcionalidades" |
| 🟢 | "Acepto mejoras compatibles sin romper mi proyecto" |
| 🔵 | "Estoy definiendo reglas personalizadas de compatibilidad" |
| 🔴 | "No me importa la estabilidad, quiero la versión más libre posible" |

---

# 🧠 REGLA MENTAL RÁPIDA

| Símbolo | Frase para recordarlo |
|----------|----------------------|
| `1.2.3` | "No toques nada" |
| `~` | "Arregla bugs solamente" |
| `^` | "Arregla bugs y agrega mejoras" |
| `1.x` | "Quédate en esta versión mayor" |
| `1.2.x` | "Quédate en esta versión menor" |
| `-` | "Solo entre estos límites" |
| `\|\|` | "Una opción u otra" |
| `>= <=` | "Yo controlo el rango" |
| `*` | "Haz lo que quieras" |
| `latest` | "Dame lo más nuevo" |

---

# 📊 EJEMPLOS VISUALES

| Versión actual | Configuración | Puede actualizar a | No puede actualizar a |
|---------------|---------------|--------------------|----------------------|
| `1.2.3` | `1.2.3` | `1.2.3` | `1.2.4`, `1.3.0`, `2.0.0` |
| `1.2.3` | `~1.2.3` | `1.2.4`, `1.2.9` | `1.3.0`, `2.0.0` |
| `1.2.3` | `^1.2.3` | `1.2.4`, `1.3.0`, `1.9.9` | `2.0.0` |
| `1.2.3` | `1.2.x` | `1.2.4`, `1.2.99` | `1.3.0`, `2.0.0` |
| `1.2.3` | `1.x` | `1.3.0`, `1.9.9` | `2.0.0` |
| `1.2.3` | `*` | Cualquier versión | Ninguna |

---

# 📦 SEMVER (VERSIONADO SEMÁNTICO)

| Parte | Ejemplo | Significado |
|---------|----------|-------------|
| Major | `2.0.0` | Cambios incompatibles |
| Minor | `1.3.0` | Nuevas funcionalidades compatibles |
| Patch | `1.2.4` | Corrección de errores |

### Ejemplo

```txt
1.2.3
│ │ │
│ │ └── Patch
│ └──── Minor
└────── Major
```

---

# 🚀 RECOMENDACIÓN PARA PROYECTOS REALES

| Caso | Recomendación |
|--------|--------------|
| Dependencias normales | `^1.2.3` |
| Dependencias críticas | `~1.2.3` |
| Producción muy controlada | `1.2.3` |
| Librerías internas | `^1.2.3` |
| Pruebas rápidas | `latest` o `*` |
| Compatibilidad específica | Rangos (`>=`, `<=`, `-`) |

---

# 🧠 RESUMEN RÁPIDO

| Símbolo | Lo que realmente significa |
|----------|---------------------------|
| `1.2.3` | 🔒 Versión fija |
| `~1.2.3` | 🟡 Solo bugs |
| `^1.2.3` | 🟢 Bugs + mejoras |
| `1.2.x` | 🔵 Cualquier patch |
| `1.x` | 🔵 Cualquier minor y patch |
| `>=` / `<=` | 🔵 Rangos personalizados |
| `-` | 🔵 Intervalo específico |
| `\|\|` | 🔵 Varias opciones |
| `*` | 🔴 Todo permitido |
| `latest` | 🔴 Última versión disponible |

> [!TIP]
>
> Si estás empezando, memoriza únicamente estos tres:
>
> - 🔒 `1.2.3` → versión fija
> - 🟡 `~1.2.3` → solo bugs
> - 🟢 `^1.2.3` → bugs + mejoras
>
> Con eso ya entiendes el 90% de los `package.json` que encontrarás en proyectos reales.
