const NodeMediaServer = require('node-media-server');

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 60,
    ping_timeout: 30
  },
  http: {
    port: 8000,
    allow_origin: '*'
  },
  // Disable HLS by setting enable to false
  // This will prevent HLS files from being saved to disk
  http: {
    port: 8000,
    allow_origin: '*',
    webroot: './public' // Specify the path to your HTML file
  },

};

const nms = new NodeMediaServer(config);

nms.run();
