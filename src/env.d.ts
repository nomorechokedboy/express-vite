declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      UID_GID: string;
      PORT: number;
      MORGAN: string;
      VITE_TEST: string;
      SECRET_KEY: string;
      REFRESH_KEY: string;
      NODE_ENV: string;
    }
  }
}

export {};
