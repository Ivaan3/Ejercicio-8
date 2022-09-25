// Función sin parametro
TierraRedonda(true)
function TierraRedonda(){
   console.log("Si, es redonda")
}
// Función asíncrona
const Promesa = new Promise((resolve, reject)    => {
      if (true) {
         setTimeout(() => resolve(), 5000)
      } else {
         reject()
      }
})
Promesa
     .then(() => console.log("Hola soy una promesa"))
   .catch(() => console.log("ERROR"))
   .finally(() => console.log("Adios"))

//Función Generadora

function* Ipares(){
   let par = 0;
   while(true){
      yield par += 2
   }
}
const pares = Ipares();
console.log(pares.next())
console.log(pares.next())
console.log(pares.next())
console.log(pares.next())
console.log(pares.next())
console.log(pares.next())
console.log(pares.next())
console.log(pares.next())
console.log(pares.next())
console.log(pares.next())
console.log(pares.next())
