# Obscure.js

A lightweight script to obscure (or hide) email addresses and telephone numbers from spammers.

<strong><a href="https://codepen.io/jsphpndr/pen/yLJWqqd" target="blank" rel="noopener">View the Demo on Codepen →</a></strong>

## Table of Contents

* [Getting Started](#getting-started)
* [Adding Contact Information](#adding-contact-information)
* [Initialize Obscure](#intialize-obscure)

## Getting Started

Compiled and production-ready code can be found in the dist directory. The src directory contains development code.

### Include Obscure On Your Site

#### Direct Download

You can [download the files directly from Github](https://github.com/jsphpndr/obscurejs/archive/refs/tags/2.0.zip).

```
<script src="/path/to/obscure.min.js"></script>

```

#### CDN

```
<!-- Always get the latest version. -->
<script src="https://cdn.jsdelivr.net/gh/jsphpndr/obscure/dist/obscure.min.js"></script>

<!-- Get minor updates and patch fixes within a major version -->
<script src="https://cdn.jsdelivr.net/gh/jsphpndr/obscure@2/dist/obscure.min.js"></script>

<!-- Get patch fixes within a minor version -->
<script src="https://cdn.jsdelivr.net/gh/jsphpndr/obscure@2.0/dist/obscure.min.js"></script>

<!-- Get a specific version -->
<script src="https://cdn.jsdelivr.net/gh/jsphpndr/obscure@2.0.0/dist/obscure.min.js"></script>

```

## Adding Contact Information

Obscure.js uses data-attributes on the `<template>` tag to generate email addresses and telephone numbers.

The `<template>` tag is a non-semantic element designed to have it's content rendered by javascript, quietly failing when javascript is not available.

### Attributes

The `obscure` data-attribute is required on the `<template>` tag in order to work.

Values for email addresses and numbers utilize the `data-pX` data-attribute, wherein X represents an integer (i.e. `data-p1="val"`,`data-p2="val"`).

```html

<template data-p1="value" data-p2="value" obscure></template>

```

ID and class attributes can also be added to `<template>` tags.

```html

<template id="value" class="value" data-p1="value" data-p2="value" obscure></template>

```

### Patterns

Patterns are determined by the content configuration nested in the `<template>` tag. 

To call a value in a pattern use `%X` wherein X represents a corresponding integer (i.e. `%1`, `%2`).

```html

%1@%2

```

### Adding email addresses

To add an email address, create a `<template>` tag with the following data-attributes:

* `data-p1`
* `data-p2`
* `obscure`

The `data-p1` attribute will contain the username and `data-p2` the relevant domain (i.e. "hotmail.com" or "mycustomurl.com").

```html

  <template obscure data-p1="hello" data-p2="example.com">
      <a href="mailto:%1@%2">%1@%2</a>
  </template>

```

This will render the following:

```html
<span><a href="mailto:hello@example.com">hello@example.com</a></span>

```

### Adding telephone numbers

There's not only a need to hide emails, but phone numbers, as well.

To add a US pattern telephone number, create a `<template>` tag with the following data-attributes:

* `data-p1`
* `data-p2`
* `data-p3`
* `data-p4`
* `obscure`

`data-p1` representing the country code, `data-p2` the area code, `data-p1` the prefix code and `data-p4` the line code.

```html

  <template obscure data-p1="+1" id="test2" class="test1" data-p2="481" data-p3="914" data-p4="1124">
    (%2) %3-%4
  </template>

```

This will render the following:

```html

<span>(481) 914-1124</span>

```

If not already apparent, Obscure.js allows numbers to be rendered in any pattern, as well.

```html

  <template id="french" class="french pattern" data-p1="+33" data-p2="1" data-p3="22" data-p4="33" data-p5="44" data-p6="55" obscure>
    <a href="tel:%1%2%3%4%5%6">%1 %2 %3 %4 %5 %6</a>
  </template>

  <span id="french" class="french pattern"><a href="tel:+33122334455">+33 1 22 33 44 55</a></span>

```

## Initialize Obscure.js

Just before the closing `</body>` tag, include the obscure.js external script and initialize:

```html

<script src="/path/to/obscure.min.js"></script>

<script>
  var obscure = new Obscure();
</script>

```

## Special Thanks

A special thanks to Jordin Brown ([@cognetif](https://github.com/cognetif)) for his help with this script.
