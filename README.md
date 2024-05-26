# HTTP

This extension provides 1 task!

* `Base64`
* `RegexReplace`
## Features

* Encode/Decode Base64 contents from/to **File**, **Variable** or **Raw Text expression**.
* Replace contents using ECMAScript `Regex` expressions from/to **File**, **Variable** or **Raw Text expression**.


## Basic queries syntax


## Usage sample

```yaml
- job:
  ...
  steps:
  - task: Base64@4
    displayName: "Encode"
    inputs:
      source: mycontent
      dest: MY_ENCODED_64_VAR

- task: Base64@4
    displayName: "Encode"
    inputs:
      sourceType: file
      source: ./my-file.txt
      destType: var
      dest: MY_ENCODED_64_VAR

- task: RegexReplace@4
  inputs:
    sourceType: 'text'
    source: 'hello world'
    destType: 'text'
    regex: '/(hello )(world)/ig'
    substitution: '$1 frank $2'

```

## Help us

See [CONTRIBUTING.md](https://github.com/alelltech/azdo-string-kit/blob/main/CONTRIBUTING.md)

