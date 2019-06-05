export interface IBook {
  id: number;
  title: string;
  authorsId: number[];
  pages: number;
  publishing?: string;
  year?: number;
  publishingDate?: string;
  isbn?: string;
  bookCoverId?: number;
}
