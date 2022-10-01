import "./App.css";
import { NavBar } from "./components/NavBar/NavBar.jsx";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.jsx";
import { ItemListCards } from "./components/ItemListCards/ItemListCards.jsx";
import { useEffect, useState } from "react";

import imghp1 from "../src/assets/hp1.jpg"
import imghp2 from "../src/assets/hp2.jpg"
import imghp3 from "../src/assets/hp3.jpg"
import imghp4 from "../src/assets/hp4.jpg"
import imghp5 from "../src/assets/hp5.jpg"
import imghp6 from "../src/assets/hp6.jpg"
import imghp7 from "../src/assets/hp7.jpg"
import imghplm from "../src/assets/hplm.jpg"
import imghpq from "../src/assets/hpq.jpg"
import imghpaf from "../src/assets/hpaf.jpg"
import imghpcuentos from "../src/assets/hpcuentos.jpg"
import imgcoleccion7 from "../src/assets/coleccion7libros.jpg"


export function App() {

  const productos = [
    { id: 1, nombre: "Harry Potter y la Piedra Filosofal", precio: 900, descripcion: "Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y el insoportable primo Dudley. Harry se siente muy triste y solo, hasta que un buen día recibe una carta que cambiará su vida para siempre. En ella le comunican que ha sido aceptado como alumno en el Colegio Hogwarts de Magia. A partir de ese momento, la suerte de Harry da un vuelco espectacular. En esa escuela tan especial aprenderá encantamientos, trucos fabulosos y tácticas de defensa contra las malas artes. Se convertirá en el campeón escolar de Quidditch, especie de fútbol aéreo que se juega montado sobre escobas, y hará un puñado de buenos amigos... aunque también algunos temibles enemigos. Pero, sobre todo, conocerá los secretos que le permitirán cumplir su destino. Pues, aunque no lo parezca a primera vista, Harry no es un chico común y corriente: ¡es un verdadero mago!", imagen: imghp1 },
    { id: 2, nombre: "Harry Potter y la Cámara Secreta", precio: 900, descripcion: "Tras derrotar una vez más a lord Voldemort, su siniestro enemigo en Harry Potter y la piedra filosofal, Harry espera impaciente en casa de sus insoportables tíos el inicio del segundo curso del Colegio Hogwarts de Magia. Sin embargo, la espera dura poco, pues un elfo aparece en su habitación y le advierte que una amenaza mortal se cierne sobre la escuela. Así pues, Harry no se lo piensa dos veces y, acompañado de Ron, su mejor amigo, se dirige a Hogwarts en un coche volador. Pero ¿puede un aprendiz de mago defender la escuela de los malvados que pretenden destruirla? Sin saber que alguien había abierto la Cámara de los Secretos, dejando escapar una serie de monstruos peligrosos, Harry y sus amigos Ron y Hermione tendrán que enfrentarse con arañas gigantes, serpientes encantadas, fantasmas enfurecidos y, sobre todo, con la mismísima reencarnación de su más temible adversario.", imagen: imghp2 },
    { id: 3, nombre: "Harry Potter y el Prisionero de Azkaban", precio: 900, descripcion: "Igual que en las dos primeras partes de la serie, Harry aguarda con impaciencia el inicio del tercer curso en el Colegio Hogwarts de Magia. Tras haber cumplido los trece años, solo y lejos de sus amigos, Harry se pelea con su bigotuda tía Marge, a la que convierte en globo, y debe huir en un autobús mágico. Mientras tanto, de la prisión de Azkaban se ha escapado un terrible villano, Sirius Black, un asesino en serie con poderes mágicos que fue cómplice de lord Voldemort y que parece dispuesto a borrar a Harry del mapa. Y por si fuera poco, Harry deberá enfrentarse también a unos terribles monstruos, los dementores, seres abominables capaces de robarle la felicidad a los magos y de eliminar todo recuerdo hermoso de aquellos que osan mirarlos. Lo que ninguno de estos malvados personajes sabe es que Harry, con la ayuda de sus fieles amigos Ron y Hermione, es capaz de todo y mucho más.", imagen: imghp3 },
    { id: 4, nombre: "Harry Potter y el Cáliz de Fuego", precio: 900, descripcion: "Tras otro abominable verano con los Dursley, Harry se dispone a iniciar el cuarto curso en Hogwarts, la famosa escuela de magia y hechicería. A sus catorce años, a Harry le gustaría ser un joven mago como los demás y dedicarse a aprender nuevos sortilegios, encontrarse con sus amigos Ron y Hermione y asistir con ellos a los Mundiales de quidditch. Sin embargo, al llegar al colegio le espera una gran sorpresa que lo obligará a enfrentarse a los desafíos más temibles de toda su vida. SI logra superarlos, habrá demostrado que ya no es un niño y que está preparado para vivir las nuevas y emocionantes experiencias que el futuro le depara.", imagen: imghp4 },
    { id: 5, nombre: "Harry Potter y la Órden del Fénix", precio: 1000, descripcion: "Las tediosas vacaciones de verano en casa de sus tíos todavía no han acabado y Harry se encuentra más inquieto que nunca. Apenas ha tenido noticias de Ron y Hermione, y presiente que algo extraño está sucediendo en Hogwarts. En efecto, cuando por fin comienza otro curso en el famoso colegio de magia y hechicería, sus temores de vuelven realidad. El Ministerio de Magia niega qu Voldemort haya regresado y ha iniciado una campaña de desprestigio contra Harry y Dumbledore, para lo cual ha asignado a la horrible profesora Dolores Umbridge la tarea de vigilar todos sus movimientos. Así pues, además de sentirse solo e incomprendido, Harry sospecha que Voldemort puede adivinar sus pensamientos, e intuye que el temible mago trata de apoderarse de un objeto secreto que le permitiría recuperar su poder destructivo.", imagen: imghp5 },
    { id: 6, nombre: "Harry Potter y el Misterio del Príncipe", precio: 1200, descripcion: "Con dieciséis años cumplidos, Harry inicia el sexto curso en Hogwarts en medio de terribles acontecimientos que asolan Inglaterra. Elegido capitán del equipo de quidditch, los ensayos, los exámenes y las chicas ocupan todo su tiempo, pero la tranquilidad dura poco. A pesar de los férreos controles de seguridad que protegen la escuela, dos alumnos son brutalmente atacados. Dumbledore sabe que se acerca el momento, anunciado por la Profecía, en que Harry y Voldemort se enfrentarían a muerte: «El único con poder para vencer al Señor Tenebroso se acerca... Uno de los dos debe morir a manos del otro, pues ninguno de los dos podrá vivir mientras siga el otro con vida» El anciano director solicitará la ayuda de Harry y juntos emprenderán peligrosos viajes para intentar debilitar al enemigo, para lo cual el joven mago contará con un viejo libro de pociones perteneciente a un misterioso personaje, alguien que se hace llamar Príncipe Mestizo.", imagen: imghp6 },
    { id: 7, nombre: "Harry Potter y las Reliquias de la Muerte", precio: 1300, descripcion: "La fecha de acerca. Cuando cumpla diecisiete años, Harry perderá el encantamiento protector que lo mantiene a salvo. El anunciado duelo a muerte con lord Voldemort es inminente, y la casi imposible misión de encontrar y destruir los restantes Horrocruxes, más urgente que nunca. Ha llegado la hora final, el momento de tomar decisiones difíciles. Harry debe abandonar la calidez de La Madriguera para seguir sin miedo ni vacilaciones el inexorable sendero trazado para él. Consciente de lo mucho que está en juego, tendrá que buscar en su interior la fuerza necesaria que lo impulse en la vertiginosa carrera para enfrentarse a su destino.", imagen: imghp7 },
    { id: 8, nombre: "Harry Potter y el Legado Maldito", precio: 1400, descripcion: "Siempre fue difícil ser Harry Potter y no es mucho más fácil ahora que es un empleado con exceso de trabajo del Ministerio de Magia, un marido y padre de tres niños en edad escolar. Mientras Harry se enfrenta con un pasado que se niega a permanecer donde pertenece, su hijo menor Albus debe luchar con el peso de una herencia familiar que nunca quiso. Como el pasado y el presente se fusionan ominosamente, padre e hijo descubren una verdad incómoda: a veces, la oscuridad viene de lugares inesperados.", imagen: imghplm },
    { id: 9, nombre: "Animales fantásticos y dónde encontrarlos", precio: 700, descripcion: "Publicado en 2001, el libro contiene algunas referencias que pertenecen a libros posteriores. Por ejemplo, el libro contiene un apartado para los Erumpent; el cuerno del Erumpent, es descrito como un objeto muy peligroso, y en Harry Potter y las Reliquias de la Muerte, es demostrado. Sin embargo, no contiene entradas para banshees, bicornios, escregutos de cola explosiva, Boggarts, boomslangs, cockatrices, dementores, Hinkypunks, Cancerberos o thestrals, aunque estos últimos son mencionados en el apartado de caballos alados.", imagen: imghpaf },
    { id: 10, nombre: "Quidditch a través de los tiempos", precio: 700, descripcion: "Si alguna vez te has preguntado de dónde proviene la snitch dorada, cómo adquieren vida las bludgers o por qué los Wingtowns Wanderes llevan un cuchillo de carnicero dibujado en el uniforme, entonces el libro que tienes en las manos es para ti. Esta edición es una copia del ejemplar que esta en la biblioteca del Colegio Hogwarts y que los jóvenes fanáticos del quidditch consultan casi a diario. Los beneficios obtenidos con su venta se destinarán a las organizaciones benéficas Comic Relief y Lumos, que utilizaran el dinero para salvar y mejorar vidas, un trabajo que es aún mas importante y sorprendente que los tres segundos y medio que tardó Roderick Plumpton en capturar la snitch dorada en 1921", imagen: imghpq },
    { id: 11, nombre: "Los Cuentos de Beedle el Bardo", precio: 700, descripcion: "La idea surgió realmente porque quería agradecer a seis personas claves que han sido muy estrechamente relacionadas con la serie de Harry Potter, y estos eran gente para quien una pieza de joyería no iba a cortar. Así que tuve la idea de escribir un libro, un libro escrito a mano e ilustrado, de ellos sólo para estas seis personas. Y bueno, si estoy haciendo seis realmente tengo que hacer siete, y el séptimo libro será por esta causa, que es tan cercano a mi corazón.", imagen: imghpcuentos },
    { id: 12, nombre: "Harry Potter Colección Completa (7 libros)", precio: 9500, descripcion: "La colección completa de los libros de Harry Potter, la saga más mágica de todos los tiempos. La saga de «Harry Potter» en una edición renovada y única en un estuche con las siete novelas de Harry Potter . Con el rediseño de cubierta a cargo del galardonado ilustrador Jonny Duddle, estos libros son una nueva propuesta, muy atractiva, para acercar Harry Potter a todos los públicos: desde coleccionistas hasta los lectores más jóvenes.", imagen: imgcoleccion7 },
  ]

  const [products, setProducts] = useState([])
  
  const obtenerProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos)
      }, 2000);
    })
  }

  useEffect(() => { obtenerProductos().then((result) => { setProducts(result) }) }, [])


  return (
    <div>
      <header >
        <NavBar />
      </header>
      <main>
        <ItemListContainer />
        {products.map(elm => {
          return (
            <ItemListCards key={elm.id} nombre={elm.nombre} precio={elm.precio} imagen={elm.imagen} />
          )
        })
        }
      </main>
    </div>
  );
}

export default App;
