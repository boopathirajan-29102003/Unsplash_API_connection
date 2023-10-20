import { useMemo, useState } from "react";
import './unsplash.css';
import { IconContext } from "react-icons";
import { SlLike } from "react-icons/sl";
import { MdClose } from 'react-icons/md'



const PhotoList = ({ photos, query }) => {

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) => ((photo.user.name).toLowerCase()).includes(query.toLowerCase()));
  }, [photos, query]);
  return (
    <div style={{ minHeight: '100%', minWidth: '100%' }}>
      <div className="main">
        <div className="container">
          {filteredPhotos.map((photo) => (
            <Photo key={photo.id} photo={photo} />
          ))}
        </div>
      </div>

    </div>
  );
};

const Photo = ({ photo }) => {
  const { urls, user, likes } = photo;
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupImage, setPopupImage] = useState(null);

  const togglePopupVisibility = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleClickImage = (image) => {
    setPopupImage(image);
    togglePopupVisibility();
  };

  const handleClickCloseIcon = () => {
    setPopupImage(null);
    togglePopupVisibility();
  };
  return (
    <div style={{ color: 'red' }} className="image">
      <img src={urls.thumb} alt={photo.alt_description} onClick={() => handleClickImage(photo)} />
      <div className="contents" >
        <div>
          {user.name}
        </div>
        <div style={{ display: 'flex' }}>
          <SlLike style={{ color: 'white' }} />&nbsp;&nbsp;
          <li style={{ listStyle: 'none' }}> {likes}</li>
        </div>
      </div>

      {isPopupVisible && popupImage && (
        <div className="popup">
          <div className="image-container">
            <img className="popup-image" src={popupImage.urls.thumb} alt={popupImage.alt_description} />
          </div>
          <div className="icon-container">
          <IconContext.Provider value={{ size: '20px', color: 'white' }}>
            <div className="close-icon">
              <MdClose onClick={handleClickCloseIcon} />
            </div>
          </IconContext.Provider>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoList