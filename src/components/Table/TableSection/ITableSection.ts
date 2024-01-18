import { IRow } from '∼/common/interfaces/IRow';

export interface ITableSection {
  title: string;
  columnNumber: number;
  rows: IRow[];
}
