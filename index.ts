import { Publication } from './types/Publication';
import { LendingItem } from './types/LendingItem';

const firstPublication: Publication = {
  title: 'Мастер и Маргарита',
  author: 'Михаил Булгаков',
  year: 1967
};

const secondPublication: Publication = {
  title: '1984',
  author: 'Джордж Оруэлл',
  year: 1949
};

const firstItem = new LendingItem(firstPublication);
const secondItem = new LendingItem(secondPublication);

firstItem.borrow('Алексей Смирнов');
secondItem.borrow('Елена Козлова');
