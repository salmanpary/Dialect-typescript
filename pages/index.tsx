import Navbar from "../components/common/navbar"
import Hero from "../components/home/hero"
import CoursesToGetYouStarted from "../components/home/courses"
import WhyChooseUs from "../components/home/whyus"
import Faqsection from "../components/common/faq/Faqsection"
import GetCritical from "../components/home/getcriticalskills"
import Footer from "../components/common/footer"
export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <CoursesToGetYouStarted/>
      <WhyChooseUs/>
      <Faqsection/>
      <GetCritical/>
      <Footer/>
    </>
  )
}
