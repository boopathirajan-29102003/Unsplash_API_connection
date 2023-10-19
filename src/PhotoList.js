import { useMemo } from "react";
import './unsplash.css';
import { IconContext } from "react-icons";
import { FcLike } from "react-icons/fc";


const PhotoList = ({ photos, query }) => {

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) => ((photo.user.name).toLowerCase()).includes(query.toLowerCase()));
  }, [photos, query]);


  return (
    <div className="main">
      <div className="container">
        {filteredPhotos.map((photo) => (
          <Photo key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

const Photo = ({ photo }) => {
  const { urls, user, likes } = photo;
  return (
    <div className="image">
      <img src={urls.thumb} alt={photo.alt_description} />
      <div className="contents">
        {user.name}
        <div style={{ float: 'right' }}>
          {likes}
          <IconContext.Provider value={{ color: "black", className: "icon" }}>
            <FcLike />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default PhotoList