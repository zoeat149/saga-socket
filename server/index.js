const Koa = require('koa');
const socketIO = require('socket.io');

const app = new Koa();
const server = app.listen(3000);

const io = socketIO(server);
let i = 0;

//this makes sure we have unique task IDs when starting an stopping rhe server


//let randomInt = Math.round(Math.random()*100);
//let randomChange = Math.round(Math.random()*4-2);

//let baseTaskID = randomInt;
//var x=

let data=[
    {
        key:1,
        sym:'HNX',
        price: 0,
        //change: randomChange,
        high:'unidentified',
        low:'unidentified'
    },
    {
        key:2,
        sym:'BID',
        price: 0,
        //change: randomChange,
        high:'unidentified',
        low:'unidentified'
    },
    {
        key:3,
        sym:'CTD',
        price: 0,
        //change: randomChange,
        high:'unidentified',
        low:'unidentified'
    },
    {
        key:4,
        sym:'NVL',
        price: 0,
        //change: randomChange,
        high:'unidentified',
        low:'unidentified'
    },
    {
        key:5,
        sym:'PNJ',
        price: 0,
        //change: randomChange,
        high:'unidentified',
        low:'unidentified'
    }
]

data.forEach(element => {
    element.price= randomPrice();
});

setInterval(() => {
    data.forEach(element => {
        let old=element.price
        element.price=old+ randomChange()
    });
    },
    5000
);

function randomPrice(){
    return Math.round(Math.random()*100)
}

function randomChange(){
    return Math.round(Math.random()*4-2)
}

console.log('Server started');
//setInterval(() => i++, 2000);

io.on("connection", (socket) => {
    console.log("Connection opened");
    setInterval(() => {
    //     data.forEach(element => {
    //        let change=randomChange()
    //        element.price = element.price + change
    //    });

        socket.emit("newPrice", data)
		//console.log(data)
    }
    , 5000
    )
    
});
