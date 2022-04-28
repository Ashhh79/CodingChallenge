function getCounts(string){
    const result = {};

    const newString=str=>{
        let newStr='';
        for(let i=0;i<str.length;i++){
            if(str[i]!==" "){
                newStr+=str[i];
            }
            else{
                newStr+= str[i];
            };
        }
        return newStr;
    }

    strq=newString(string);
    console.log(strq);
    for (let i in string){
        result[string[i]] = (result[string[i]] || 0) + 1 ;
        
    }
    
    return result;
}

console.log(getCounts("hello world"));


// function countChar(string){
//     const count={};
//     string.split('').forEach(char => {
//         count[char] = count[char] ? (count[char] + 1):1;
//     });
//     return count;
// }


// console.log(countChar("akash kushwaha"));