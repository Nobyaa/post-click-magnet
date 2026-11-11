import localFont from 'next/font/local';

/**
 * Licensing Note:
 * Qurova files are a DEMO version.
 * TODO: The commercial license must be purchased before official public launch.
 */

export const qurova = localFont({
  src: [
    {
      path: '../../public/Assets/Fonts/qurova-demo/QurovaDEMO-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/Assets/Fonts/qurova-demo/QurovaDEMO-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/Assets/Fonts/qurova-demo/QurovaDEMO-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/Assets/Fonts/qurova-demo/QurovaDEMO-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/Assets/Fonts/qurova-demo/QurovaDEMO-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-qurova',
  display: 'swap',
});

export const altone = localFont({
  src: [
    {
      path: '../../public/Assets/Fonts/Altone/Open Type-TT/Altone-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/Assets/Fonts/Altone/Open Type-TT/Altone-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/Assets/Fonts/Altone/Open Type-TT/Altone-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/Assets/Fonts/Altone/Open Type-TT/Altone-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-altone',
  display: 'swap',
});
