import { Container, Footer, Navbar } from "../components";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>
                <Container>{children}</Container>
            </main>
            <Footer />
        </>
    )
}

export default Layout;
