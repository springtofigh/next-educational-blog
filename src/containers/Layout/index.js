import Header from "./Header";
import Footer from "./Footer";

function index( { children } ) {
  return (
    <div className="bg-gray-50 min-h-screen">
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default index