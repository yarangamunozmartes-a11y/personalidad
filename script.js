function generar(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

function analizar(){

    const nombre = document.getElementById("nombre").value;

    if(nombre===""){
        alert("Ingresa tu nombre");
        return;
    }

    document.getElementById("loading").classList.remove("hidden");
    document.getElementById("resultado").classList.add("hidden");

    setTimeout(()=>{

        const liderazgo = generar(60,100);
        const creatividad = generar(60,100);
        const disciplina = generar(40,100);
        const riqueza = generar(50,100);

        document.getElementById("loading").classList.add("hidden");

        document.getElementById("resultado").innerHTML=`

        <div class="card">

        <h2>${nombre}</h2>

        <p>Potencial de Liderazgo: ${liderazgo}%</p>
        <div class="bar" style="width:${liderazgo}%"></div>

        <p>Creatividad: ${creatividad}%</p>
        <div class="bar" style="width:${creatividad}%"></div>

        <p>Disciplina: ${disciplina}%</p>
        <div class="bar" style="width:${disciplina}%"></div>

        <p>Probabilidad de Éxito Financiero: ${riqueza}%</p>
        <div class="bar" style="width:${riqueza}%"></div>

        <br>

        <h3>
        ${
            riqueza>85
            ? "🚀 Tienes perfil de emprendedor."
            : riqueza>70
            ? "💡 Tienes gran potencial para crecer."
            : "🔥 Tu crecimiento dependerá de tus hábitos."
        }
        </h3>

        </div>

        `;

        document.getElementById("resultado").classList.remove("hidden");

    },3000);
}
