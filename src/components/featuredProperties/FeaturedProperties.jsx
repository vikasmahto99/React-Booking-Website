import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://media.istockphoto.com/id/1152343454/photo/modern-scandinavian-living-room-interior-3d-render.jpg?s=612x612&w=0&k=20&c=WucxzoqDkm-srMuBI763Xkj1GeqZsiiJx7YpLzOtWgs="
          alt=""
          className="fpImg"
        />
        <span className="fpName">Comfort Suites Airport</span>
        <span className="fpCity">Austin</span>
        <span className="fpPrice">Starting from $140</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://media.istockphoto.com/id/171591165/photo/new-kitchen-in-modern-luxury-home.webp?b=1&s=170667a&w=0&k=20&c=3ybu2lK4gc9RyT3TJy41aOpe9Y_42WWyJBPno9I6JM8="
          alt=""
          className="fpImg"
        />
        <span className="fpName">Four Seasons Hotel</span>
        <span className="fpCity">Lisbon</span>
        <span className="fpPrice">Starting from $99</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://media.istockphoto.com/id/1182454657/photo/bohemian-living-room-interior-3d-render.webp?b=1&s=170667a&w=0&k=20&c=Wia2o8ZI2VGoozS_WAF_Bf3jjjFhPdz8W8R4kVGasa0="
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hilton Garden Inn</span>
        <span className="fpCity">Berlin</span>
        <span className="fpPrice">Starting from $105</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;