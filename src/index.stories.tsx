import { Story } from '@storybook/react';
import ShakaVideo, { ShakaVideoProps } from './ShakaVideo';
import './styles.stories.scss';
import { DRMKeySystem, Robustness } from './utils/shaka';

export default {
  title: 'Example/Shaka Video',
  component: ShakaVideo,
};

const Template: Story<ShakaVideoProps> = (args) => (
  <div>
    {'Resource data are from demo of shaka-player'}
    <ShakaVideo {...args} />
  </div>
);

const baseProps: Partial<ShakaVideoProps> = {
  autoPlay: true,
  controls: true,
  onLoad() {
    console.log('loaded');
  },
};

/**
 * These Resources from shaka-player demo page source
 *
 * https://github.com/google/shaka-player/blob/master/demo/common/assets.js#L234
 */

export const BBB = Template.bind({});
BBB.storyName = 'Big Buck Bunny';
BBB.args = {
  ...baseProps,
  uri: 'https://storage.googleapis.com/shaka-demo-assets/bbb-dark-truths/dash.mpd',
};

export const BBBMulti = Template.bind({});
BBBMulti.storyName = 'Big Buck Bunney (Multi DRM)';
BBBMulti.args = {
  ...baseProps,
  uri:
    'https://amssamples.streaming.mediaservices.windows.net/622b189f-ec39-43f2-93a2-201ac4e31ce1/BigBuckBunny.ism/manifest(format=mpd-time-csf)',
  config: {
    drm: {
      servers: {
        [DRMKeySystem.WIDEVINE]:
          'https://amssamples.keydelivery.mediaservices.windows.net/Widevine/?KID=1ab45440-532c-4399-94dc-5c5ad9584bac',
        [DRMKeySystem.PLAYREADY]: 'https://amssamples.keydelivery.mediaservices.windows.net/PlayReady/',
      },
      advanced: {
        [DRMKeySystem.WIDEVINE]: {
          videoRobustness: Robustness.SW_SECURE_CRYPTO,
          audioRobustness: Robustness.SW_SECURE_CRYPTO,
        },
        [DRMKeySystem.PLAYREADY]: {
          videoRobustness: Robustness.SW_SECURE_CRYPTO,
          audioRobustness: Robustness.SW_SECURE_CRYPTO,
        },
      },
    },
  },
};

export const Sintel4K = Template.bind({});
Sintel4K.storyName = 'Sintel 4K (Multicodec)';
Sintel4K.args = {
  ...baseProps,
  uri: 'https://storage.googleapis.com/shaka-demo-assets/sintel/dash.mpd',
};

export const Sintel4KWideVine = Template.bind({});
Sintel4KWideVine.storyName = 'Sintel 4K (Multicodec, Widevine)';
Sintel4KWideVine.args = {
  ...baseProps,
  uri: 'https://storage.googleapis.com/shaka-demo-assets/sintel-widevine/dash.mpd',
  config: {
    drm: {
      servers: {
        [DRMKeySystem.WIDEVINE]: 'https://cwip-shaka-proxy.appspot.com/no_auth',
      },
      advanced: {
        [DRMKeySystem.WIDEVINE]: {
          videoRobustness: Robustness.SW_SECURE_CRYPTO,
          audioRobustness: Robustness.SW_SECURE_CRYPTO,
        },
      },
    },
  },
};

export const AngelOneWideVine = Template.bind({});
AngelOneWideVine.storyName = 'Angel One (WideVine)';
AngelOneWideVine.args = {
  ...baseProps,
  uri: 'https://storage.googleapis.com/shaka-demo-assets/angel-one-widevine-hls/hls.m3u8',
  config: {
    drm: {
      servers: {
        [DRMKeySystem.WIDEVINE]: 'https://cwip-shaka-proxy.appspot.com/no_auth',
      },
      advanced: {
        [DRMKeySystem.WIDEVINE]: {
          videoRobustness: Robustness.SW_SECURE_CRYPTO,
          audioRobustness: Robustness.SW_SECURE_CRYPTO,
        },
      },
    },
  },
};

export const TearsOfSteel = Template.bind({});
TearsOfSteel.storyName = 'Tears Of Steel';
TearsOfSteel.args = {
  ...baseProps,
  uri: 'https://storage.googleapis.com/shaka-demo-assets/tos-surround/dash.mpd',
};

export const TearsOfSteelWideVine = Template.bind({});
TearsOfSteelWideVine.storyName = 'Tears Of Steel (WideVine)';
TearsOfSteelWideVine.args = {
  ...baseProps,
  uri: 'https://demo.unified-streaming.com/video/tears-of-steel/tears-of-steel-dash-widevine.ism/.mpd',
  config: {
    drm: {
      servers: {
        [DRMKeySystem.WIDEVINE]: 'https://cwip-shaka-proxy.appspot.com/no_auth',
      },
      advanced: {
        [DRMKeySystem.WIDEVINE]: {
          videoRobustness: Robustness.SW_SECURE_CRYPTO,
          audioRobustness: Robustness.SW_SECURE_CRYPTO,
        },
      },
    },
  },
};

export const TearsOfSteelSubtitles = Template.bind({});
TearsOfSteelSubtitles.storyName = 'Tears Of Steel (Subtitles)';
TearsOfSteelSubtitles.args = {
  ...baseProps,
  uri: 'https://demo.unified-streaming.com/video/tears-of-steel/tears-of-steel-en.ism/.mpd',
};

export const DigTheUke = Template.bind({});
DigTheUke.storyName = '"Dig the Uke" by Stefan Kartenberg (audio only, multicodec)';
DigTheUke.args = {
  ...baseProps,
  uri: 'https://storage.googleapis.com/shaka-demo-assets/dig-the-uke-clear/dash.mpd',
};

export const DigTheUkeWidevine = Template.bind({});
DigTheUkeWidevine.storyName = '"Dig the Uke" by Stefan Kartenberg (audio only, multicodec, Widevine)';
DigTheUkeWidevine.args = {
  ...baseProps,
  uri: 'https://storage.googleapis.com/shaka-demo-assets/dig-the-uke/dash.mpd',
  config: {
    drm: {
      servers: {
        [DRMKeySystem.WIDEVINE]: 'https://cwip-shaka-proxy.appspot.com/no_auth',
      },
    },
  },
};
