# Colordrop

Customizable, monochromatic and minimalist [hugo](https://gohugo.io/) theme for personal blogs.

## Customize Colors

The theme colors can be customized by changing the `themeColor` and `themeInverseColor` variables at params:

```yaml
params:
  themeColor: "#000000"
  themeInverseColor: "#ffffff"
```

![theme colors image](https://raw.githubusercontent.com/humrochagf/colordrop/master/images/tn.png)

## Home page and Logo

The website logo can be set with the variable `siteLogo` while the variable `description` will be the displayed at the website home page.

```yaml
params:
  description: Welcome to my blog...
  siteLogo: "logo-photo.png"
```

## Custom CSS

You can load your custom CSS files by adding them under the `static` folder, e.g. `static/css/custom.css` and then defining the parameters as a list:

```yaml
params:
  custom_css: ["css/custom.css"]
```

## Website Example

You check [my blog](https://humberto.io) to see the theme fully running.

![theme image](https://raw.githubusercontent.com/humrochagf/colordrop/master/images/post.png)

**Obs:** This theme uses pipes to compile sass so you'll have to use hugo extensions.
