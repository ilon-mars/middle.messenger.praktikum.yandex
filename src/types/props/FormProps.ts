export type FormProps = {
  name?: string;
  classes?: string[];
  attrs?: Record<string, string>;
  events?: Record<string, (e?: SubmitEvent) => void>;
  $style?: CSSModuleClasses;
};
