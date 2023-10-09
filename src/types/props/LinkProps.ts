import { RouteLink } from '../RouteLink';

export type LinkProps = {
  events?: Record<string, () => void>;
} & RouteLink;
