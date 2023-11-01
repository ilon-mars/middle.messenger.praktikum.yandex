export enum LinkEnum {
  LOGIN = '',
  REGISTER = 'registration',
  PROFILE = 'profile',
  CHAT = 'chat',
  NOT_FOUND = '400',
  SERVER_ERROR = '500',
  EDIT_PROFILE = 'edit-profile',
  EDIT_PASSWORD = 'edit-password',
}

export enum RouterLinkEnum {
  LOGIN = `/${LinkEnum.LOGIN}`,
  REGISTER = `/${LinkEnum.REGISTER}`,
  PROFILE = `/${LinkEnum.PROFILE}`,
  CHAT = `/${LinkEnum.CHAT}`,
  NOT_FOUND = `/${LinkEnum.NOT_FOUND}`,
  SERVER_ERROR = `/${LinkEnum.SERVER_ERROR}`,
  EDIT_PROFILE = `/${LinkEnum.EDIT_PROFILE}`,
  EDIT_PASSWORD = `/${LinkEnum.EDIT_PASSWORD}`,
}
