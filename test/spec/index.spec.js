
import expect from 'expect';
import mongoose from 'mongoose';
import {map} from 'lodash';

import testSchema from './../fixtures/schema';
import pkg from './../../package.json';

import encodeKeysPlugin from './../../src';

describe('Plugin', () => {
  const mongoUri = process.env.MONGODB_URI || `mongodb://127.0.0.1:27017/test-${pkg.name}`;
  mongoose.set('debug', true);
  const db = mongoose.createConnection(mongoUri);
  const Model = db.model('Foo', testSchema);

  before(() => Promise.all([
    Model.remove({})
  ]));
  it('constructor should export a function', () => {
    expect(encodeKeysPlugin).toBeA('function');
  });
  // @TODO test $pushAll
  // it('should properly save one document', () => {
  //   const orig = {name: 'save', content: {bar: 'baz'}};
  //   return Model.create(orig)
  //     .then((doc) => {
  //       expect(doc.content).toEqual(orig.content);
  //       return Model.findOne({_id: doc.id});
  //     })
  //     .then((doc) => {
  //       expect(doc.content).toEqual(orig.content);
  //     });
  // });
  // it('should properly save several documents', () => {
  //   const origA = {name: 'saveA', content: {bar: 'baz'}};
  //   const origB = {name: 'saveB', content: {bar: 'baz'}};
  //   return Model.create([origA, origB])
  //     .then((docs) => {
  //       docs.forEach((doc) => {
  //         expect(doc.content).toEqual(origA.content);
  //       });
  //       return Model.find({_id: {$in: map(docs, 'id')}});
  //     })
  //     .then((docs) => {
  //       docs.forEach((doc) => {
  //         expect(doc.content).toEqual(origA.content);
  //       });
  //     });
  // });
  // it('should properly update one document', () => {
  //   const orig = {name: 'update', content: {bar: 'baz'}};
  //   const udpate = {content: {bar: 'baz2'}};
  //   return Model.create(orig)
  //     .then((doc) => {
  //       expect(doc.content).toEqual(orig.content);
  //       return Model.update({_id: doc.id}, udpate).then(() => doc);
  //     })
  //     .then(doc => Model.findOne({_id: doc.id}))
  //     .then((doc) => {
  //       expect(doc.content).toEqual(udpate.content);
  //     });
  // });
  // it('should properly support find without results', () => (
  //   Model.findOne({name: 'foo'})
  // ));
  // it('should properly support update  results', () => (
  //   Model.update({name: 'foo'}, {})
  // ));
});
