import { IPlayer } from '∼/common/interfaces/IPlayer';
import { IRow } from '∼/common/interfaces/IRow';

export interface IMainTable {
  players: IPlayer[];
  who: IRow[];
  weapon: IRow[];
  where: IRow[];
}
