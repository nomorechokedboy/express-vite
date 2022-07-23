declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      UID_GID: string;
      PORT: string;
      MORGAN: string;
      SECRET_KEY: string;
      REFRESH_KEY: string;
    }
  }
}

export {};
