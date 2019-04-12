'use strict';

const Q = require('@nmq/q/server');
Q.start();

const db = new Q('database');
const fileDb = new Q('files');

//Events being monitored for the database namespace
db.monitorEvent('create');
db.monitorEvent('update');
db.monitorEvent('delete');
db.monitorEvent('read');
db.monitorEvent('error');

//Events being monitored for the files namespace
fileDb.monitorEvent('save');
fileDb.monitorEvent('error');