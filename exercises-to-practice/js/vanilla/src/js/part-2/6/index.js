import { users } from './users.interface.js';
import { doesExistValueInUsers } from './universal-searcher.js';

/* doesExistValueInUsers =>
  * (users, 'name', 'Alex') ✅
  * (users, 'id', 1) ✅
  * ([], 'name', 'Alex') ❌
  * ([], 'age', 20) ❌
  * (users, 'name', 'Pedro') ❌
*/
console.log(doesExistValueInUsers(users, 'a', 'dsad'));