# react-shaka
React Component for [Google Shaka Player](https://github.com/google/shaka-player)

### Usage
```tsx
import { ShakaVideo } from '@opnay/react-shaka';

const VIDEO = 'https://storage.googleapis.com/shaka-demo-assets/bbb-dark-truths/dash.mpd';
const component: React.FunctionComponent = () => {
  return <ShakaVideo autoplay uri={VIDEO} onLoad={() => console.log('loaded')} />;
};
```
```html
<!-- Will render like this -->
<video class="shaka" autoplay="" src="blob:https://localhost:3000/2c210555-bc5d-4518-9869-8aee4ffaa08d"></video>
```
See more info [here(**storybook**)](https://opnay.com/react-shaka/)

### How to install package
**I don't publish to npm registry.** only for github packages.<br/>
(npm registry has limit for private scoped packages for free.)

#### 1. Login to github registry
**Generate access token**
1. Your Github Settings
2. Developer Settings
3. Personal access tokens
4. Generate new token
5. write token name and check `repo` and `read:packages`
6. copy token and don't forget this. (**Can't find it**)

#### Login to github registry
```shell - Generate token
npm login --registry=https://npm.pkg.github.com
# Username: ${your github username}
# Password: ${your personal access token}
# Email: (this IS public) ${your github email}
# Logged in as ${Username} on https://npm.pkg.github.com/.
```

#### 2. Install package
```
# /path/to/project/.npmrc(recommend) or ~/.npmrc
@opnay:registry=https://npm.pkg.github.com
```
``` shell
npm install @opnay/react-shaka
# or
yarn add @opnay/react-shaka
```
