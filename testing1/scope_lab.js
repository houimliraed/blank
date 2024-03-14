// global scope
var globalVar = "I am a global variable";
let globallet = "I am a global let variable";
const globalconst = "I am a global constant";

{
    //block scope
    var blockVar = "I'm a block-scoped var";
    let blockLet = "I'm a block-scoped let";
    const blockConst = "I'm a block-scoped const";

}

console.log(blockVar);
console.log(blockLet);
console.log(blockConst);