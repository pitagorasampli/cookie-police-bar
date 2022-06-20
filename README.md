# cookie-police-bar

## Installation

Insert the script into the HTML document:

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/pitagorasampli/cookie-police-bar@v1.0.0/dist/index.js"></script>
```

Then insert the `cookie-police-bar` component into the body element:

```html
<cookie-police-bar />
```

To customize the bar:

```html
<cookie-police-bar
   bgcolor="black"
   textcolor="white"
   title="Site com cookies"
   text="Este site faz uso de cookies para personalizar..."
   linkcolor="orange"
   linktext="Portal"
   link="https://ampli.com.br"
   btnbgcolor="blue"
   btnborderradius='8px'
   btntextcolor="gray"
   btntext="Concordo"
   closecolor="red"
   />
```

See the sample: https://github.com/pitagorasampli/cookie-police-bar/blob/main/public/index.html

## Development

Run `npm start`.

## Publish

Run `npm version <major | minor | path>`.
