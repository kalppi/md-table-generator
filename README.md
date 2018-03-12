# Markdown table generator

Generates a table in markdown syntax, and sumsa certain column.
Useful when you are required for example keep track of your hours, but you are too lazy to count them yourself.

### Install
`npm install git+https://git@github.com/kalppi/md-table-generator.git`

### Usage
Create a package.json script
```
...
"scripts": {
	"generate-table": "node_modules/.bin/md-table-generator table-config.yml"
}
...
```

`npm run generate-table`

### Config file format example
```yaml
title: My hours
output: hours.md
sum:
  text: sum.
  column: 2
columns:
    -
      text: date
      align: center
    -
      text: hours
      align: left 
    -
      text: work
      align: left
data:
    - ['12.3.', 3, 'Doing stuff']
    - ['13.2.', 4, 'Doing more stuff and not using my time to count hours']

```

### Example output
```
| date | hours | work | 
| :---: | :--- | :--- | 
| 12.3. | 3 | Doing stuff | 
| 13.2. | 4 | Doing more stuff and not using my time to count hours | 
| sum. | 7
```

| date | hours | work | 
| :---: | :--- | :--- | 
| 12.3. | 3 | Doing stuff | 
| 13.2. | 4 | Doing more stuff and not using my time to count hours | 
| sum. | 7
