// task 1
let Obj = {};
Obj.PointA=[0,6]; // x,y
Obj.PointB=[3,-2];

Obj.Width = () => Math.abs(Obj.PointA[0] - Obj.PointB[0]);
Obj.Height = () => Math.abs(Obj.PointA[1] - Obj.PointB[1]);
Obj.Area = () => Obj.Width() - Obj.Height();
Obj.Perim = () => (Obj.Width()*2) - (Obj.Height()*2);
Obj.ChangeHeight = (a) => {
    if (Obj.PointA[1] > Obj.PointB[1]) Obj.PointA[1] += a;
    else Obj.PointB[1] += a;
};
Obj.ChangeWidth = (a) => {
    if (Obj.PointA[0] > Obj.PointB[0]) Obj.PointA[0] += a;
    else Obj.PointB[0] += a;
}
Obj.ChangeSize = (a, b) => {
    Obj.ChangeHeight(b);
    Obj.ChangeWidth(a);
}
Obj.MoveByX = (a) => {
    Obj.PointA[0] += a;
    Obj.PointB[0] += a;
}
Obj.MoveByY = (a) => {
    Obj.PointA[1] += a;
    Obj.PointB[1] += a;
}
Obj.Move = (a, b) => {
    Obj.MoveByX(a);
    Obj.MoveByY(b);
}
Obj.Contains = (a, b) => {
    if (Math.min(Obj.PointA[0], Obj.PointB[0]) <= a <= Math.max(Obj.PointA[0], Obj.PointB[0]) &&
        Math.min(Obj.PointA[1], Obj.PointB[1]) <= b <= Math.max(Obj.PointA[1], Obj.PointB[1]))
    return true
}

// task 2

let ar1 = [];
for (let i = 0; i < 10; i++) ar1.push(parseInt(Math.random()*10));

function display(ar1){ for (let i = 0; i < ar1.length; i++) console.log(ar1[i]); }
function showEven(ar1) { for (let i = 0; i < ar1.length; i++) if (ar1[i] % 2 === 0)console.log(ar1[i]);}
function GetSum(ar1) { let a = 0; for (let i = 0; i < ar1.length; i++) a += ar1[i]; return a;}
function GetMax(ar1) { let a = -10; for (let i = 0; i < ar1.length; i++) if (a < ar1[i]) a = ar1[i]; return a;}
function MyInsert(ar1, ind, val) {
    let temp = [];
    for (let i = 0; i < ind; i++) temp.push(ar1[i]);
    temp.push(val);
    for (let i = ind; i < ar1.length; i++) temp.push(ar1[i]);
    return temp;
}
function MyPop(ar1, ind){
    let temp = [];
    for (let i = 0; i < ind; i++) temp.push(ar1[i]);
    for (let i = ind+1; i < ar1.length; i++) temp.push(ar1[i]);
    return temp;
}

// task 3

let ar2 = [];
for (let i = 0; i < 5; i++) ar2.push(parseInt(Math.random()*10));

function UniqueCombine(ar1, ar2){
    let temp = [];
    for (let i = 0; i < ar1.length; i++) if(!temp.Contains(ar1[i])) temp.push(ar1[i]);
    for (let i = 0; i < ar2.length; i++) if(!temp.Contains(ar2[i])) temp.push(ar2[i]);
    return temp;
}

function CommonElements(ar1, ar2){
    let temp = [];
    for (let i = 0; i < ar1.length; i++) if(ar2.Contains(ar1[i]) && !temp.Contains(ar1[i])) temp.push(ar1[i]);
    return temp;
}

function UniqueElements(ar1, ar2){
    let temp = [];
    for (let i = 0; i < ar1.length; i++) if(ar2.Contains(ar1[i]) && !temp.Contains(ar1[i])) temp.push(ar1[i]);
    for (let i = 0; i < ar2.length; i++) if(ar1.Contains(ar2[i]) && !temp.Contains(ar2[i])) temp.push(ar2[i]);
    return temp;
}

// task 4

let buyList = [];
buyList.push({
    Name: "Tomato",
    Quant: 3,
    IsBought: false
});
buyList.push({
    Name: "Cheese",
    Quant: 4,
    IsBought: false
})
buyList.push({
    Name: "Grape",
    Quant: 1,
    IsBought: false
})


function ShowList(a){
    a.forEach(item => {
        if (!item.IsBought) console.log(item)
    })
    a.forEach(item => {
        if (item.IsBought) console.log(item)
    })
}

function AddBuy(a, prod){
    let temp = a.find((b) => prod.Name === b.Name);
    if (temp) {
        temp.Quant += prod.Quant;
    }
    else a.push(prod);
}

function SetBought(a, prod){
    (a.find((b) => prod === b.Name) ?? {}).IsBought = true;
}

SetBought(buyList, "Grape");
console.log(buyList);


// task 5

let chek = [
    {
        Name: "Tomato",
        Quant: 1,
        Price: 10
    },
    {
        Name: "Cheese",
        Quant: 4,
        Price: 25
    },
    {
        Name: "Grape",
        Quant: 2,
        Price: 40
    }
];

function GetSumCheck(a){
    let temp = 0;
    return a.forEach(item => temp += item.Price * item.Quant);
}

function ShowCheck(a){
    a.forEach(item => {console.log(`${item.Name}: $${item.Price} * ${item.Quant} =   \t $${item.Price*item.Quant}`)});
    console.log(`
Total: $${GetSumCheck(a)}`);
}

function Expensivest(a){ // Are you from England, America?
    let temp = {
        Price: -1,
        Quant: 1
    };
    a.forEach(item => {if (item.Price*item.Quant > temp.Price*temp.Quant) {temp = item;}});
    return temp;
}

function AverageCheck(a){
    let temp = {
        Price: 0,
        Quant: 0,
    };
    a.forEach(item => {temp.Price += item.Price; temp.Quant += item.Quant;});
    return temp.Price/temp.Quant;
}
