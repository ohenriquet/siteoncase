import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="zxx">
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <link rel="icon" type="image/png" href={require("../images/favicon.png")}></link>
                    <script type="text/javascript" src="/static/rdstation-forms.min.js"></script>
                    <script type="text/javascript" src="/static/ganalytics.js"></script>

                    {/* Design System */}
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    <link rel="stylesheet" href="css/main.css" />
                    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossOrigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.6/js/swiper.min.js"></script>
                    <script src="js/bootstrap.bundle.min.js"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
                <script type="text/javascript" src="/static/rdstation.js"></script>
                <script type="text/javascript" src="/static/newsletter.js"></script>
                <script type="text/javascript" src="/static/neurologic.js"></script>

            </Html>
        )
    }
}

export default MyDocument;