Fast-delivery  
////////////////////

Este es el repositorio de mi increíble aplicación desarrollada con Next.js, MongoDB y Docker, utilizando TypeScript para el desarrollo del lado del cliente, y con maquetado hecho con Tailwind CSS. Además, hemos configurado CI/CD utilizando GitHub Actions para facilitar el despliegue continuo.

    Descripción

///////////////////
Esta aplicación es un ejemplo sencillo de cómo construir una aplicación web moderna utilizando tecnologías populares como Next.js, MongoDB, TypeScript, Docker y Tailwind CSS. Next.js es un framework de React que permite construir aplicaciones web rápidas y eficientes, y TypeScript proporciona un entorno de desarrollo tipado y seguro. MongoDB es una base de datos NoSQL que nos permite almacenar y recuperar datos de manera eficiente. Docker nos ayuda a empaquetar y distribuir nuestra aplicación en contenedores, lo que facilita el despliegue en diferentes entornos. Por último, Tailwind CSS nos permite diseñar una interfaz de usuario hermosa y personalizada sin necesidad de escribir CSS desde cero.

    Características

////////////////////
Utiliza Next.js 13 y TypeScript para el desarrollo de la parte del cliente.
Almacena y recupera datos utilizando MongoDB.
Utiliza Tailwind CSS para el maquetado y diseño de la interfaz de usuario.
Empaquetado y distribución de la aplicación mediante Docker.
Configuración de CI/CD utilizando GitHub Actions para despliegue continuo.
Requisitos previos
Para poder ejecutar esta aplicación, necesitarás tener instalado Docker en tu sistema. Puedes descargar Docker desde el sitio web oficial.

    Cómo usar

//////////////////
Sigue los siguientes pasos para ejecutar la aplicación en tu entorno local:

Clona este repositorio en tu máquina local.

Abre una terminal y navega hasta el directorio raíz de la aplicación.

Ejecuta el siguiente comando para construir la imagen de Docker:

bash
Copy code
docker build -t my-nextjs-app .
Una vez que la imagen se haya construido, ejecuta el siguiente comando para iniciar un contenedor con la aplicación:

bash
Copy code
docker run -p 3000:3000 my-nextjs-app
Ahora, abre tu navegador web y visita http://localhost:3000 para ver la aplicación en acción.
