## Scalant Community

This is the code of official website of Scalant Community.
Student Community for learning and growing together, be the part of the amazing communtiy that will help you in your journey.

## Setup On Local

Clone the project

```bash
  git clone git@github.com:ScalantCommunity/ScalantWebsite.git
```

Go to the project directory

```bash
  cd ScalantWebsite
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## How to Deploy Changes

Clone the project

```bash
  git add .
```

```bash
  git commit -m "message"
```

```bash
  npm run build
```

```bash
  git add dist -f
```

```bash
  git commit -m "Adding dist"
```

```bash
  git subtree push --prefix dist origin gh-pages
```
