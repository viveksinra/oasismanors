import "./contactStyle.css";
import Header from "../Components/Header/Header";
import { TopAbstract } from "../MyApp";
import Enquiry from "../Components/Enquiry/Enquiry";
import {Newsletter} from "../Components/Amenities/Amenities";
import {NewFooter} from "../Components/Footer/Footer";
function Contact() {
  return (
    <main style={{backgroundColor:"#fff"}}>
    <Header/>
    <TopAbstract/>
    <Enquiry/>
    <Newsletter/>
    <NewFooter/>
    </main>
  )
}

export default Contact