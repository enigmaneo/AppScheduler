import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config';
import open from 'open';
import bodyParser from 'body-parser';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(bodyParser.json());

const schedules = [
    {
        id: 9,
        time: "9:00am",
        contact: null
    },
    {
        id: 10,
        time: "10:00am",
        contact: null
    },
    {
        id: 11,
        time: "11:00am",
        contact: {
            name: 'Homer Simpson',
            phoneNumber: '636-555-7334'
        }
    },
    {
        id: 12,
        time: "12:00pm",
        contact: {
            name: "",
            phoneNumber: ""
        }
    },
    {
        id: 13,
        time: "1:00pm",
        contact: {
            name: "",
            phoneNumber: ""
        }
    },
    {
        id: 14,
        time: "2:00pm",
        contact: {
            name: "",
            phoneNumber: ""
        }
    },
    {
        id: 15,
        time: "3:00pm",
        contact: {
            name: "",
            phoneNumber: ""
        }
    },
    {
        id: 16,
        time: "4:00pm",
        contact: {
            name: "",
            phoneNumber: ""
        }
    },
    {
        id: 17,
        time: "5:00pm",
        contact: {
            name: "",
            phoneNumber: ""
        }
    }
];

app.get('/api/schedule', (req, res) => {
    res.json(schedules);
});

app.post('/api/schedule', (req, res) => {
    const schedule = req.body;
    const scheduleToUpdate = schedules.filter((s) => {
        return s.id === schedule.id;
    })[0];

    scheduleToUpdate.contact = schedule.contact;
    res.json(scheduleToUpdate);
});

app.get('*', (req, res) => {
    res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open(`http://localhost:${port}`);
    }
});