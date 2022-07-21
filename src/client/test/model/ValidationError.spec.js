/**
 * Would You Rather Backend
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.WouldYouRatherBackend);
  }
}(this, function(expect, WouldYouRatherBackend) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new WouldYouRatherBackend.ValidationError();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ValidationError', function() {
    it('should create an instance of ValidationError', function() {
      // uncomment below and update the code to test ValidationError
      //var instance = new WouldYouRatherBackend.ValidationError();
      //expect(instance).to.be.a(WouldYouRatherBackend.ValidationError);
    });

    it('should have the property loc (base name: "loc")', function() {
      // uncomment below and update the code to test the property loc
      //var instance = new WouldYouRatherBackend.ValidationError();
      //expect(instance).to.be();
    });

    it('should have the property msg (base name: "msg")', function() {
      // uncomment below and update the code to test the property msg
      //var instance = new WouldYouRatherBackend.ValidationError();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new WouldYouRatherBackend.ValidationError();
      //expect(instance).to.be();
    });

  });

}));
