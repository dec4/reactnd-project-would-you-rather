# WouldYouRatherBackend.DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**readRootGet**](DefaultApi.md#readRootGet) | **GET** / | Read Root



## readRootGet

> Object readRootGet()

Read Root

### Example

```javascript
import WouldYouRatherBackend from 'would_you_rather_backend';

let apiInstance = new WouldYouRatherBackend.DefaultApi();
apiInstance.readRootGet((error, data, response) => {
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

