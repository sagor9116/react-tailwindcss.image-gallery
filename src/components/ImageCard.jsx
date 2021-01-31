import React from 'react';
import uuid from 'react-uuid';
import Tags from './Tags';

const ImageCard = (props) => {
    const {webformatURL,user,views,likes,downloads} = props.image;
    const tags = props.image.tags.split(',')
    return (
        <div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg mt-2">
      <img src={webformatURL} alt="card1" className="w-full max-h-80"/>
      <div className="px-6 py-4">
        <h1 className="font-bold text-red-600 text-xl mb-2">Photos By {user}</h1>
        <ul>
          <li>
            <strong>Views: </strong>
            {views}
          </li>
          <li>
            <strong>Download: </strong>
            {downloads}
          </li>
          <li>
            <strong>Likes: </strong>
             {likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map(tag => (
            <Tags key={uuid()} tag={tag} />
        ))}
      </div>
    </div>      
    </div>
    )
}

export default ImageCard;
