jQuery Stopwait
===============

Simple jQuery plugin to stop a user from submitting a form more than once. Useful for sensitive situations, where the next pageload may take some time.

## Quick Start

`$("#form").stopwait()`

## Usage

jQuery Stopwait can be attached to a form, button, or anchor and will trigger on submit and on click.

You can specifiy the specific elements to disable with the `disableElements` option. This will default to `input[type="submit"]`. If empty, it will disable the element you attach jQuery Stopwait to.

```
$("#form").stopwait({
	disableElements: "#submit-button,.additional-anchors"
})
```

The area in which the cursor will be set to `wait` can be secified with the `cursorWaitElement` option. This will default to `body`.

```
$("#form").stopwait({
	cursorWaitElement: "#some-wrapper"
})
```
