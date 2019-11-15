class O{
    equals: any = [];
}

function eq(...args: O[]) {
    args.forEach(el1 => args.forEach(el2=>{
        if(el1 !== el2){
            el1.equals.push([el2,true]);
        }
    }));
}

function neq(...args: O[]) {
    args.forEach(el1 => args.forEach(el2=>{
        if(el1 !== el2){
            el1.equals.push([el2,false]);
        }
    }));
}

const Joachim = new O();
const President = new O();

const vierPlusDrei = new O();
const einsPlusSechs = new O();

eq(Joachim, President);
eq(vierPlusDrei, einsPlusSechs);
console.log(Joachim);
