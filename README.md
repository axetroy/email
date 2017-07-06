# 提供email服务的NodeJs实现

[![Build Status](https://travis-ci.org/axetroy/email-service.svg?branch=master)](https://travis-ci.org/axetroy/email-service)
[![Dependency](https://david-dm.org/axetroy/email-service.svg)](https://david-dm.org/axetroy/email-service)
![License](https://img.shields.io/badge/license-MIT-green.svg)
[![Prettier](https://img.shields.io/badge/Code%20Style-Prettier-green.svg)](https://github.com/prettier/prettier)
![Node](https://img.shields.io/badge/node-%3E=6.0-blue.svg?style=flat-square)
[![npm version](https://badge.fury.io/js/email-service.svg)](https://badge.fury.io/js/email-service)
[![heroku](https://img.shields.io/badge/deploy-heroku-green.svg)](https://dashboard.heroku.com/apps/email-bot)

服务器托管于[heroku](https://www.heroku.com/)

服务地址：https://email-bot.herokuapp.com

### Usage

```typescript
interface Options{
    from: string,
    to: string,
    subject: string,
    text: string,
    html: string
}
```

#### .get('/')

query: Options

**Example:**
```javascript
fetch(
  'https://email-bot.herokuapp.com?from=Axetroy <axetroy@163.com>&to=example@gmail.com&subject=hello&text=hello&html=<h2>hello</h2>'
)
  .then(function(res) {
    console.log(res);
  })
  .catch(function(err) {
    console.log(err);
  });
```

#### .post('/')


**Example:**
```javascript
fetch('https://email-bot.herokuapp.com', {
  method: 'POST',
  body: JSON.stringify({
    from: 'Axetroy <axetroy@163.com>',
    to: 'example@gmail.com',
    subject: 'hello',
    text: 'hello',
    html: '<h2>hello</h2>'
  })
})
  .then(function(res) {
    console.log(res);
  })
  .catch(function(err) {
    console.log(err);
  });

```

## Contributing

```bash
git clone https://github.com/axetroy/email-service.git
cd ./email-service
yarn
yarn start
```

You can flow [Contribute Guide](https://github.com/axetroy/email-service/blob/master/contributing.md)

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars1.githubusercontent.com/u/9758711?v=3" width="100px;"/><br /><sub>Axetroy</sub>](http://axetroy.github.io)<br />[💻](https://github.com/gpmer/gpm.js/commits?author=axetroy) 🔌 [⚠️](https://github.com/gpmer/gpm.js/commits?author=axetroy) [🐛](https://github.com/gpmer/gpm.js/issues?q=author%3Aaxetroy) 🎨 |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

The [MIT License](https://github.com/axetroy/email-service/blob/master/LICENSE)
