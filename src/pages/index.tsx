import Layout from '../components/layout'
import Cover from '../sections/homeCover'
import Services from '../sections/homeServices'
import Portfolio from '../sections/homePortfolio'
import About from '../sections/homeAbout'

export default function Home() {
    return (
        <Layout>

            <Cover/>

            <Services/>            

            <About/> 

            <Portfolio/>
            
        </Layout>
    )
}
