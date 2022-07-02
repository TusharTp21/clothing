import { Link } from 'react-router-dom';
import './directory-item.styles.scss';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  const direct=`shop/${title}`;
  return (
    <div className='directory-item-container'>
    
    
    <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      
      <div className='body'>
       
      <Link to={direct}>  
      <h2>{title}</h2>
      </Link>
        <p>Shop Now</p>
      
      </div>
      
    </div>
  );
};

export default DirectoryItem;