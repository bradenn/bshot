import bodyParser from 'body-parser';
import express from 'express';
import config from '../config';
import routes from '../routes';

export default app => {

    /* System Health Checks */
    app.route('/status')
        .get((req, res) => res.status(200).end())
        .head((req, res) => res.status(200).end());

    /* Allow the API to receive JSON */
    /*app.use(bodyParser.json());*/
    app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
    app.use(bodyParser.json({limit: '10mb', extended: true}));
    app.use(express.static('public'))

    app.set('view engine', 'ejs');

    /* Helps with reverse proxy */
    app.enable('trust proxy');

    /* Define endpoint prefix */
    app.use('/', routes);

    /* Catch all unhandled requests */
    app.use((req, res, next) => {
        const err = new Error('Not Found');
        err['status'] = 404;
        next(err);
    });

    /* Handler all errors */
    app.use((err, req, res, next) => {
        return res.render('error', {error: err, code: err.code || 500})
    });

};
