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


import ApiClient from './ApiClient';
import CreateUserSchema from './model/CreateUserSchema';
import HTTPValidationError from './model/HTTPValidationError';
import OptionEnum from './model/OptionEnum';
import UpdateUserSchema from './model/UpdateUserSchema';
import ValidationError from './model/ValidationError';
import DefaultApi from './api/DefaultApi';
import UsersApi from './api/UsersApi';


/**
* JS API client generated by OpenAPI Generator.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var WouldYouRatherBackend = require('index'); // See note below*.
* var xxxSvc = new WouldYouRatherBackend.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new WouldYouRatherBackend.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new WouldYouRatherBackend.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new WouldYouRatherBackend.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 0.1.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The CreateUserSchema model constructor.
     * @property {module:model/CreateUserSchema}
     */
    CreateUserSchema,

    /**
     * The HTTPValidationError model constructor.
     * @property {module:model/HTTPValidationError}
     */
    HTTPValidationError,

    /**
     * The OptionEnum model constructor.
     * @property {module:model/OptionEnum}
     */
    OptionEnum,

    /**
     * The UpdateUserSchema model constructor.
     * @property {module:model/UpdateUserSchema}
     */
    UpdateUserSchema,

    /**
     * The ValidationError model constructor.
     * @property {module:model/ValidationError}
     */
    ValidationError,

    /**
    * The DefaultApi service constructor.
    * @property {module:api/DefaultApi}
    */
    DefaultApi,

    /**
    * The UsersApi service constructor.
    * @property {module:api/UsersApi}
    */
    UsersApi
};
