import Header from '~/layouts/components/header';
import Navigation from '~/layouts/components/navigation';
import Footer from '~/layouts/components/footer';


const DefaultLayout = ({ children }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            {/* Header */}
            <Header />
            <Navigation />

            {/* Main Content */}
            <main style={{ flex: 1 }}> 
                <div className="container">
                    <div className="content">{children}</div>
                </div>

            </main>

            {/* Footer */}
           <Footer sx={{ my: 4 }}/>
        </div>
    );
};

export default DefaultLayout;
