¿Qué es?
===
Esta es mi implementación del [Katayuno](http://aprendiendotdd.com/2014/03/katayuno-de-marzo/) del problema [FizzBuzz](http://www.codingdojo.org/cgi-bin/index.pl?KataFizzBuzz) organizado por AprendiendoTDD.

Resumen del problema
===
**Primer requisito**:

Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz?".

**Segundo requisito (a posteriori)**:

A number is fizz if it is divisible by 3 or if it has a 3 in it.

A number is buzz if it is divisible by 5 or if it has a 5 in it

Cómo ejecutar el código
===
Prerequisito: Tener [NodeJS](http://nodejs.org) instalado 

	git clone https://github.com/luisrovirosa/KataFizzBuzz.git
	cd KataFizzBuzz
	npm install
	
**Obtener la salida**

	node src/Main.js
**Ejecutar los tests**
	
	./node_modules/jasmine-node/bin/jasmine-node test/ --verbose
Estrategia de resolución
===
Siguiendo BDD/TDD haciendo lo mínimo posible en cada paso. Pasos


1. Comprobar que devuelve un array de 99 elementos
2. Probar que para los casos básicos (cuando no son múltiplos de 3 ni de 5) devuelve el número
3. Probar que cuando es múltiplo de 3 devuelve Fizz
4. Probar que cuando es múltiplo de 5 devuelve Buzz
5. Probar que cuando es múltiplo de 3 y 5 simultáneamente devuelve FizzBuzz
6. Modificar las condiciones para cuando es Fizz
7. Modificar las condiciones para cuando es Buzz
8. Refáctoring para acortar los métodos y organizar la lógica de las reglas

Decisiones de resolución
===
He considerado que el segundo requisito afecta también a la lógica de FizzBuzz. Si no fuera así, sería tan fácil de cambiar como modificar la función FizzBuzz.isFizzBuzz.
Qué cambiaría ahora
===
Habría hecho primero una forma de tener la respuesta en pantalla en vez de hacerlo lo último. De esa forma desde los primeros momentos hubiera tenido una forma de ver (y de poder enseñar si fuera un proyecto real) la progresión. 
