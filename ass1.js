var char={
    word: "firefox",
    vowelcount: function(){
        var count=0
        for(var i=0; i <this.word.length; i++){
            if(this.word[i] == "a"||this.word[i] == "i"||this.word[i] == "e"||this.word[i] == "o"||this.word[i] == "u"){
                        count++
            }
        }
        return count;
    },
    riverse: function(){
        var riv=" "
        for(var i=this.word.length-1; i>=0; i--){
                riv +=this.word[i]
        }
        return riv
    },
       changecase: function(){
           var changed =" "
           for(var i=0; i <this.word.length; i++){
               if(this.word[i] == this.word[i].toUpperCase()){
                   changed +=this.word[i].toLowerCase()
               }else{
                   changed +=this.word[i].toUpperCase()
               }
           }
           return changed
       }
}
console.log(char.vowelcount())
console.log(char.riverse())
console.log(char.changecase())
