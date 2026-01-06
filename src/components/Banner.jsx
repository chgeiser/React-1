import logoBanner from '../assets/img/Header.jpg';
import '../assets/css/Banner.css'; 

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