FROM nomorechokedboy/node:14-deps AS deps

FROM nomorechokedboy/node:14-builder as builder

FROM nomorechokedboy/node:14-runner