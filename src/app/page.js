import Navber from "./Component/Navber";
import Announcement from "./Component/Announcement";
import Hiro from "./Component/Hiro";
import Collection from "./Component/Collection";
import ProductCarosel from "./Component/ProductCarosel";
import PopularProducts from "./Component/PopularProducts";
import CustomerTestimonial from "./Component/CustomerTestimonial";
import Footer from "./Component/Footer";
import Blog from "./Component/Blog";

export default function Home() {
  return (
    <div>
      <Announcement />
      <Navber />
      <div id="hiro">
        <Hiro />
      </div>
      <div id="collection">
        <Collection />
      </div>
      <div id="products">
        <ProductCarosel />
        <PopularProducts />
      </div>
      <div id="testimonial">
        <CustomerTestimonial />
      </div>
      <div id="blog">
        <Blog />
      </div>
      <div id="Footer">
        {" "}
        <Footer />
      </div>
    </div>
  );
}
