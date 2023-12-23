import { LinkEnum } from '@/enums';
import { ProfilePageProps } from '@/types';

export const PROFILE_PAGE: ProfilePageProps = {
  goBack: `/${LinkEnum.CHAT}`,
  editProfile: `/${LinkEnum.EDIT_PROFILE}`,
  editPassword: `/${LinkEnum.EDIT_PASSWORD}`,
  logout: `/${LinkEnum.LOGIN}`,
};
