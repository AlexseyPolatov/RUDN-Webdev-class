import { Publication } from './Publication';
import { Lendable } from './Lendable';

export class LendingItem implements Lendable {
  info: Publication;

  constructor(info: Publication) {
    this.info = info;
  }

  borrow(userName: string): void {
    console.log(`Книга "${this.info.title}" выдана пользователю ${userName}`);
  }
}
