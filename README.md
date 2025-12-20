# Remfee Viajes

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## GENERAL
Todo el codigo de esta app ha de cumplir los siguientes requisitos:
1. Carpetas de la app correctas, número y nombres de los ficheros <<.ts>> correctos.
2. Uso de las funciones adecuadas, nombre de variables y clases correctas, uso correcto de bucles, condicionales, refactorización del codigo, todo el codigo hecho.
3. Documentar correctamente las funciones utilizadas a los ficheros, encabezamiento de ficheros .ts que se usen, crear documntación interna.

## EJERCICIO 1
Se valora:
- Routing correctamente creado para cubrir todas las opciones
- Como componente por defecto, siempre saldrá la de VIATGES
- Existirá la componente para REMFEE pero solo saldra un mensaje de salutación generico

## EJERCICIO 2
Si clicamos en la opción VIATGES, nos aparece justo debajo un formulario para buscar viajes disponibles de tren y hacer una compra. Este formulario contendra:
- Un campo select de nombre de **Origen** que nos muestra la estación de salida. El nombre de la estación nos viene desde la tabla **ciutats** en la BBDD
- Un campo select de nombre **Destinació** que nos muestra la estación de llegada. El nombre de la estación nos viene desde la tabla **ciutats** en la BBDD
- Un boton que ponga **BUSCAR**. Este boton estará deshabilitado siempre y cuando no esten rellenados ambos selectores.

Se valora:
- Formulario creado correctamente con Reactive Forms. El boton permanecerá deshabilitado mientras no sean correctos los campos.
- Cargar los campos de origen y destino de los valores provenientes de la tabla ciutats de la BBDD
- Validar que los campos de origen y destino no estén vacios y validar mediante una directiva o similar, que si escogemos el mismo nombre de una ciudad a orige i a destino, lo informemos como error.

## EJERCICIO 3
En clicar el boton BUSCAR, nuestra app irá al servidor para intentar encontrar la tabla de horarios si hubiese viajes programados con ese origen y destino.
En el caso de que no haya ninguna coincidencia, se nos informará al respecto.

En caso afirmativo, se nos mostrará una tabla que contendrá todas las coincidencias de nuestra busqueda. Al lado de cada coincidencia habrá un boton de tipo radio para seleccionar uno de los horarios y debajo, un boton con el nombre SELECCIONA UN HORARI. Este boton estará deshabilitado siempre y cuando no se seleccione ningun horario de la tabla.

Se valora:
- Busqueda de coincidencias en la BBDD
- El array de coincidencias tambien se guardará en un localstorage
- Mensaje informativo en caso de que no haya coincidencias
- En caso afirmativo, creación dinamica de una tabla que contenga todas las coincidencias encontradas
- Radios bien creados para poder seleccionar uno de los horarios. Botón SELECCIONA UN HORARI deshabilitado hasta que no se clique una opción.

