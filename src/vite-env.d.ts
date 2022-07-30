/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  DATABASE_URL: string;
  UID_GID: string;
  PORT: string;
  MORGAN: string;
  SECRET_KEY: string;
  REFRESH_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
