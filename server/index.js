const Koa = require('koa');
const socketIO = require('socket.io');

const app = new Koa();
const server = app.listen(3000);

const io = socketIO(server);
let i = 0;

//this makes sure we have unique task IDs when starting an stopping rhe server


let randomInt = Math.round(Math.random()*100);
let randomChange = Math.round(Math.random()*4-2);

let baseTaskID = randomInt;
let data=[
    {
        key:1,
        sym:'HNX',
        price: randomInt,
        //change: randomChange,
        high:'unidentified',
        low:'unidentified'
    },
    {
        key:2,
        sym:'BID',
        price: randomInt,
        //change: randomChange,
        high:'unidentified',
        low:'unidentified'
    },
    {
        key:3,
        sym:'CTD',
        price: randomInt,
        //change: randomChange,
        high:'unidentified',
        low:'unidentified'
    },
    {
        key:4,
        sym:'NVL',
        price: randomInt,
        //change: randomChange,
        high:'unidentified',
        low:'unidentified'
    },
    {
        key:5,
        sym:'PNJ',
        price: randomInt,
        //change: randomChange,
        high:'unidentified',
        low:'unidentified'
    }
]
console.log('Server started');
//setInterval(() => i++, 2000);

io.on("connection", (socket) => {
    console.log("Connection opened");
    setInterval(() => {
        data.forEach(element => {
            let change=randomChange
            element.price = element.price + change
        });

        socket.emit("newPrice", data)
    }
    , 3000
    )
    console.log(data)
});
