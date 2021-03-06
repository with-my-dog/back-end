import { ApiModelProperty } from '@nestjs/swagger';

export default class UpdateAccountBodyDTO {
  @ApiModelProperty()
  public readonly newPassword: string;

  @ApiModelProperty()
  public readonly oldPassword: string;

  constructor(newPassword: string, oldPassword: string) {
    this.newPassword = newPassword;
    this.oldPassword = oldPassword;
  }
}
