const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// let workData = [{"date":1483308000,"data":{"startDate":1483336800,"endDate":1483340400}},{"date":1483394400,"data":{"startDate":1483423200,"endDate":1483426800}},{"date":1483480800,"data":{"startDate":1483509600,"endDate":1483513200}},{"date":1483567200,"data":{"startDate":1483596000,"endDate":1483599600}}]

let workData = [];

// *** REST API Events***

// LIST
app.get('/workData', (req, res) => {
    res.json(workData);
})

// // READ
// app.get('/event/:id', (req, res) => {
//     const id = req.params.id;
//     const event = events.find(currItem => currItem.id === id);
//     res.json(event);
// })

// // DELETE
// app.delete('/event/:id', (req, res) => {
//     const id = req.params.id;
//     events = events.filter(currItem => currItem.id !== id);
//     res.json({ msg: 'event was Deleted!' });
// })

// CREATE
app.post('/workData', (req, res) => {
    const item = req.body;
    console.log('item' , item)
    item.id = req.body.date;
    workData.push(item);
    res.json(workData);

})

// //UPDATE
// app.put('/event', (req, res) => {
//     const item = req.body;
//     events = events.map(currItem => currItem.id === item.id ? item : currItem)
//     res.json({ msg: 'event was updated!' });
// });
// /********************************************************************************************* */
// // *** REST API Places***

// // LIST
// app.get('/place', (req, res) => {
//     res.json(places);
// })

// // READ
// app.get('/place/:id', (req, res) => {
//     const id = req.params.id;
//     const place = places.find(currItem => currItem.id === id);
//     res.json(place);
// })

// // DELETE
// app.delete('/place/:id', (req, res) => {
//     const id = req.params.id;
//     places = places.filter(currItem => currItem.id !== id);
//     res.json({ msg: 'place was Deleted!' });
// })

// // CREATE
// app.post('/place', (req, res) => {
//     const item = req.body;
//     item.id = guid();
//     places.push(item);
//     res.json({ msg: 'place was Created!' });

// })

// //UPDATE
// app.put('/place', (req, res) => {
//     const item = req.body;
//     places = places.map(currItem => currItem.id === item.id ? item : currItem)
//     res.json({ msg: 'place was Updated!' });
// });

// /********************************************************************************************* */
// // *** REST API Emails***


// // LIST
// app.get('/email', (req, res) => {
//     res.json(emails);
// })

// // READ
// app.get('/email/:id', (req, res) => {
//     console.log(req.params.id);
//     const id = req.params.id;
//     const email = emails.find(currItem => currItem.id === id);
//     email.isRead = true;
//     res.json(email);
// })

// // DELETE
// app.delete('/email/:id', (req, res) => {
//     const id = req.params.id;
//     emails = emails.filter(currItem => currItem.id !== id);
//     res.json({ msg: 'email was Deleted!' });
// })

// // CREATE
// app.post('/email', (req, res) => {
//     const item = req.body;
//     item.id = guid();
//     emails.unshift(item);
//     res.json({ msg: 'email was Created!' });

// })

// //UPDATE
// // app.put('/email', (req, res) => {
// //   const item = req.body;
// //   emails = emails.map(currItem => currItem.id === item.id ? item : currItem)
// //   res.json({msg:'email was Updated!'});
// // });

// // -----------------------------------------

app.listen(3003, () => {
    console.log('REST API listening on port 3003!')
})

// function guid() {
//     function s4() {
//         return Math.floor((1 + Math.random()) * 0x10000)
//             .toString(16)
//             .substring(1);
//     }
//     return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
//         s4() + '-' + s4() + s4() + s4();
// }

// function findNextId(array) {
//     var maxId = -1;
//     array.forEach(item => {
//         if (+item.id > maxId) maxId = +item.id;
//     });
//     return +maxId + 1;
// }
