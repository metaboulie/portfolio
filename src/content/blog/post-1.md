---
title: Getting Started with SvelteKit and MDSvex
date: '2023-12-27'
description: A guide to building a modern blog with SvelteKit and MDSvex
---

# Getting Started with SvelteKit and MDSvex

SvelteKit and MDSvex make for a powerful combination when building modern blogs. In this post, we'll explore how to set up a blog using these technologies.

## Why SvelteKit?

SvelteKit is a framework for building web applications of all sizes, from tiny static sites to complex enterprise applications. Here are some reasons why it's a great choice:

1. **Performance**: Svelte compiles your code to highly efficient vanilla JavaScript
2. **Developer Experience**: Amazing developer experience with hot module replacement
3. **Full-stack**: Built-in support for server-side rendering and API routes
4. **Static Site Generation**: Perfect for blogs and documentation sites

## Code Example

Here's a simple example of a Svelte component:

```svelte
<script>
	let count = 0;

	function increment() {
		count += 1;
	}
</script>

<button on:click={increment}>
	Clicked {count} times
</button>
```

## Markdown Features

MDSvex supports all standard Markdown features plus some extras:

- **Tables**
- **Code blocks** with syntax highlighting
- **Frontmatter** for metadata
- **Custom components** within Markdown

### LaTeX Support

You can even include LaTeX equations:

$$
f(x) = \int_{-\infty}^\infty\hat f(\xi)\,e^{2 \pi i \xi x}\,d\xi
$$

## Conclusion

This is just a sample post to demonstrate the capabilities of MDSvex. You can use this as a template for your own blog posts!
