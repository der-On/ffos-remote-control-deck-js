# Firefox-OS remote control - deck.js

Control a deck.js presentation using Firefox-OS remote control.

## Usage

Include socket.io-clients socket.io.js and ffos-remote-control-deck-js.js and ffos-remote-control-deck-js.css

```html
<link rel="stylesheet" href="ffos-remote-control-deck-js.css">
<script src="socket.io/socket.io.js"></script>
<script src="ffos-remote-control-deck-js.js"></script>
```

Then init it using

```javascript
$.deck.ffosRemoteControl();
```

In the Firefox-OS app add the following events: 'prev', 'next', 'break'

## Goodies

This extension includes a "break" feature which will turn the screen black.
This is usefull for breaks or when answering questions without the disturbing screen.