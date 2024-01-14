declare module '*.module.sass' {
  const classNames: Record<string, string>;
  export default classNames;
}

declare module '*.svg' {
  const content: () => void;
  export default content;
}
