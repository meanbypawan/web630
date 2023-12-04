import { Banner } from "../banner/Banner"
import { BookAppointment } from "../book-appointment/BookAppointment"
import { Footer } from "../footer/Footer"
import { Header } from "../header/Header"

export const Home = ()=>{
    return <>
      <div className="hero_area">
        <Header/>
        <Banner/>
      </div>
      <BookAppointment/>
      <Footer/>
    </>
}