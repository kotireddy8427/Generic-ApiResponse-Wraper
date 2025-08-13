Create Generic API Response Wrapper Class
"Create a `src/utils/ApiResponse.js` module in React:
- Implement a class `ApiResponse` that handles success and error responses.
- Include fields: status, data, message, errorCode, timestamp, requestId, pagination.
- Implement builder pattern: ApiResponse.success(data, options), ApiResponse.error(message, errorCode, options)."

Add Utility Functions
"Add utility functions in `ApiResponse.js`: generateRequestId() and formatTimestamp(), used automatically when building ApiResponse instances."

Axios Integration with Wrapper
"Create `src/api/httpClient.js` with Axios:
- On success, wrap response in ApiResponse.success.
- On error, wrap response in ApiResponse.error.
- Export configured Axios instance."

React Hook for API Calls
"Create `src/hooks/useApi.js`:
- Wrap async API calls.
- Use try/catch to handle errors.
- Always return ApiResponse instance.
- Provide { response, loading, execute }."
Demo Component
"Create `src/components/ApiResponseDemo.jsx`:
- Demonstrate calling a sample API.
- Display success and error responses using ApiResponse wrapper.
- Show metadata: timestamp, requestId, status, pagination.
- Buttons to simulate success and error API calls."

Prompt 6: App Entry Point
"Create `src/App.js` to render `ApiResponseDemo` component as the main app page."
