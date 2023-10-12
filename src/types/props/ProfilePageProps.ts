import { RedirectTo } from '../RouteLink';

export type ProfilePageProps = {
  goBack: RedirectTo;
  editProfile: RedirectTo;
  editPassword: RedirectTo;
  logout: RedirectTo;
  cards?: { caption: string; text: string }[];
};
