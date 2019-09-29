
# Burger Queen
![burger-queen](https://i.ibb.co/qMTLjsS/logo.png)
## Preámbulo
la cadena de comida Burguer Queen nos a pedido crear una aplicacion, para poder vizualizarce en tablet, con la intencion de facilitar la orden de los pedidos, entre meceros y cocina.
Con esta app el mecero podrá tomar el pedido del cliente, para luego la orden ser enviada a cocina , para finalmente avisar al mecero cuando este este lista. 

## Planificacion
Nuestra planificaion fue realizada en [Trello](https://trello.com/b/IkqnvvOb/burguer-queen)

# Criterios aceptacion de proyecto
## Definición del producto
El product owner del proyecto ha conversado con el cliente y luego de una reunión con el project manager han logrado crear el siguiente backlog:

## [Historia de usuario] Mesero/a debe poder tomar orden de una persona

Yo como mesero o mesara debería poder tomar la orden de un cliente para saber fácilmente cuanto cobrar y que la cocina tenga las órdenes de manera inmediata y según cuando van llegando.

### Definición de terminado

- Anotar nombre de cliente
- Agregar productos al pedido
- Eliminar productos
- Ver resumen y el total de la compra
- Enviar pedido a cocina (guardar en alguna base de datos)
- Se ve y funciona bien en una tablet.

### Criterios de aceptación

- Debes haber recibido code review de al menos una compañera
- Hiciste tests de usabilidad e incorporaste el feedback del mesero o mesera
- Haces test unitarios y has testeado tu producto por tu cuenta
- Desplegaste tu aplicación y has etiquetado tu versión desplegada (git tag)

## [Historia de usuario] Jefe de cocina debe poder ver ordenes

Yo como cocinero o cocinera debería poder ver las órdenes de los clientes y marcar cuales están listas para saber qué se debe cocinar y avisar al mesero que una orden está lista.

### Definición de terminado

- Ver los pedidos ordenados según van llegando
- Marcar los pedidos que se han terminado
- Ver el tiempo que tomó el pedido

### Criterios de aceptación

- Debes haber recibido code review de al menos una compañera
- Hiciste tests de usabilidad e incorporaste el feedback del cocinero o cocinera
- Haces test unitarios y has testeado tu producto por tu cuenta
- Desplegaste tu aplicación y has etiquetado tu versión desplegada (git tag)

## [Historia de usuario] Mesero/a debe poder ver órdenes listas para servir para entregarlas a los clientes

Yo como mesero o mesera debería poder ver las órdenes que han sido cocinadas y están listas para servir a los clientes, para así entregarlas y que el cliente se vaya feliz con su comida.

### Definición de terminado

- Ver listado de órdenes terminadas
- Marcar pedidos que han sido entregados

### Criterios de aceptación

- Los datos se deben mantener íntegros, incluso después de que un pedido ha terminado. Todo esto para tener estadísticas de lo que ha hecho Burger queen
- Debes haber recibido code review de al menos una compañera
- Hiciste tests de usabilidad e incorporaste el feedback del mesero o mesera
- Haces test unitarios y has testeado tu producto por tu cuenta
- Desplegaste tu aplicación y has etiquetado tu versión desplegada (git tag)

## Diseño
Decidí utilizar una paleta de colores llamativa y un diseño acorde a los colores utilizados.

![concept](https://i.ibb.co/KKFTSnj/concept-burguer.jpg)

## Desarrollo
Este proyecto fue implementado en con la libreria React.
Usamos los servicios de Firebase y bootstrap.

