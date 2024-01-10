import { ErrorPageContent } from '../ErrorPageContent.ts';
import { RouteLink } from '../RouteLink.ts';

export type ErrorPageProps = {
  linkProps: RouteLink;
  pageText: ErrorPageContent;
};
