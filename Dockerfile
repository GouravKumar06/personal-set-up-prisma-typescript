FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

ENV DATABASE_URL="postgresql://postgres:admin123@localhost:5432/postgres"
RUN npx prisma migrate dev --name init
RUN npx prisma generate
RUN npm run build

EXPOSE 3000

CMD ["npm","run","start"]