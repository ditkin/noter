To debug properly in the browser without ridiculous source maps:

after npm install,
edit node_modules/react-scripts/config/webpack.config.dev.js,
change whatever 'devtool' is set to, to: '#source-map'

Generated using Create-React-App
