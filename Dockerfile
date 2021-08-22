FROM node

LABEL version="1.0"
LABEL description="This is the base docker image for the api of Holidayextras challenge."
LABEL maintainer = ["paulofelipperp.dev@gmail.com"]

WORKDIR /app

COPY ["package.json", "./"]

RUN ls

RUN npm install

COPY . .

RUN npm run typeorm migration:run

EXPOSE 3333

CMD ["npm", "run", "dev:server"]
