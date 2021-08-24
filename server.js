// const io = require('socket.io')(5000)
const app = express();
const cors = require("cors")
const path = require("path")
const baseUrl = "https://chat-app-28.herokuapp.com"


const io = require("socket.io")(5000, {
    cors: {
        origin: { baseUrl }
    }
});

//  heroku config
app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

io.on('connection', socket => {
    const id = socket.handshake.query.id
    socket.join(id)

    socket.on('send-message', ({ recipients, text }) => {
        recipients.forEach(recipient => {
            const newRecipients = recipients.filter(r => r !== recipient)
            newRecipients.push(id)
            socket.broadcast.to(recipient).emit('receive-message', {
                recipients: newRecipients, sender: id, text
            })
        })
    })
})