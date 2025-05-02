let count=0


function Smile(){
    count+=1
    console.log(count)
    document.getElementById("smiles").innerText= count
}
function Save(){
    let spare=" - "
    document.getElementById("count").innerText+= count+spare
    count=0
    document.getElementById("smiles").innerText=0
}