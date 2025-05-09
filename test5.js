function reverseString(str){
    return Array.from(str).reduce((reversed, c) => c + reversed, "")
}

//Adicionei a string invertida, quando der o console.log ficará mais bonito
console.log(reverterString("!sametsiS tegraT olleH"));