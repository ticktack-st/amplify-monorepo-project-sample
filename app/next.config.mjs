/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src/'],
  },
  serverRuntimeConfig: {
    cognito: {
      Auth: {
        Cognito: {
          userPoolId: 'ap-northeast-1_fVGVH0WsZ',
          userPoolClientId: '1d27eld0o3b5onl981729npi0s',
          region: 'ap-northeast-1',
        },
      },
    },
  },
}

module.exports = nextConfig
