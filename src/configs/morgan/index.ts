import morgan from 'morgan';

morgan.format(
  'myFormat',
  '[:date[clf]] ":method :url" :status :res[content-length] - :response-time ms',
);

export { morgan };
