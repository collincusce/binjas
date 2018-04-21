/* global describe, it, before */

import chai from 'chai';
import {binjas} from '../lib/binjas.js';

chai.expect();

const expect = chai.expect;

let lib;

describe('Given an instance of my BinaryParser library', () => {
  before(() => {
    lib = binjas;
  });
  describe('It should show a default of "be" for big-endian', () => {
    it('should be equalt to "big-endian"', () => {
      expect(lib.endian).to.be.equal('be');
    });
  });
});

