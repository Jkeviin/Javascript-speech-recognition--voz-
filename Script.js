let rec;  // Crea una variable para guardar el objeto rec

if(!("webkitSpeechRecognition" in window)){  // Si no existe el objeto webkitSpeechRecognition en el navegador web
    /* WebkitSpeechRecognition es una interfaz que permite la transcripción de voz a texto en el navegador web.*/

    alert("Su navegador no es compatible con el reconocimiento de voz");  // Muestra un mensaje de alerta indicando que el navegador no es compatible con el reconocimiento de voz
}else{
    rec = new webkitSpeechRecognition(); // Crea un nuevo objeto webkitSpeechRecognition y lo asigna a la variable rec
    rec.continuous = true; // Indica que la transcripción de voz será continua
    rec.interimResults = true; // Indica que se mostrarán los resultados parciales de la transcripción de voz
    rec.lang = "es-CO"; // Indica el idioma del reconocimiento de voz a español colombiano
    rec.start(); // Inicia el reconocimiento de voz
    rec.onresult = function(event){ // Función que se ejecuta cuando se detecta un resultado de la transcripción de voz
        console.log(event) // Muestra en consola los resultados de la transcripción de voz
        console.log(event.resultIndex) // Muestra en consola el índice del resultado de la transcripción de voz

        let text = ""; // Crea una variable para guardar el texto de la transcripción de voz
        for(let i = event.resultIndex; i < event.results.length; i++){ // Recorre los resultados de la transcripción de voz hasta que se alcance el final de los resultados
            text += event.results[i][0].transcript; // Agrega el texto de la transcripción de voz a la variable text
        }
        if(text.toLowerCase().includes("abrir google")){ // Si el texto de la transcripción de voz contiene la palabra abrir
            rec.stop(); // Detiene el reconocimiento de voz
            //Se redireccina a la página de Google y cierra la actual
            window.location.href = "https://www.google.com";
        }
        if(text.toLowerCase().includes("abrir facebook")){ // Si el texto de la transcripción de voz contiene la palabra abrir
            rec.stop(); // Detiene el reconocimiento de voz
            //Se redirecciona a la página de Facebook y cierra la actual
            window.location.href = "https://www.facebook.com";
        }
        if(text.toLowerCase().includes("abrir youtube")){ // Si el texto de la transcripción de voz contiene la palabra abrir
            rec.stop(); // Detiene el reconocimiento de voz
            //Se redirecciona a la página de YouTube y cierra la actual
            window.location.href = "https://www.youtube.com";
        }
        if(text.toLowerCase().includes("abrir twitter")){ // Si el texto de la transcripción de voz contiene la palabra abrir
            rec.stop(); // Detiene el reconocimiento de voz
            //Se redirecciona a la página de Twitter y cierra la actual
            window.location.href = "https://www.twitter.com";
        }
        if(text.toLowerCase().includes("abrir instagram")){ // Si el texto de la transcripción de voz contiene la palabra abrir
            rec.stop(); // Detiene el reconocimiento de voz
            //Se redirecciona a la página de Instagram y cierra la actual
            window.location.href = "https://www.instagram.com";
        }
        if(text.toLowerCase().includes("abrir spotify")){ // Si el texto de la transcripción de voz contiene la palabra abrir
            rec.stop(); // Detiene el reconocimiento de voz
            //Se redirecciona a la página de Spotify y cierra la actual
            window.location.href = "https://www.spotify.com";
        }
        if(text.toLowerCase().includes("abrir pinterest")){ // Si el texto de la transcripción de voz contiene la palabra abrir
            rec.stop(); // Detiene el reconocimiento de voz
            //Se redirecciona a la página de Pinterest y cierra la actual
            window.location.href = "https://www.pinterest.com";
        }
        if(text.toLowerCase().includes("abrir linkedin")){ // Si el texto de la transcripción de voz contiene la palabra abrir
            rec.stop(); // Detiene el reconocimiento de voz
            //Se redirecciona a la página de LinkedIn y cierra la actual
            window.location.href = "https://www.linkedin.com";
        }
        if(text.toLowerCase().includes("abrir github")){ // Si el texto de la transcripción de voz contiene la palabra abrir
            rec.stop(); // Detiene el reconocimiento de voz
            //Se redirecciona a la página de GitHub y cierra la actual
            window.location.href = "https://www.github.com";
        }
        if(text.toLowerCase().includes("abrir stackoverflow")){ // Si el texto de la transcripción de voz contiene la palabra abrir
            rec.stop(); // Detiene el reconocimiento de voz
            //Se redirecciona a la página de StackOverflow y cierra la actual
            window.location.href = "https://www.stackoverflow.com";
        }
        if(text.toLowerCase().includes("abrir quora")){ // Si el texto de la transcripción de voz contiene la palabra abrir
            rec.stop(); // Detiene el reconocimiento de voz
            //Se redirecciona a la página de Quora y cierra la actual
            window.location.href = "https://www.quora.com";
        }
        if(text.toLowerCase().includes("abrir wikipedia")){ // Si el texto de la transcripción de voz contiene la palabra abrir
            rec.stop(); // Detiene el reconocimiento de voz
            //Se redirecciona a la página de Wikipedia y cierra la actual
            window.location.href = "https://www.wikipedia.org";
        }
        document.getElementById("texto").innerHTML = text;

        //Trucos para que el reconocimiento de voz se reinicie
        if(text.toLowerCase().includes("reiniciar")){ // Si el texto de la transcripción de voz contiene la palabra reiniciar
            rec.stop(); // Detiene el reconocimiento de voz
            rec.start(); // Inicia el reconocimiento de voz
        }
    }
}