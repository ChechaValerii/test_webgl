# Mapbox-gl diagnostics for puppeteer

http://mapbox.github.io/mapbox-gl-supported/diagnostics.html

## Example of output

```
yarn test
yarn run v1.1.0
$ node index.js
Caught exception: TypeError: Cannot read property 'resize' of undefined
    at e.resize (https://api.mapbox.com/mapbox-gl-js/v0.40.0/mapbox-gl.js:398:5311)
    at new e (https://api.mapbox.com/mapbox-gl-js/v0.40.0/mapbox-gl.js:398:2935)
    at file://mapbox-gl-puppeteer/diagnostics.html:51:23

Done!

┌─────────────────────────┬────────────────────┬──────────────────────────────┬──────────────────────────────┬────────┐
│ Detection method        │ Context type       │ failIfMajorPerformanceCaveat │ Result                       │ Errors │
├─────────────────────────┼────────────────────┼──────────────────────────────┼──────────────────────────────┼────────┤
│ probablySupportsContext │ webgl              │ true                         │ detection method unavailable │ none   │
├─────────────────────────┼────────────────────┼──────────────────────────────┼──────────────────────────────┼────────┤
│ probablySupportsContext │ webgl              │ false                        │ detection method unavailable │ none   │
├─────────────────────────┼────────────────────┼──────────────────────────────┼──────────────────────────────┼────────┤
│ probablySupportsContext │ experimental-webgl │ true                         │ detection method unavailable │ none   │
├─────────────────────────┼────────────────────┼──────────────────────────────┼──────────────────────────────┼────────┤
│ probablySupportsContext │ experimental-webgl │ false                        │ detection method unavailable │ none   │
├─────────────────────────┼────────────────────┼──────────────────────────────┼──────────────────────────────┼────────┤
│ supportsContext         │ webgl              │ true                         │ detection method unavailable │ none   │
├─────────────────────────┼────────────────────┼──────────────────────────────┼──────────────────────────────┼────────┤
│ supportsContext         │ webgl              │ false                        │ detection method unavailable │ none   │
├─────────────────────────┼────────────────────┼──────────────────────────────┼──────────────────────────────┼────────┤
│ supportsContext         │ experimental-webgl │ true                         │ detection method unavailable │ none   │
├─────────────────────────┼────────────────────┼──────────────────────────────┼──────────────────────────────┼────────┤
│ supportsContext         │ experimental-webgl │ false                        │ detection method unavailable │ none   │
├─────────────────────────┼────────────────────┼──────────────────────────────┼──────────────────────────────┼────────┤
│ getContext              │ webgl              │ true                         │ null                         │ none   │
├─────────────────────────┼────────────────────┼──────────────────────────────┼──────────────────────────────┼────────┤
│ getContext              │ webgl              │ false                        │ null                         │ none   │
├─────────────────────────┼────────────────────┼──────────────────────────────┼──────────────────────────────┼────────┤
│ getContext              │ experimental-webgl │ true                         │ null                         │ none   │
├─────────────────────────┼────────────────────┼──────────────────────────────┼──────────────────────────────┼────────┤
│ getContext              │ experimental-webgl │ false                        │ null                         │ none   │
└─────────────────────────┴────────────────────┴──────────────────────────────┴──────────────────────────────┴────────┘

{}
WebGLDiagnostic report: WebGL Support: yes (but cannot acquire context)

User Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/63.0.3205.0 Safari/537.36
Browser vendor: Google Inc.
Browser version: 5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/63.0.3205.0 Safari/537.36
Browser language: en-US
Available resolution: 1280 x 714
Screen resolution: 1280 x 800
Color depth: 24
Pixel depth: 24

Error: TypeError: Cannot read property 'getExtension' of null
    at file://mapbox-gl-puppeteer/diagnostics.html:118:38
    at Page._handleException (mapbox-gl-puppeteer/node_modules/puppeteer/lib/Page.js:295:38)
    at Session.Page.client.on.exception (mapbox-gl-puppeteer/node_modules/puppeteer/lib/Page.js:86:60)
    at emitOne (events.js:115:13)
    at Session.emit (events.js:210:7)
    at Session._onMessage (mapbox-gl-puppeteer/node_modules/puppeteer/lib/Connection.js:199:12)
    at Connection._onMessage (mapbox-gl-puppeteer/node_modules/puppeteer/lib/Connection.js:98:19)
    at emitOne (events.js:115:13)
    at WebSocket.emit (events.js:210:7)
    at Receiver._receiver.onmessage (mapbox-gl-puppeteer/node_modules/ws/lib/WebSocket.js:143:47)
    at Receiver.dataMessage (mapbox-gl-puppeteer/node_modules/ws/lib/Receiver.js:389:14)
```
