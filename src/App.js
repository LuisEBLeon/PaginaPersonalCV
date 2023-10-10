import './App.css';
import { Button, Image , Icon} from 'semantic-ui-react';
import yo from "./assets/yo.jpg"
import cv from "./assets/CV_BustillosLeonLuisEduardo.pdf"
import gdev1 from "./assets/gdev1.png"
import gdev2 from "./assets/gdev2.png"
import gdev3 from "./assets/gdev3.png"
import gdev4 from "./assets/gdev4.png"
import hobby1 from "./assets/hobby1.png"
import hobby2 from "./assets/hobby2.jpg"
import hobby3 from "./assets/hobby3.png"
import hobby4 from "./assets/hobby4.png"
import hobby5 from "./assets/hobby5.jpg"
import hobby6 from "./assets/hobby6.jpg"

function App() {
  return (
    <>
      <div className='fondo'>
        <Image src={"https://i0.wp.com/criptotendencia.com/wp-content/uploads/2019/06/Usos-de-Criptografia.jpg?fit=1000%2C667&ssl=1&resize=1280%2C720"}/>
        <h1 className='titulo'>
        Página Personal
        </h1>
      </div>
      <div className='Contenido'>
        <h2>
          Presentación
        </h2>
        <div className='presentación'>
          <Image src={yo} size='small'/>
          <div>
          <p>
            Mi nombre es Luis Eduardo Bustillos León, nací el 26 de abril del 2002, tengo 21 años y soy un apasionado por la programación, y disfruto aprender más acerca de todo lo relacionado con la computación.<br></br>
            <span>Correo Electrónico: </span>bustillos.leon.le@gmail.com
          </p>
          <h2>
        Formación Académica
        </h2>
        <p>
        Cursé el kinder y primaria en el Colegio Fray Luis de León, a mis 12 años, ingresé en la Escuela Secundaria Técnica No. 47 "Juan de Dios Bátiz", mis estudios de bachillerato los llevé en el Centro de Estudios Tecnológicos Industrial y de Servicios No. 8 "Rafael Dondé", y actualmente me encuentro estudiando la carrera de Ingeniería en Sistemas Computacionales en la Escuela Superior de Cómputo.
        </p>
          </div>
        </div>
        <h2>
        Redes Sociales 
        </h2>
        <div>
        <Button color='facebook' as="a" href="https://www.facebook.com/luiseduardobustillosleon">
          <Icon name='facebook' /> Facebook
        </Button>
        <Button color='twitter' as="a" href="https://twitter.com/LEBL2604">
          <Icon name='twitter' /> Twitter
        </Button>
        <Button color='instagram' as="a" href="https://www.instagram.com/bleonluis/">
          <Icon name='instagram' /> Instagram
        </Button>
        <Button color='youtube' as="a" href="https://www.youtube.com/channel/UCabWDfNk2WWrXUZIwjsqniw">
          <Icon name='youtube' /> Youtube
        </Button>
        <Button color='black' as="a" href="https://github.com/LuisEBLeon?tab=repositories">
          <Icon name='github'/> Github
        </Button>
        </div>
        <h2>
          Hobbies
        </h2>
        <h3>Programar Videojuegos</h3>
        <p>Durante mis años cursando el bachillerato, desarrollé un interés por la programación a raíz de mi gusto por los videojuegos, por lo que previo a presentar el examen de admisión, decidí tomar algunos cursos introductorios al desarrollo de videojuegos, empleando inicialmente el motor gráfico Unity, y en años recientes, pasando a desarrollar mis proyectos personales empleando el motor gráfico Godot Engine.</p>
        <div className='Imagenes'>
        <Image src={gdev1}/><Image src={gdev2}/> <Image src={gdev3}/><Image src={gdev4}/>
        </div>
        <h3>Manualidades</h3>
        <p>
          Disfruto de realizar manualidades en mi tiempo libre, desde figuras de origami, hasta llaveros o figuras empleando un material llamado "Hama Bead"
        </p>
        <div className='Imagenes'>
        <Image src={hobby1}/><Image src={hobby2}/> <Image src={hobby3}/>
        <Image src={hobby4}/><Image src={hobby5}/> <Image src={hobby6}/>
        </div>
        <h2>
        Algoritmo RSA
        </h2>
        <p>
        <h3>Generación de claves:</h3>
        A) Selección de números primos: El primer paso es seleccionar dos números primos grandes, p y q. Estos números son mantenidos en secreto y forman la base de la seguridad del sistema.
        <br/>
        B) Cálculo del módulo y la función totiente: Se calcula el producto de p y q para obtener el módulo n (n = p * q). Además, se calcula la función totiente de Euler φ(n) = (p-1) * (q-1), que es necesaria para determinar la clave privada.
<br/>
  C) Selección de la clave pública: Se elige un número entero e (generalmente un número primo pequeño, como 65537) que sea coprimo con φ(n), es decir, que no comparta factores comunes más allá de 1 con φ(n). La clave pública consiste en el par (n, e), y se distribuye públicamente.
<br/>
  D) Cálculo de la clave privada: Se calcula un número entero d que sea el inverso multiplicativo de e módulo φ(n). En otras palabras, d es el número que satisface la ecuación (e * d) % φ(n) = 1. La clave privada consiste en el par (n, d) y se mantiene en secreto.
<h3>Cifrado:</h3>
Para cifrar un mensaje M, el remitente utiliza la clave pública del destinatario (n, e) y calcula el valor cifrado C mediante la fórmula: C = M^e % n. El mensaje cifrado C se envía al destinatario.
<br/>
<h3>Descifrado:</h3>
El destinatario utiliza su clave privada (n, d) para descifrar el mensaje cifrado C mediante la fórmula: M = C^d % n. Esto recupera el mensaje original M.
        </p>
        <h2>
          CV y Llave Privada
        </h2>
        <div>
        <Button color='red' as="a" download={cv} href={cv}>
          <Icon name='file pdf' /> Descargar CV
        </Button>
        <Button color='blue' as="a" href="">
          <Icon name='key' /> Descargar Llave Privada
        </Button>
        </div>
      </div>
    </>
  );
}

export default App;
