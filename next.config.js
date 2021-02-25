const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
    [optimizedImages, {
        inlineImageLimit: 8192,
        imagesFolder: 'images',
        imagesName: '[name]-[hash].[ext]',
        handleImages: ['jpeg', 'jpg', 'png', 'svg', 'webp', 'gif', 'ico'],
        optimizeImages: true,
        optimizeImagesInDev: false,
        mozjpeg: {
            quality: 80,
        },
        optipng: {
            optimizationLevel: 3,
        },
        pngquant: false,
        gifsicle: {
            interlaced: true,
            optimizationLevel: 3,
        },
        webp: {
            preset: 'default',
            quality: 75,
        },
        exportTrailingSlash: true,
        trailingSlash: true,

        exportPathMap: function () {
            return {
                '/': { page: '/' },
                '/contato': { page: '/contato' },
                '/sobre-nos': { page: '/sobre-nos' },
                '/big-data': { page: '/big-data' },
                '/scora-journey': { page: '/scora-journey' },
                '/inteligencia-artificial': { page: '/inteligencia-artificial' },
                '/oncase-labs': { page: '/oncase-labs' },
                '/cloudera': { page: '/cloudera' },
                '/mongodb': { page: '/mongodb' },
                '/pentaho': { page: '/pentaho' }
            };
        }

    }],
    [withCSS], [withFonts], [withSass]
]);