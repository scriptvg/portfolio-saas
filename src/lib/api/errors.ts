export class ApiClientError extends Error {
  readonly statusCode: number | undefined

  constructor(message: string, statusCode?: number) {
    super(message)
    this.name = "ApiClientError"
    this.statusCode = statusCode
  }
}

export function isApiClientError(error: unknown): error is ApiClientError {
  return error instanceof ApiClientError
}

export function isUnauthorizedError(error: unknown): boolean {
  return isApiClientError(error) && error.statusCode === 401
}
