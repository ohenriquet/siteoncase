import '../assets/css/bootstrap.min.css';
import '../assets/css/animate.min.css';
import '../assets/css/flaticon.css';
import '../assets/css/fontawesome.min.css';
import '../assets/css/style.css';
import '../assets/css/responsive.css';

import App from 'next/app';
import { DefaultSeo } from 'next-seo';
import Loader from '../components/Shared/Loader';
import GoTop from '../components/Shared/GoTop';

export default class MyApp extends App {
    static async getInitialProps ({ Component, ctx }) {
        return {
            pageProps: Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {}
        }
    }

    // Preloader
    state = {
        loading: true
    };
    componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 2000); 
    }
    componentWillUnmount() {
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = 0;
        }
    }
    
    render () {
        const { Component, pageProps } = this.props

        return (
            <React.Fragment>
                <DefaultSeo
                    title="Oncase | Experts em Big Data, Data Analytics e Inteligência Artificial"
                    description="Oncase - Parceiros na transformação digital das maiores organizações do Brasil e do mundo."
                    openGraph={{
                        type: 'website',
                        locale: 'pt_BR',
                        url: 'https://www.oncase.com.br/',
                        site_name: 'Oncase | Experts em Big Data, Data Analytics e Inteligência Artificial',
                    }}
                />

                <Component {...pageProps} />
                
                {/* Preloader */}
                {/* <Loader loading={this.state.loading} /> */}

                {/* Go Top Button */}
                <GoTop scrollStepInPx="50" delayInMs="10.50" />
            </React.Fragment>
        );
    }
}