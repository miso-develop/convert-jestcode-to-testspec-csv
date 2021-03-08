# convert-jestcode-to-testspec-csv

Convert jest source code to test specification csv.

## Install

```
git clone xxx
npm i
```

## Usage

Specify a test file as the argument of node and execute it.

```
cd <git clone dir>
node dist <test file> >> testspec.csv
```

example.

```
node dist example/example.test.ts
node dist example/example.test.ts >> example.test.ts.csv
```


### Windwos batch

We have prepared a [Windwos batch](./jest2csv.cmd) to convert multiple test files under a directory.
By using the directory where the test files are stored as an argument, the csv-converted data of the test files under the directory will be output to the ./export directory.
It also converts the data from UTF-8 to Shift-JIS so that it can be opened directly in Excel.

```
jest2csv.cmd <test file dir>
```

example.

```
jest2csv.cmd .\example
```

## License
[MIT](./LICENSE)
