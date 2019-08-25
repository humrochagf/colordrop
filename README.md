# Colordrop

Customizable, monochromatic and minimalist [hugo](https://gohugo.io/) theme for personal blogs.

## Customize Colors

The theme colors can be customized by changing the `themeColor` and `themeInverseColor` variables at params:

```yaml
params:
  themeColor: "#000000"
  themeInverseColor: "#ffffff"
```

![theme colors image](/images/tn.png)

## Home page and Logo

The website logo can be set with the variable `siteLogo` while the variable `description` will be the displayed at the website home page.

```yaml
params:
  description: Welcome to my blog...
  siteLogo: "logo-photo.png"
```

You check [my blog](https://humberto.io) to see the theme fully running.

![theme image](/images/screenshot.png)

**Obs:** This theme uses pipes to compile sass so you'll have to use hugo extensions.
