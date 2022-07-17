FROM nomorechokedboy/node:14-builder as builder

FROM nomorechokedboy/node:14-runtime
# docker build -t slearning-service .