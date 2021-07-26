import React from 'react';
import './Media.css';
import {AiOutlineDownload, AiOutlineLink, AiFillPlayCircle} from 'react-icons/ai';

function Media ({mediaInfo}) {
  const thumbnailUrl = mediaInfo.cover_photo_url

  return (
    <div className="campaignMedia">
      <img className="campaignThumb" src={thumbnailUrl} alt="campaign thumbnail" />
        <div className="buttonArea">
        <button className = "buttons" onClick={() => {navigator.clipboard.writeText(mediaInfo.tracking_link)}}> <AiOutlineLink /> </button>
        <a href={mediaInfo.download_url} target="_blank" rel="noopener noreferrer" download>
          <button className = "buttons">
            <i />
            <AiOutlineDownload className="icons" />
          </button>
        </a>
        {mediaInfo.media_type === "video"
          ? <AiFillPlayCircle className="playButton"/>
          : null
        }
        </div>
    </div>
  )
}

export default Media