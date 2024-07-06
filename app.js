const express = require('express');
const NodeMediaServer = require('node-media-server');

const app = express();

// Serve index.html from the public directory
app.use(express.static('public'));

const config = {
  rtmp: {
    port: 1935,
    applications: {
      live: {
        allow_origin: '*',
        live: [
          { name: 'stream_key1', format: 'flv' },
          { name: 'stream_key2', format: 'flv' }
          // Add more stream keys as needed
        ]
      }
    }
  },
  http: {
    port: 3011,
    allow_origin: '*'
  }
};

const nms = new NodeMediaServer(config);

// Logging preConnect events
nms.on('preConnect', (id, args) => {
  console.log('[NodeEvent on preConnect]', `id=${id} args=${JSON.stringify(args)}`);
});

// Start Node Media Server
nms.run();

// Start Express server
const server = app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
