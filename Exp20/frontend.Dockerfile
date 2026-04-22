FROM node:18

WORKDIR /app

COPY Testing/Frontend/ ./

RUN npm install
RUN npm run build

CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "4173"]
