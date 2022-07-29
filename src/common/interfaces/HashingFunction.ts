export interface HashingFunction {
  compare(data: string, encrypted: string): Promise<boolean>;
}
