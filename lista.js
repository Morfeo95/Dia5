let frutas = [];
let lacteos =[];
let congelados = [];
let dulces = [];

function lista(){
   let registrar = 1;
   while (registrar == 1){
        registrar = prompt("¿Desea registrar prductos? (1)Si (2)No");
        if (registrar == 1){
            let producto = prompt("¿Que producto deseas registrar?");
            let categoria = prompt("¿A que categoria deberia asignarse? (1)Frutas (2)Lacteos (3)Congelados (4)Dulces");
            if (categoria == 1 ){
                frutas.push(producto);
            }
            else if (categoria == 2){
                lacteos.push(producto);
            }
            else if (categoria == 3){
                congelados.push(producto);
            }
            else if (categoria == 4){
                dulces.push(producto);
            }
            else{
                alert("categoria desconosida");
            }
        }
        else{
            break
        }
        
   }
   let section = document.getElementById("sec");
   section.innerHTML = ""
   let p = document.createElement("p")
   p.id=("lista")
   p.innerHTML="Frutas: <br>"+frutas.join("<br>")+"<br> Lacteos <br>"+lacteos.join("<br>")+"<br> Congelados: <br>"+congelados.join("<br>")+" <br> Dulces: <br>"+dulces.join("<br>");
   section.appendChild(p)
   section.style.alignItems("start")
}