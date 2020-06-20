# v-calendar-issues-502
testbed environment to figure out the build failure on v-calendar

see: https://github.com/nathanreyes/v-calendar/issues/502

## steps to reproduce the issue

```shell
$ git clone 'https://github.com/no6v/v-calendar-issues-502.git'
$ cd v-calendar-issues-502
$ yarn install
$ yarn build
$ ruby -run -e httpd -- dist
(visit http://localhost:8080/)
```

In my environment, it seems good at this time.

Let's make the issue appear:

- edit `babel.config.js` to modify the `regenerator` option to `true`
- `yarn build`
```
(snip)
WARNING in ./index.js 4:8-17
"export 'default' (imported as 'VCalendar') was not found in 'v-calendar'
(snip)
```

This is what the error (just warning in this case, though) in question.
Reload the browser, and you will see the message below on your browser console.
```
main.js:11 Uncaught TypeError: Cannot read property 'mixin' of undefined
    at Object.1315 (main.js:11)
...
```

my environment:

```shell
$ lsb_release -a
No LSB modules are available.
Distributor ID:	Debian
Description:	Debian GNU/Linux bullseye/sid
Release:	unstable
Codename:	sid
$ yarn versions
yarn versions v1.22.4
{
  yarn: '1.22.4',
  'v-calendar-issues-502': '1.0.0',
  node: '12.18.0',
  v8: '7.8.279.23-node.37',
  uv: '1.37.0',
  zlib: '1.2.11',
  brotli: '1.0.7',
  ares: '1.16.1',
  modules: '72',
  nghttp2: '1.41.0',
  napi: '6',
  llhttp: '2.0.4',
  http_parser: '2.9.3',
  openssl: '1.1.1g',
  cldr: '37.0',
  icu: '67.1',
  tz: '2019c',
  unicode: '13.0'
}
Done in 0.25s.
```
