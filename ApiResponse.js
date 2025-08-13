import { v4 as uuidv4 } from "uuid";

export class ApiResponse {
  constructor({ status, data = null, message = "", errorCode = null, timestamp = null, requestId = null, pagination = null }) {
    this.status = status;           // "success" or "error"
    this.data = data;               // payload: object, array, or primitive
    this.message = message;         // success or error message
    this.errorCode = errorCode;     // string code for error
    this.timestamp = timestamp || new Date().toISOString();
    this.requestId = requestId || ApiResponse.generateRequestId();
    this.pagination = pagination;   // optional pagination info
  }

  static generateRequestId() {
    return uuidv4();
  }

  static success(data, options = {}) {
    return new ApiResponse({
      status: "success",
      data,
      message: options.message || "",
      requestId: options.requestId,
      pagination: options.pagination,
    });
  }

  static error(message, errorCode = null, options = {}) {
    return new ApiResponse({
      status: "error",
      message,
      errorCode,
      requestId: options.requestId,
    });
  }
}
