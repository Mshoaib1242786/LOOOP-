function creatForLoop(){
    let table= document.getElementById("creatLoop$").value;
       
    for (let index = 1; index <= 5; index++) {
        document.write(
            `<h1>${table} x ${index} = ${table * index}</h1>`);
           
            for (let index = 1; index <= 10; index++) {
                document.write(
                    `<h1>${table} x ${index} = ${table * index}</h1>`);
            
        
}
}
}