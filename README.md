# Colordrop

Customizable, monochromatic and minimalist [hugo](https://gohugo.io/) theme for personal blogs.

## Installation (with git)

To install colordrop theme using git you first must ensure your blog folder is already a git repository:

```
git init
```

Then add it as submodule of your repository:

```
git submodule add git@github.com:humrochagf/colordrop.git themes/colordrop
```

And add this configuration to your blog config.

- yaml:

```yaml
theme: colordrop
```

- toml:

```toml
theme = "colordrop"
```

### Version pinning

You can pin a version of the theme by checking to a version tag:

```
cd themes/colordrop
git checkout v1.5.0
cd ../..
git commit -m "Pinning theme to version 1.5.0"
```

## Installation (without git)

You just need to download it at the version you want from the [release](https://github.com/humrochagf/colordrop/tags) page and extract it to the `themes` folder of your blog making sure it has the following structure:

```
.
└── themes
    └── colordrop
```

And add this configuration to your blog config.

- yaml:

```yaml
theme: colordrop
```

- toml:

```toml
theme = "colordrop"
```

## Customize Colors

The theme colors can be customized by changing the `themeColor` and `themeInverseColor` variables at params.

- yaml:

```yaml
params:
  themeColor: "#000000"
  themeInverseColor: "#ffffff"
```

- toml:

```toml
[params]
themeColor = "#000000"
themeInverseColor = "#ffffff"
```

![theme colors image](https://raw.githubusercontent.com/humrochagf/colordrop/master/images/tn.png)

## Home page and Logo

The website logo can be set with the variable `siteLogo` while the variable `description` will be the displayed at the website home page.

- yaml:

```yaml
params:
  description: Welcome to my blog...
  siteLogo: "logo-photo.png"
```

- toml:

```toml
[params]
description = "Welcome to my blog..."
siteLogo = "logo-photo.png"
```

## Custom CSS

You can load your custom CSS files by adding them under the `static` folder, e.g. `static/css/custom.css` and then defining the parameters as a list.

- yaml:

```yaml
params:
  custom_css: ["css/custom.css"]
```

- toml:

```toml
[params]
custom_css = ["css/custom.css"]
```

## Website Example

You check [my blog](https://humberto.io) to see the theme fully running.

![theme image](https://raw.githubusercontent.com/humrochagf/colordrop/master/images/post.png)

**Obs:** This theme uses pipes to compile sass so you'll have to use hugo extensions.
