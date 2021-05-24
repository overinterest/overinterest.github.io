import React from "react";
import "./styles.css";

const App = ({ Component, pageProps }) => {
    const Layout = Component.Layout ? Component.Layout : React.Fragment;

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
};

export default App;
