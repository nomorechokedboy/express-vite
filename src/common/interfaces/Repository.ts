export interface Repository<T> {
  findOne<F>(filter: F): Promise<T>;
}
