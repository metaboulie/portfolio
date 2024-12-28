---
title: help batman
date: "2024-12-29"
description: this blog talks about how to help batman in your terminal
---

# This started from brew leaves

> BTW, I mirated from Warp to [Ghostty](https://github.com/ghostty-org/ghostty) upon
> its release today (Dec 27, 2024).

```fish
brew uninstall --cask warp
brew install --cask ghostty
man brew
```

The other day, I was killing time and reading about [homebrew](https://brew.sh/)'s
manual. I was trying to find some useful commands that can help me recognize wth
formulae I'd installed. And yeah, I found `brew leaves`, or

> List installed formulae that are not dependencies of another installed formula or
> cask.

Ok. Let's do a quick test first, how many formalae I can remember atm, and they are:

ruff, uv, pypy, hatch (Oh yeah, my mind is filled with python), zig, rust, nvim 👫
emacs, and some cli tools I used a lot: eza, zoxide, lazygit, yazi. I think that's all.
Let's check the result 🤓

```fish
brew leaves -r | wc -l
λ> 41

brew leaves -r
```

Well, that's ... quite a lot. I thought I would have much fewer formulae installed.

And wait... no uv?

```fish
brew uses --installed uv
λ> hatch
```

That's fair 😎

So, why not make a blog about every single one of them. (a really boring idea)

And this starts with the one and the only one:

---

# [Bat](https://github.com/sharkdp/bat), or a cat(1) clone with wings.

```fish
brew home bat
```

At first, I thought I could just uninstall this formula -- it seemed just to be a
pretty-printer, and I could just use neovim.

But I find a pretty brilliant useage of bat.

So, what do you expect the following function would do? (It's an alias for fish shell)

```fish
function help
    command $argv --help 2>&1 | bat --language=help --style=plain
    # or for short, bat -l help -p
end
```

It's using bat to highlight `--help` messages. For example, `help brew` is equal to
`brew --help | bat --plain --language=help`. And this is really useful.

What's more, I should be inspired by this. Basically, I suppose, whenever we output
something in the command line, we can pipe this output to bat and view it prettier.

```fish
function df
    fd . --type file | xargs bat --diff
end
```

- [fd](https://github.com/sharkdp/fd)

Now, when running `df`, the command will recursively find all files in the current
directory and show their diffs in a single, nicely formatted output.

I think I will just walk foreward first, and add more related aliases when needed.

Lastly, here comes to the configuration part.

To modify it (with neovim), we can just run

```fish
bat --generate-config-file
nvim "$(bat --config-file)"
```

There aren't many to be configured. For me, it's just:

```
--theme="Nord"
--italic-text=always
```

<div class="callout">
  <div class="callout-title">💡 Tip</div>
  <div class="callout-content">
    From now on, we can use the customized <strong>help</strong> command to view the help messages of other formulae.
  </div>
</div>

---

# A problem with alias command

An error happens when I ran the above `help` command on the fish-builtin `alias`:

```fish
λ> help alias
/usr/bin/alias: line 4: alias: --: invalid option
alias: usage: alias [-p] [name[=value] ... ]
```

Perplexity.ai informs me that this is due to the system's built-in `alias` command is
executed instead of fish's `alias`.

This somehow, perhaps leads me to a more robust version of `help`.

```fish
function help
    # Execute command in a new fish process to ensure fish builtins work correctly
    # fish -c evaluates the following string as fish code in a new process
    command fish -c "$argv --help" 2>&1 | bat -l help -p
    or command fish -c "$argv -h" 2>&1 | bat -l help -p
end
```

The `fish -c` command is particularly useful because:

- It creates a new fish process to evaluate the command string[1]
- It ensures fish builtins and functions are available in the executed command[1]
- It isolates the command execution from the current shell environment[1]
- It properly handles command substitution and variable expansion[1]

This approach is more reliable than direct command execution because it ensures
consistent behavior across both external commands and fish builtins.

The `2>&1` redirection captures both standard output and error messages, ensuring all
help text is properly piped to `bat` for formatting.

---

# Bat-extras

A typical step after learning about a formula for me might be the following:

```fish
brew search bat
```

And this search query brought me to [bat-extras](https://github.com/eth-p/bat-extras).

The "extra" formulae are inspiring as well, but I will spare them for now.

But inspired by [this](https://github.com/eth-p/bat-extras/blob/master/src/batman.sh),
I now have a **batman** in my command line.

```fish
function batman
    command fish -c "man $argv" 2>&1 | bat --plain --language=man
end
```

And we can `help batman`.

But actually, we can just set the pager of man to bat instead of less.

```fish
# or, just set the pager of man to bat
set -x MANPAGER "sh -c 'col -bx | bat -l man -p'"
set -x MANROFFOPT "-c"
```

- [Give the 'bat' command wings with 'bat-extras'](https://www.youtube.com/watch?v=ywXVGH-QyMc)

---

<style>
.callout {
  background: rgba(66, 184, 231, 0.1);
  border-left: 4px solid #42b8e7;
  border-radius: 4px;
  padding: 1rem;
  margin: 1rem 0;
}

.callout-title {
  font-weight: bold;
  margin-bottom: 0.5rem;
}
</style>
