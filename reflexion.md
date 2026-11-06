Documentación y Bitácora de Aprendizaje (reflexion.md)
Módulo: Desarrollo Web Básico & Interacción con IA

Proyecto: Manipulación Dinámica del DOM y Especificidad en CSS

Formato de Trabajo: Aprendizaje guiado "For Dummies" (paso a paso, sin código innecesario)

1. Objetivos del Homework
Objetivo principal: Crear una página web simple donde un elemento HTML (div) cambie de color de manera gradual y visible al hacer clic en un botón.

Requisito de proceso: Documentar todo el flujo de prompting, razonamiento técnico, consultas y resoluciones conceptuales en este informe.

Stack tecnológico: HTML5, CSS3 vainilla y JavaScript vainilla (sin librerías ni frameworks).

2. Historial de Prompts y Estrategia de Interacción (Prompting)
Para garantizar un aprendizaje efectivo desde cero, se establecieron reglas estrictas de interacción con la IA:

Regla de control ("go"): La IA no debía entregar código completo ni avanzar de etapa hasta recibir explícitamente la instrucción o palabra clave.

Estilo de explicación: Explicaciones directas, "al grano", sin rodeos y adaptadas al nivel principiante.

Evolución del Prompting:

Prompt 1 (Inicio y contexto): Se definió la consigna, el nivel técnico inicial y las restricciones de interacción.

Prompt 2 (Refinamiento técnico): Se consultó sobre el uso de flexbox en el maquetado y sobre la alternativa de usar métodos de alternancia de clases (classList.toggle).

Prompt 3 (Refactorización de código): Se solicitó reemplazar la lógica de estilos directos por la implementación con classList.toggle.

Prompts 4 al 8 (Profundización conceptual y debugging de especificidad): Se realizaron consultas progresivas sobre el selector compuesto (#box.cambiado), diferencias con selectores descendientes (#box .cambiado), especificidad (sistema de puntos) y comportamiento en tiempo real del DOM.

3. Desarrollo Técnico del Proyecto
Estrategia de Solución
Se optó por separar responsabilidades de manera limpia:

HTML: Estructura de contenedor (<div id="box">) y disparador de acción (<button id="changeColorBtn">).

CSS: Estilos base, animación suave mediante transition y definición del color alternativo mediante clases.

JavaScript: Captura del evento click y alternancia dinámica de clase usando classList.toggle().

4. Conceptos Clave Aprendidos y Resueltos
Durante el proceso surgieron dudas técnicas fundamentales que fueron analizadas minuciosamente:

A. Uso de Flexbox
En body: Permite centrar la caja y el botón en el punto medio de la pantalla vertical y horizontalmente.

En div#box: Estrictamente no era obligatorio para lograr el cambio de color, pero se aplicó como buena práctica para centrar el texto internamente dentro de la caja.

B. El Método classList.toggle()
Reemplaza los condicionales manuales (if/else) para cambiar estilos. Funciona como un "interruptor": si el elemento posee la clase, la remueve; si no la posee, la agrega en tiempo real en el DOM.

5. Conclusión y Reflexión Final
El flujo de trabajo implementado no solo permitió cumplir con el requerimiento funcional de la consigna (animación fluida de cambio de color al hacer clic), sino que facilitó comprender la interacción real entre el HTML estático, la inyección dinámica de clases mediante JS en el DOM y la jerarquía de cascada en CSS. La estrategia de prompting interactivo demostró ser clave para despejar dudas estructurales sobre especificidad antes de dar por finalizada la solución.