# Obscure.js

A lightweight script to obscure (or hide) email addresses and telephone numbers from spammers.

**[View the ]()**

**Note:** 

The plugin comes with limited options at present. Future versions will include further options to change display patterns for phone numbers (i.e. "555-555-5555", "555.555.5555", "555 555 5555").

Suggestions are welcome.

## Table of Contents

* [Getting Started](#getting-started)
* [Adding Contact Information](#adding-contact-information)
* [Initialize Obscure](#intialize-obscure)

## Getting Started

Compiled and production-ready code can be found in the dist directory. The src directory contains development code.

### Include Obscure on your site.

#### Direct Download

You can [download the files directly from Github](https://github.com/jsphpndr/obscurejs/archive/v1.0.0.zip).

```
<script src="/path/to/obscure.min.js"></script>

```

#### CDN

```
<!-- Always get the latest version. -->
<script src="https://cdn.jsdelivr.net/gh/jsphpndr/obscure/dist/obscure.min.js"></script>

<!-- Get minor updates and patch fixes within a major version -->
<script src="https://cdn.jsdelivr.net/gh/jsphpndr/obscure@1/dist/obscure.min.js"></script>

<!-- Get patch fixes within a minor version -->
<script src="https://cdn.jsdelivr.net/gh/jsphpndr/obscure@1.0/dist/obscure.min.js"></script>

<!-- Get a specific version -->
<script src="https://cdn.jsdelivr.net/gh/jsphpndr/obscure@1.0.0/dist/obscure.min.js"></script>

```

<!-- #### NPM

Coming soon. -->

## Adding Contact Information

Obscure uses attributes on the non-semantic `<script>` tag to generate telephone number and email address links.

It's designed to quietly fail when javascript is not available.

### Adding email addresses

To add an email address, create a `<script>` tag with the following attributes:

* `data-local`
* `data-domain`
* `obscure`

The `data-local` attribute will contain the username and `data-domain` the relevant domain (i.e. "hotmail.com" or "mycustomurl.com").

```
<script data-local="hello" data-domain="example.com" obscure></script>

```

This will produce the following:

```
<a href="mailto:hello@example.com">hello@example.com</a>

```

### Adding telephone numbers

There's not only a need to hide emails, but phone numbers, as well.

To add a telephone number, create a `<script>` tag with the following attributes:

* `data-country`
* `data-area`
* `data-prefix`
* `data-line`
* `obscure`

The attribute values follow the <a href="https://en.wikipedia.org/wiki/International_Telecommunication_Union" target="_blank">International Telecommunication Union</a> sector <a href="https://en.wikipedia.org/wiki/ITU-T" target="_blank">ITU-T</a> issued recommendation <a href="https://en.wikipedia.org/wiki/E.123" target="_blank">E.123</a>.

```
<script data-country="1" data-area="555" data-prefix="5555" data-line="5555" obscure></script>

```

This will produce the following:

```
<a href="tel:+15555555555">(555) 555-5555</a>

```

**NOTE:** The default pattern is fixed at "(555) 555-5555". Future versions of this plugin will feature options for different patterns.

## Initialize Obscure

In the footer of your page, after the content, initialize Obscure.

```
<script>
  var obscure = new Obscure();
</script>

```
