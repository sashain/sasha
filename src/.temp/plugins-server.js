import plugin_gridsome_plugin_netlify_cms_6 from "/Users/haoyinghui/Documents/sasha/node_modules/gridsome-plugin-netlify-cms/gridsome.client.js"
import plugin_gridsome_plugin_tailwindcss_7 from "/Users/haoyinghui/Documents/sasha/node_modules/gridsome-plugin-tailwindcss/gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_netlify_cms_6,
    options: {"publicPath":"/admin","htmlTitle":"Content Editor","configPath":"src/admin/config.yml","modulePath":"/Users/haoyinghui/Documents/sasha/node_modules/gridsome-plugin-netlify-cms/lib/cms.js","htmlPath":"/Users/haoyinghui/Documents/sasha/node_modules/gridsome-plugin-netlify-cms/templates/index.html","injectScript":true,"enableIdentityWidget":true,"debug":false}
  },
  {
    run: plugin_gridsome_plugin_tailwindcss_7,
    options: {"tailwindConfig":"./tailwind.config.js","shouldImport":true,"shouldTimeTravel":true,"presetEnvConfig":{"stage":0,"autoprefixer":false}}
  }
]
