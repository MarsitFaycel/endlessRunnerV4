// Configure Require.js
var require = {
    // Default load path for js files
    baseUrl: 'js/app',
    shim: {
        // --- Use shim to mix together all THREE.js subcomponents
        'threeCore': { exports: 'THREE' },
        'TrackballControls': { deps: ['threeCore'], exports: 'THREE' },
        // --- end THREE sub-components
        'detector': { exports: 'Detector' },
        'stats': { exports: 'Stats' },
        'mtLoader' : { exports: 'mTLLoader'},
        'objLoader' : { exports: 'objLoader'}
    },
    // Third party code lives in js/lib
    paths: {
        // --- start THREE sub-components
        three: '../lib/three',
        threeCore: '../lib/three.min',
       // TrackballControls: '../lib/controls/TrackballControls',
        // --- end THREE sub-components
        //detector: '../lib/Detector',
        domready: '../lib/domReady',
        stats: '../lib/stats',
        mTLLoader: '../lib/MTLLoader',
        objLoader: '../lib/OBJLoader',
        // Require.js plugins
        //text: '../lib/text',
        //shader: '../lib/shader',
        // Where to look for shader files
        //shaders: '../shaders'
    }
};
