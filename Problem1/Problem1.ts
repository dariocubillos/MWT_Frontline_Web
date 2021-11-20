interface BintreeNode {
    id?: string | number,
    left?: BintreeNode,
    right?: BintreeNode
}

let result:BintreeNode = {};
let input = ["a", ["b"], ["c"]];
let input2 = [1, [2], [3, null,[5]]];

function convertion(result:BintreeNode, data:Array<any>):BintreeNode {
    for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) { 
            const index:number = +key;
            switch (index) {
                case 0:
                    result.id = data[key];
                    break;
                case 1:
                    result.left = Array.isArray(data[key]) ? convertion({},data[key]) : data[key];
                    break;
                case 2:
                    result.right =  Array.isArray(data[key]) ? convertion({},data[key]) : data[key];
                    break;
            }
        }
    }
    return result;
}

console.log(JSON.stringify(convertion(result,input2)));
