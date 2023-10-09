import { RouteLink } from '../RouteLink';

export type ButtonProps = {
  hasIcon: boolean;
  events?: Record<string, () => void>;
} & RouteLink;
