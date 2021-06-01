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
                '/solucoes': { page: '/' },
                '/servicos': { page: '/' },
                '/cases-e-aplicacoes': { page: '/' },
                '/contact': { page: '/contato' },
                '/contato': { page: '/contato' },
                '/about-us': { page: '/sobre-nos' },
                '/sobre-nos': { page: '/sobre-nos' },
                '/solucoes/big-data': { page: '/big-data' },
                '/big-data': { page: '/big-data' },
                '/produtos': { page: '/scora-journey' },
                '/scora-journey': { page: '/scora-journey' },
                '/inteligencia-artificial': { page: '/inteligencia-artificial' },
                '/solucoes/inteligencia-artificial': { page: '/inteligencia-artificial' },
                '/solucoes/business-intelligence-analytics': { page: '/oncase-labs' },
                '/solucoes/oncase-labs': { page: '/oncase-labs' },
                '/oncase-labs': { page: '/oncase-labs' },
                '/tecnologias/cloudera': { page: '/cloudera' },
                '/tecnologias/mongodb': { page: '/mongodb' },
                '/tecnologias/pentaho': { page: '/pentaho' },
                '/cloudera': { page: '/cloudera' },
                '/mongodb': { page: '/mongodb' },
                '/pentaho': { page: '/pentaho' },
                '/inteligencia-artificial-em-vendas': { page: '/inteligencia-artificial-em-vendas' },
                '/o-que-e-etl': { page: '/o-que-e-etl' },
                '/mapa-jornada-cliente': { page: '/mapa-jornada-cliente' }

            };
        },
        experimental: {
            redirects() {
              return [
                {source: '/about',
                destination: '/sobre-nos',
                permanent: true}
              ]
            }
          }

    }],
    [withCSS], 
    [withFonts], 
    [withSass]
]);