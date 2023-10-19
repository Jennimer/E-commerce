import Announcements from "../components/Announcement"
import Navbar from "../components/Navbar"
import Slider from "../components/Slider";
import Categories from "../components/Categories";

import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
const Home = () =>
{
  return (
    <div>
      <Navbar />
      <Announcements />
      <Slider />
      <Categories />
      <Newsletter />
      <Footer />
    </div>
  )
}
export default Home