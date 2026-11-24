import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import backgroundImage from '../assets/background.png';

function MainLayout() {
    return (
        <>
            <Header />

            <main>
                <img
                    src={backgroundImage}
                    alt="Underwater landing page background"
                    className="pointer-events-none absolute inset-0 size-full object-cover select-none"
                />

                <Outlet />
            </main>

            <Footer />
        </>
    );
}

export default MainLayout;
