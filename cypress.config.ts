import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://gorest.co.in',
    defaultCommandTimeout: 8000,
    requestTimeout: 10000,
    retries: {
      runMode: 2, 
      openMode: 1, 
    },
    viewportWidth: 1280,
    viewportHeight: 720,
    reporter: 'spec',
    screenshotsFolder: 'cypress/screenshots',
    video: true,
    videosFolder: 'cypress/videos'
  },
});
