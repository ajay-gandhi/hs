# hs

> Store and load temporary large pieces of data online

`hs` (short for [Hastebin](http://hastebin.com)) is a utility for quickly and
effortlessly storing large pieces of data online. [See why](#Why).

## Usage

First, install with `npm`:

```bash
$ npm install -g hs
```

To save some data:

```bash
$ hs save "i'm saving this"    # outputs some id, e.g. "asdhfuo"
```

To load the data:

```bash
$ hs load <id>      # for example, "asdhfuo" from above
```

#### Piping

You can even pipe data to `hs`:

```bash
$ cat .vimrc | hs save
```

## How

`hs` uses a really straightforward POST API that contacts hastebin.com.

## Why

When I create virtual machines, I need to transfer some of my config files, such
as `.vimrc` and `.bash_profile`. I don't want to create a dotfiles repo on GitHub
because the preferences differ between all the machines. Additionally,
copy/paste shortcuts differ between all machines, so the easiest way is to just
type in a quick 8-character id and pipe it to a file.
