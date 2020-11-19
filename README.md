# Obscure.js - v1.0.0

A lightweight script to obscure (or hide) telephone numbers and email addresses from spammers.

<small>**Note:** The plugin comes with limited options at present. Future versions will include further options to change display patterns for phone numbers (i.e. "(555) 555-5555", "555-555-5555", "555.555.5555", "555 555 5555").<br>Suggestions are welcome.</small>

# Getting Started

Compiled and production-ready code can be found in the dist directory. The src directory contains development code.

### Include Obscure on your site.

#### Direct Download

You can dowload the files directly from Github.

```
<script src="/path/to/obscure.min.js"></script>

```

#### CDN

#### NPM

Coming soon.

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

## Initialize Obscure

In the footer of your page, after the content, initialize Obscure.

```
<script>
  var obscure = new Obscure();
</script>

```

