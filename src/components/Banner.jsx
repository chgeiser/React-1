import logoBanner from '../assets/img/banner.jpg';
import '../components/Banner.css'; 

const Banner = () => {
  return (
    <>
    <div className="banner">
      <img src={logoBanner} className="banner-img"/>
    </div>
    </>
  )
}

export default Banner