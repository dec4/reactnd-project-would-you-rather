# WouldYouRatherBackend.UsersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUserUsersCreatePost**](UsersApi.md#createUserUsersCreatePost) | **POST** /users/create | Create User
[**deleteUserUsersDeleteUserIdDelete**](UsersApi.md#deleteUserUsersDeleteUserIdDelete) | **DELETE** /users/delete/{user_id} | Delete User
[**getAllUsersAllGet**](UsersApi.md#getAllUsersAllGet) | **GET** /users/all | Get All
[**getUserUsersGetUserIdGet**](UsersApi.md#getUserUsersGetUserIdGet) | **GET** /users/get/{user_id} | Get User
[**indexRouteUsersGet**](UsersApi.md#indexRouteUsersGet) | **GET** /users/ | Index Route
[**updateUserUsersUpdatePut**](UsersApi.md#updateUserUsersUpdatePut) | **PUT** /users/update | Update User



## createUserUsersCreatePost

> Object createUserUsersCreatePost(createUserSchema)

Create User

### Example

```javascript
import WouldYouRatherBackend from 'would_you_rather_backend';

let apiInstance = new WouldYouRatherBackend.UsersApi();
let createUserSchema = new WouldYouRatherBackend.CreateUserSchema(); // CreateUserSchema | 
apiInstance.createUserUsersCreatePost(createUserSchema, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUserSchema** | [**CreateUserSchema**](CreateUserSchema.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteUserUsersDeleteUserIdDelete

> Object deleteUserUsersDeleteUserIdDelete(userId)

Delete User

### Example

```javascript
import WouldYouRatherBackend from 'would_you_rather_backend';

let apiInstance = new WouldYouRatherBackend.UsersApi();
let userId = "userId_example"; // String | 
apiInstance.deleteUserUsersDeleteUserIdDelete(userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllUsersAllGet

> Object getAllUsersAllGet()

Get All

### Example

```javascript
import WouldYouRatherBackend from 'would_you_rather_backend';

let apiInstance = new WouldYouRatherBackend.UsersApi();
apiInstance.getAllUsersAllGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserUsersGetUserIdGet

> Object getUserUsersGetUserIdGet(userId)

Get User

### Example

```javascript
import WouldYouRatherBackend from 'would_you_rather_backend';

let apiInstance = new WouldYouRatherBackend.UsersApi();
let userId = "userId_example"; // String | 
apiInstance.getUserUsersGetUserIdGet(userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## indexRouteUsersGet

> Object indexRouteUsersGet()

Index Route

### Example

```javascript
import WouldYouRatherBackend from 'would_you_rather_backend';

let apiInstance = new WouldYouRatherBackend.UsersApi();
apiInstance.indexRouteUsersGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateUserUsersUpdatePut

> Object updateUserUsersUpdatePut(updateUserSchema)

Update User

### Example

```javascript
import WouldYouRatherBackend from 'would_you_rather_backend';

let apiInstance = new WouldYouRatherBackend.UsersApi();
let updateUserSchema = new WouldYouRatherBackend.UpdateUserSchema(); // UpdateUserSchema | 
apiInstance.updateUserUsersUpdatePut(updateUserSchema, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateUserSchema** | [**UpdateUserSchema**](UpdateUserSchema.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

