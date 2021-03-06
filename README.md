## Task [RS School](https://rs.school/) Node 2020 Q3

### Caesar cipher CLI tool

CLI tool for encode and decode a text by [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher).

### Install   
| Open your terminal                  |
| -------------------------------------|
| 1. Download or clone this repository    |
|git clone git@github.com:YaroslavBIG/caesar-cipher-cli.git|
| 2. Go to the app folder                 |
| cd caesar-cipher-cli/caesar-cipher-cli             |
| 3. install node modules|
|npm install|
                                          
### Usage:
In the app folder write the command ```node casarChiper [options]```

#### Options:
CLI tool accept options (short alias and full name):

1) **-a, --action**: an action encode/decode
2) **-s, --shift**: a shift
3) **-i, --input**: an input file
4) **-o, --output**: an output file

**Action and shift are required options**

#### Usage example:

```bash
$ node casarChiper -a encode -s 7 -i "./data/input.txt" -o "./data/output.txt"
```

```bash
$ node casarChiper --action encode --shift 7 --input plain.txt --output encoded.txt
```

```bash
$ node casarChiper --action decode --shift 7 --input decoded.txt --output plain.txt
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`


