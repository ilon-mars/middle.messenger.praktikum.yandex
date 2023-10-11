export type FormProps = {
  name?: string;
  classes?: string[];
  attrs?: Record<string, string>;
  events?: Record<string, (e?: Event) => void>;
  $style?: CSSModuleClasses;
};
