
## Nest Auth and Queue

This is a sample nest program for nest queue implementation. 

It processes book data (data.csv) to store in book collection (books module).

In book service on calling addBookCSVReadJob it adds a queue to read and write csv data.

In book processor it reads the data from data.csv file and store in book collection.

## Installing the app

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```


[Nest](https://github.com/nestjs/nest) framework + TypeScript.
