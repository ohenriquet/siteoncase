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
                    {/* <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" /> */}
                    <link rel="icon" type="image/png" href={require("../images/favicon.png")}></link>
                   

                    {/* Design System */}
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    <link rel="stylesheet" href="css/main.css" />
                    
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
                

            </Html>
        )
    }
}

export default MyDocument;