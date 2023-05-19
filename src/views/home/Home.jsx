import { Link } from "react-router-dom"
import Button from "../../components/button/Button"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"

function Home() {

    return (
      <>
        <Header />
        <main>
          <h1>This is the Home</h1>
          <h2>Show more here about it</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos alias asperiores cupiditate ipsum est tempore labore autem ipsa sunt eum. Ipsum rem quasi nihil sit deleniti autem doloribus inventore quibusdam?</p>
          <section className="section">
            <Link to='/about'>About</Link>
            <Link to='/proyect'>Proyect template</Link>
            <Link to='/design'>Proyect design</Link>
            <Link to='/styleguide'>Styleguide</Link>
          </section>
          <Button />
        </main>
        <Footer />
      </>
    )
  }
  
  export default Home
  