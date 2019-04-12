'use strict';

const Q = require('@nmq/q/client');

const db = new Q('database');
const fileDb = new Q('files');

//Events being subscribed to for the database namespace

db.subscribe('delete', (payload) => {
  console.log('deleted stuff: ', payload);
});

db.subscribe('update', (payload) => {
  console.log('updated stuff: ', payload);
});

db.subscribe('read', (payload) => {
  console.log('read stuff: ', payload);
});

db.subscribe('create', (payload) => {
  console.log('created stuff: ', payload);
});

db.subscribe('error', (payload) => {
  console.log('Something went wrong: ', payload);
});

//Events being subscribed to for the files namespace

fileDb.subscribe('save', (payload) => {
  console.log('saved a file: ', payload);
});

fileDb.subscribe('error', (payload) => {
  console.log('error happened when saving a file', payload);
});

console.log('current database subscriptions: ', db.subscriptions());
console.log('current file subscriptions', fileDb.subscriptions());
