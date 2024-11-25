# Requisitos Previos

**Node.js**: Descárgalo desde [nodejs.org](https://nodejs.org/)
**Git**: Descárgalo desde [git-scm.com](https://git-scm.com/)
Verifica que la instalación haya sido exitosa ejecutando los siguientes comandos en tu terminal:

```bash
node -v
npm -v
git -v
```

# Angular CLI

La Angular CLI es necesaria para crear y gestionar proyectos Angular. Instálala globalmente con:

```bash
npm install -g @angular/cli
```
Verifica la instalación ejecutando:

```bash
ng version
```

# Instalar el Proyecto

Abre git bash y clona este repositorio en tu máquina local:

```bash
git clone https://github.com/Yorx1/test-disorders.git
```

Acceder al Directorio Accede al directorio del proyecto:

```bash
cd test-disorders
```
Instalar Dependencias Ejecuta el siguiente comando para instalar las dependencias necesarias:

```bash
npm install
```
# test-disorders

Este proyecto se generó con [Angular CLI](https://github.com/angular/angular-cli) versión 17.3.3.

## Servidor de desarrollo

Ejecute `ng serve` para un servidor de desarrollo. Navegue a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambia alguno de los archivos de origen.

## Andamiaje de código

Ejecute `ng generate component component-name` para generar un nuevo componente. También puede usar `ng generate Directive|pipe|service|class|guard|interface|enum|module`.

## Compilación

Ejecute `ng build` para compilar el proyecto. Los artefactos de compilación se almacenarán en el directorio `dist/`.

## Ejecución de pruebas unitarias

Ejecute `ng test` para ejecutar las pruebas unitarias a través de [Karma](https://karma-runner.github.io).

## Ejecución de pruebas de extremo a extremo

Ejecute `ng e2e` para ejecutar las pruebas de extremo a extremo a través de la plataforma que elija. Para usar este comando, primero debe agregar un paquete que implemente capacidades de prueba de extremo a extremo.

## Más ayuda

Para obtener más ayuda sobre Angular CLI, use `ng help` o consulte la página [Referencia de comandos y descripción general de Angular CLI](https://angular.io/cli).