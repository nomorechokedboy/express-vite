export interface UseCase<I, O> {
  exec(data: I): Promise<O>;
}
