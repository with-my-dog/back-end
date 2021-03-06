import moment from 'moment';
import Account from '../../domain/model/account.model';

export default class UpdateAccountMapper {
  public readonly accountId: string;

  public readonly name: string;

  public readonly email: string;

  public readonly password: string;

  public readonly active: boolean;

  public readonly updatedAt: string;

  constructor(account: Account) {
    this.accountId = account.accountId;
    this.name = account.name;
    this.email = account.email;
    this.password = account.password;
    this.active = true;
    this.updatedAt = moment().format('YYYY-MM-DD HH:mm:ss');
  }
}
