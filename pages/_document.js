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
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
                <script type="text/javascript" src="/static/newsletter.js"></script>
            </Html>
        )
    }
}

export default MyDocument;