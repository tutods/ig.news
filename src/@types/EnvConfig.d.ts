type EnvConfigType = {
  stripe: {
    key: string;
    secret: string;
    priceKey: string;
  };
  auth: {
    secret: string;
    github: {
      id: string;
      secret: string;
    };
  };
};

export { EnvConfigType };