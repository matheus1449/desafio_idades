var idade=prompt ('digite sua idade:')
var criança= 15
var jovem= 30
var adulto=60

if (idade <= criança){
    document.write('<h3>Você é uma criança!</h3>')
}
else if (idade > criança && idade < jovem) {
    document.write('<h3>Você já é jovem!</h3>')
}
else if (idade > jovem && idade < adulto) {
    document.write('<h3>Você é um adulto!</h3>')
}else{
    document.write('<h3>Você é um idoso!</h3>')
}

