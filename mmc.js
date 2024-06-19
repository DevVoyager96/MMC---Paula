let x1
let x2
let resultados= 0

console.log("Digite 2 numeros  que deseja calcular o seu mmc:  ");
process.stdin.on("data", function (data) {
    let input= +data.toString().trim()
 
    if(!x1){
        x1=input
        let i 
        let maior
    }else{ 
        x2=input
      if(x1 > x2){
        i= x1;
      }else {
        i = x2
        maior = x2
      }
    for (i; i <= x1 * x2; i += maior ) {
     if (i% x1 == 0 && i % x2 ==0){
        console.log("MMC: "+i)
        break
     }
   

}}   
}  )