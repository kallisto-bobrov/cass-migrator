const preventScriptInjection = (str?: string) =>
  str?.includes('<script') ? '...' : str;

export default preventScriptInjection;
