export interface Response {
  json<O>(body: O): Response;
  status(statusCode: number): Response;
}
