function irA(idDelElemento) {
    location.hash = "#" + idDelElemento;
}

function accionCursos(e) {
    console.log(e.target.id);

    let tit = document.querySelector("#titCursoOfic");
    let parrafoHorario = document.querySelector("#horaOfic");
    let parrafoContenido = document.querySelector("#contOfic");

    let titPrg = document.querySelector("#titCursoPrg");
    let parrafoHorarioPrg = document.querySelector("#horaPrg");
    let parrafoContenidoPrg = document.querySelector("#contPrg");

    let titIdioma = document.querySelector("#titCursoIdioma");
    let parrafoHorarioIdioma = document.querySelector("#horaIdioma");
    let parrafoContenidoIdioma = document.querySelector("#contIdioma");

    switch (e.target.id) {
        case "of1":
            // Muestra y visualiza secciones
            document.getElementById("cOficina").style.display = "none";
            document.getElementById("cProgramacion").style.display = "none";
            document.getElementById("cIdioma").style.display = "none";
            document.getElementById("tituloSeccionOficina").style.display = "none";
            document.getElementById("tituloSeccionProgramacion").style.display = "none";
            document.getElementById("tituloSeccionIdiomas").style.display = "none";


            document.getElementById("textoOficina").style.display = "";

            //Modifica Elementos del formulario
            tit.innerHTML = "Procesador de textos";
            parrafoHorario.innerHTML = `Lunes y Miércoles 18:00hs <br> Martes y Jueves 14:00hs`
            parrafoContenido.textContent = "Programa que permite producir textos en Word, utilizando las herramientas adecuadas para cambiar la apariencia de la letra, insertar bordes y sombreados de texto, corregir ortografía y gramática, insertar imágenes, autoformas y tablas, diseñar encabezados y pies de página y configurar el documento para su impresión. boración de diferentes trabajos escritos, utilizando el software Word y aplicando las normas vigentes para documentos comerciales y académicos. ";
            irA("textoOficina");
            break;

        case "of2":
            // Muestra y visualiza secciones
            document.getElementById("cOficina").style.display = "none";
            document.getElementById("cProgramacion").style.display = "none";
            document.getElementById("cIdioma").style.display = "none";
            document.getElementById("tituloSeccionOficina").style.display = "none";
            document.getElementById("tituloSeccionProgramacion").style.display = "none";
            document.getElementById("tituloSeccionIdiomas").style.display = "none";
            document.getElementById("textoOficina").style.display = "";

            //Modifica Elementos del formulario
            tit.innerHTML = "Planilla de Cálculos";
            parrafoHorario.innerHTML = `Lunes y Miércoles 10:00hs <br> Martes y Jueves 19:00hs`

            parrafoContenido.innerHTML = `<p>Con este curso, 
            conocerás la herramienta ofimática Excel, sus principales 
            usos y aplicaciones y su funcionamiento básico, de modo que 
            puedas gestionar un conjunto de datos de forma sencilla y 
            ágil para su interpretación, análisis y presentación. Así, 
            podrás generar información de calidad para el control, 
            exposición y resguardo de datos de distinto tipo y para 
            diversos objetivos, tanto en el ámbito personal, laboral o 
            profesional. 
            Al ser un curso introductorio, está centrado en las 
            principales características, menús y opciones con que cuenta el recurso, 
            la edición, impresión y generación de gráficos.<br>Esta propuesta es 
            teórica - práctica ya que aplicarás en la herramienta todo lo que 
            aprendas.<br>Este curso está diseñado para ser aplicado sobre 
            cualquiera de las versiones de Excel que actualmente están 
            disponibles.</p>`;
            irA("textoOficina");
            break;
        case "of3":
            // Muestra y visualiza secciones
            document.getElementById("cOficina").style.display = "none";
            document.getElementById("cProgramacion").style.display = "none";
            document.getElementById("cIdioma").style.display = "none";
            document.getElementById("tituloSeccionOficina").style.display = "none";
            document.getElementById("tituloSeccionProgramacion").style.display = "none";
            document.getElementById("tituloSeccionIdiomas").style.display = "none";
            document.getElementById("textoOficina").style.display = "";

            //Modifica Elementos del formulario
            tit.innerHTML = "Presentaciones con Diapositivas";
            parrafoHorario.innerHTML = `Lunes y Miércoles 10:00hs <br> Martes y Jueves 19:00hs`
            parrafoContenido.innerHTML = `El curso brinda las herramientas para desarrollar una presentación a
            partir de una idea. Se presentan diferentes alternativas de diseño de
            diapositivas, objetos gráficos, figuras, imágenes, tablas,
            organigramas, plantillas y manejo de textos. Se explica cómo
            agregar contenido multimedial para la visualización en pantallas
            utilizando audio y video, elevando el impacto de la presentación e
            incorporando animaciones y transiciones de diapositiva. Se aprende
            también a programar y ensayar una presentación para que la
            exposición oral esté sincronizada con el material proyectado.`;
            irA("textoOficina");
            break;
        case "of4":
            // Muestra y visualiza secciones
            document.getElementById("cOficina").style.display = "none";
            document.getElementById("cProgramacion").style.display = "none";
            document.getElementById("cIdioma").style.display = "none";
            document.getElementById("tituloSeccionOficina").style.display = "none";
            document.getElementById("tituloSeccionProgramacion").style.display = "none";
            document.getElementById("tituloSeccionIdiomas").style.display = "none";
            document.getElementById("textoOficina").style.display = "";

            //Modifica Elementos del formulario
            tit.innerHTML = "Bases de Datos (BBDD)";
            parrafoHorario.innerHTML = `Lunes y Miércoles 10:00hs <br> Martes y Jueves 19:00hs`
            parrafoContenido.innerHTML = `El objetivo de este curso básico de
             Access es que los participantes puedan crear una base de datos 
             desde cero para después administrarla a través del manejo de 
             formularios, controles, creación de consultas, con la finalidad de 
             que ser capaces de manipular una gran cantidad de información de 
             una forma sencilla.<br>Este curso básico de Access va dirigido a 
             funcionarios de cualquier nivel de las áreas de administración, 
             auditoria, finanzas, tesorería, recursos humanos, ventas, marketing, 
             etc., que necesitan manejar y administrar una gran cantidad de 
             información y contactos.`;
             irA("textoOficina");
             break;
        case "prg1":
            // Muestra y visualiza secciones
            document.getElementById("cOficina").style.display = "none";
            document.getElementById("cProgramacion").style.display = "none";
            document.getElementById("cIdioma").style.display = "none";
            document.getElementById("tituloSeccionOficina").style.display = "none";
            document.getElementById("tituloSeccionProgramacion").style.display = "none";
            document.getElementById("tituloSeccionIdiomas").style.display = "none";
            document.getElementById("textoProgramacion").style.display = "";

            //Modifica Elementos del formulario
            titPrg.innerHTML = "Aprendiendo a Programar con Python";
            parrafoHorarioPrg.innerHTML = `Lunes y Miércoles 10:00hs <br> Martes y Jueves 19:00hs`
            parrafoContenidoPrg.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget enim et ex semper venenatis. Suspendisse potenti. Nunc a nibh a sapien euismod tempus at eget sapien. Nullam euismod libero sed nunc ultrices, sed dignissim sem faucibus. Ut rhoncus erat odio, non iaculis nisi egestas quis. Nulla dapibus varius iaculis. Nullam sollicitudin hendrerit est, ut sodales purus. Aenean ornare neque ut mattis posuere. Morbi porta risus sit amet volutpat viverra. Fusce semper purus in leo efficitur porttitor. Aenean vitae nisl a nisi malesuada bibendum id vitae eros. Ut sagittis luctus nunc, at blandit augue ornare a. Pellentesque ligula est, auctor ac ultricies a, pharetra eu nibh. Phasellus interdum, ligula sit amet sodales commodo, ante quam malesuada purus, nec laoreet odio massa at neque. Suspendisse auctor, elit a convallis mollis, sapien libero molestie tellus, quis eleifend orci lectus in justo. Vivamus fermentum sollicitudin mi, sed pulvinar lectus vehicula nec.`;
            irA("textoProgramacion");
            break;
        case "prg2":
            // Muestra y visualiza secciones
            document.getElementById("cOficina").style.display = "none";
            document.getElementById("cProgramacion").style.display = "none";
            document.getElementById("cIdioma").style.display = "none";
            document.getElementById("tituloSeccionOficina").style.display = "none";
            document.getElementById("tituloSeccionProgramacion").style.display = "none";
            document.getElementById("tituloSeccionIdiomas").style.display = "none";
            document.getElementById("textoProgramacion").style.display = "";

            //Modifica Elementos del formulario
            titPrg.innerHTML = "PYTHON Análisis de Datos";
            parrafoHorarioPrg.innerHTML = `Lunes y Miércoles 10:00hs <br> Martes y Jueves 19:00hs`
            parrafoContenidoPrg.innerHTML = `Aenean faucibus sollicitudin velit vitae varius. Integer consectetur molestie purus a interdum. Curabitur varius, purus quis porta sollicitudin, felis ipsum imperdiet tellus, dictum euismod erat justo efficitur odio. Mauris quis ipsum risus. Sed in velit sapien. Donec vitae efficitur nunc. Suspendisse ac sem eu velit aliquet luctus sit amet vel nibh. Suspendisse in tortor et augue convallis pulvinar. Quisque vulputate ornare euismod. Vestibulum odio libero, elementum id suscipit vitae, blandit vitae odio.`;
            irA("textoProgramacion");
            break;
        case "prg3":
            // Muestra y visualiza secciones
            document.getElementById("cOficina").style.display = "none";
            document.getElementById("cProgramacion").style.display = "none";
            document.getElementById("cIdioma").style.display = "none";
            document.getElementById("tituloSeccionOficina").style.display = "none";
            document.getElementById("tituloSeccionProgramacion").style.display = "none";
            document.getElementById("tituloSeccionIdiomas").style.display = "none";
            document.getElementById("textoProgramacion").style.display = "";

            //Modifica Elementos del formulario
            titPrg.innerHTML = "Programación WEB";
            parrafoHorarioPrg.innerHTML = `Lunes y Miércoles 10:00hs <br> Martes y Jueves 19:00hs`
            parrafoContenidoPrg.innerHTML = `Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam aliquam fermentum dui, sit amet lacinia leo. Vivamus lacus ante, posuere quis sem non, maximus varius quam. Donec nec porttitor sapien. Phasellus sollicitudin lectus orci, et ultricies eros mattis at. Quisque euismod finibus ante non cursus. Pellentesque tempor egestas gravida. Vivamus feugiat libero quis lectus posuere vulputate. Nam hendrerit scelerisque gravida. Donec auctor a neque sit amet congue.`;
            irA("textoProgramacion");
            break;
        case "prg4":
            // Muestra y visualiza secciones
            document.getElementById("cOficina").style.display = "none";
            document.getElementById("cProgramacion").style.display = "none";
            document.getElementById("cIdioma").style.display = "none";
            document.getElementById("tituloSeccionOficina").style.display = "none";
            document.getElementById("tituloSeccionProgramacion").style.display = "none";
            document.getElementById("tituloSeccionIdiomas").style.display = "none";
            document.getElementById("textoProgramacion").style.display = "";

            //Modifica Elementos del formulario
            titPrg.innerHTML = "Java";
            parrafoHorarioPrg.innerHTML = `Lunes y Miércoles 10:00hs <br> Martes y Jueves 19:00hs`
            parrafoContenidoPrg.innerHTML = `Nunc varius tortor tincidunt justo fermentum, vel egestas orci ultrices. Curabitur imperdiet, magna vitae eleifend venenatis, lorem magna ultricies tellus, ut finibus mauris purus eu lorem. Aliquam pellentesque consequat massa id molestie. Nam commodo viverra augue nec rhoncus. Mauris bibendum porttitor nunc, sit amet venenatis turpis aliquet a. Quisque vel velit eget leo porta ornare eget quis urna. Quisque venenatis leo et mollis luctus. Vestibulum lacinia sit amet est consequat finibus. Cras maximus blandit laoreet. Pellentesque ac cursus purus. Nunc laoreet est a orci feugiat, sed sagittis ex iaculis. Aliquam feugiat consequat est eget auctor. Morbi dapibus velit sit amet fringilla pretium. Cras vitae sapien vehicula, fringilla sapien in, ullamcorper lectus.`;
            irA("textoProgramacion");
            break;
        case "idiom1":
            // Muestra y visualiza secciones
            document.getElementById("cOficina").style.display = "none";
            document.getElementById("cProgramacion").style.display = "none";
            document.getElementById("cIdioma").style.display = "none";
            document.getElementById("tituloSeccionOficina").style.display = "none";
            document.getElementById("tituloSeccionProgramacion").style.display = "none";
            document.getElementById("tituloSeccionIdiomas").style.display = "none";
            document.getElementById("textoIdioma").style.display = "";

            //Modifica Elementos del formulario
            titIdioma.innerHTML = "Inglés I";
            parrafoHorarioIdioma.innerHTML = `Lunes y Miércoles 10:00hs <br> Martes y Jueves 19:00hs`
            parrafoContenidoIdioma.innerHTML = `Nunc varius tortor tincidunt justo fermentum, vel egestas orci ultrices. Curabitur imperdiet, magna vitae eleifend venenatis, lorem magna ultricies tellus, ut finibus mauris purus eu lorem. Aliquam pellentesque consequat massa id molestie. Nam commodo viverra augue nec rhoncus. Mauris bibendum porttitor nunc, sit amet venenatis turpis aliquet a. Quisque vel velit eget leo porta ornare eget quis urna. Quisque venenatis leo et mollis luctus. Vestibulum lacinia sit amet est consequat finibus. Cras maximus blandit laoreet. Pellentesque ac cursus purus. Nunc laoreet est a orci feugiat, sed sagittis ex iaculis. Aliquam feugiat consequat est eget auctor. Morbi dapibus velit sit amet fringilla pretium. Cras vitae sapien vehicula, fringilla sapien in, ullamcorper lectus.`;
            irA("textoIdioma");
            break;
        case "idiom2":
            // Muestra y visualiza secciones
            document.getElementById("cOficina").style.display = "none";
            document.getElementById("cProgramacion").style.display = "none";
            document.getElementById("cIdioma").style.display = "none";
            document.getElementById("tituloSeccionOficina").style.display = "none";
            document.getElementById("tituloSeccionProgramacion").style.display = "none";
            document.getElementById("tituloSeccionIdiomas").style.display = "none";
            document.getElementById("textoIdioma").style.display = "";

            //Modifica Elementos del formulario
            titIdioma.innerHTML = "Inglés II";
            parrafoHorarioIdioma.innerHTML = `Lunes y Miércoles 10:00hs <br> Martes y Jueves 19:00hs`
            parrafoContenidoIdioma.innerHTML = `Suspendisse at faucibus nisi. Aliquam quis hendrerit lorem, ac pulvinar libero. Mauris eu augue dolor. Suspendisse rhoncus malesuada augue non mollis. Ut sed volutpat risus, nec porttitor justo. Ut volutpat sit amet ipsum eu sodales. Ut feugiat id urna nec dictum. Duis at vehicula magna, et molestie est. Morbi ante nibh, pellentesque a mauris ultricies, posuere tincidunt nibh. Curabitur a ex quis enim iaculis venenatis ac dignissim justo. Vestibulum vestibulum tincidunt turpis, at posuere mi gravida ut.`;
            irA("textoIdioma");
            break;
        case "idiom3":
            // Muestra y visualiza secciones
            document.getElementById("cOficina").style.display = "none";
            document.getElementById("cProgramacion").style.display = "none";
            document.getElementById("cIdioma").style.display = "none";
            document.getElementById("tituloSeccionOficina").style.display = "none";
            document.getElementById("tituloSeccionProgramacion").style.display = "none";
            document.getElementById("tituloSeccionIdiomas").style.display = "none";
            document.getElementById("textoIdioma").style.display = "";

            //Modifica Elementos del formulario
            titIdioma.innerHTML = "Portugues";
            parrafoHorarioIdioma.innerHTML = `Lunes y Miércoles 10:00hs <br> Martes y Jueves 19:00hs`
            parrafoContenidoIdioma.innerHTML = `Integer at leo eu orci commodo egestas. Nullam eget eros feugiat, efficitur libero sit amet, euismod lacus. Aliquam et nibh non ex sagittis consectetur. Etiam tortor tortor, efficitur vitae magna eu, congue maximus augue. Sed at ullamcorper enim, eu scelerisque urna. In et eros orci. Nullam ut arcu eget mi ultrices aliquam quis eget eros.
             Duis sollicitudin eu neque ac finibus. Integer eget augue dignissim, condimentum diam sed, lobortis urna. Vivamus varius, nisl ac pretium ultricies, augue nulla placerat neque, sit amet pellentesque risus neque id nisi. Integer eget condimentum nulla, sit amet semper quam. Praesent viverra auctor ligula, id lacinia elit pharetra vitae. Mauris laoreet a urna in aliquam. Etiam sed nunc elit. Nulla nibh nibh, finibus in dapibus in, rhoncus sed dolor. Etiam id odio eros. Donec ut orci et diam elementum tincidunt. Donec sollicitudin neque sem, vel convallis turpis dignissim vitae. Nullam at neque efficitur, sodales velit et, tincidunt lorem. Ut at velit non purus viverra accumsan.`;
             irA("textoIdioma");
             break;
        case "idiom4":
            // Muestra y visualiza secciones
            document.getElementById("cOficina").style.display = "none";
            document.getElementById("cProgramacion").style.display = "none";
            document.getElementById("cIdioma").style.display = "none";
            document.getElementById("tituloSeccionOficina").style.display = "none";
            document.getElementById("tituloSeccionProgramacion").style.display = "none";
            document.getElementById("tituloSeccionIdiomas").style.display = "none";

            document.getElementById("textoIdioma").style.display = "";

            //Modifica Elementos del formulario
            titIdioma.innerHTML = "Italiano";
            parrafoHorarioIdioma.innerHTML = `Lunes y Miércoles 10:00hs <br> Martes y Jueves 19:00hs`
            parrafoContenidoIdioma.innerHTML = `Proin vehicula nibh sed cursus pellentesque. Duis scelerisque odio erat, non sodales mi facilisis et. Sed feugiat orci at diam efficitur vulputate. Maecenas ultricies, orci vitae blandit lacinia, neque libero varius erat, at efficitur tellus libero quis libero. Fusce justo mi, ornare imperdiet erat id, posuere imperdiet arcu. Nullam ut massa vel libero mattis scelerisque nec nec arcu. Morbi consectetur venenatis commodo. Vestibulum sed felis lobortis, tempor erat et, pellentesque augue. Quisque imperdiet ipsum non sapien blandit volutpat. Ut eu semper magna. In ultrices arcu at lorem pharetra vulputate. Mauris vitae massa in magna finibus pellentesque. Aliquam cursus nec massa non semper. Sed posuere mi eget imperdiet scelerisque. Mauris venenatis dui aliquet sagittis scelerisque. Mauris urna justo, iaculis quis accumsan sed, porta ut dui.`;
            irA("textoIdioma");
            break;
        default:
            break;

    }

}

document.getElementById("textoOficina").style.display = "none";
document.getElementById("textoProgramacion").style.display = "none";
document.getElementById("textoIdioma").style.display = "none";

const btnform = document.getElementsByClassName("botonImagen");
console.log(btnform);
for (let i = 0; i < btnform.length; i++) {
    btnform[i].addEventListener("click", accionCursos);

}


// Este código tenía la intención de evitar que al volver a la página
// de cursos, se fuera al comienzo y regresara a cada sección.

// const btnVolverIdioma = document.getElementById("volverIdioma");
// btnVolverIdioma.addEventListener("click", irA("tituloSeccionIdiomas"));

// const btnVolverPrg = document.getElementById("volverProg");
// btnVolverPrg.addEventListener("click", irA("tituloSeccionProgramacion"));
