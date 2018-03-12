# Markdown table generator

Generates a file with a table in markdown syntax, and sums a column.
Useful when you are required for example to keep track of your hours, but you are too lazy to count them yourself.

### Install
```bash
> npm install git+https://git@github.com/kalppi/md-table-generator.git
```

### Usage
Create a package.json script
```json
...
"scripts": {
    "generate-table": "node_modules/.bin/md-table-generator table-config.yml"
}
...
```

```bash
> npm run generate-table
```

### Without install

```bash
> npx github:kalppi/md-table-generator table-config.yml
```

### Example config file
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
      align: center 
    -
      text: work
      align: left
data:
    - ['12.3.', 3, 'Doing stuff']
    - ['13.2.', 4, 'Doing more stuff and not using my time to count hours']

```

### Example output
```
# My hours

| date | hours | work | 
| :---: | :---: | :--- | 
| 12.3. | 3 | Doing stuff | 
| 13.2. | 4 | Doing more stuff and not using my time to count hours | 
| sum. | 7
```
# My hours

| date | hours | work | 
| :---: | :---: | :--- | 
| 12.3. | 3 | Doing stuff | 
| 13.2. | 4 | Doing more stuff and not using my time to count hours | 
| sum. | 7
