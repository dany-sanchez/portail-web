export interface Document {
  id: string;
  name: string;
  updated: { seconds: number, nanoseconds: number };
  downloadUrl: string;
  type: string;
  size: number;
}
