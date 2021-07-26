import React from 'react';
import './Campaigns.css';
import Media from './Media'

function Campaigns ({campaignInfo}) {
  let thumbUrl = campaignInfo.campaign_icon_url
  return (
    <div>
      <div className="campaignHeader">
        <img className = "campaignIcon" src={thumbUrl} alt="campaign thumbnail"/>
        <div className="headerInfo">
          <p className="campaignTitle">{campaignInfo.campaign_name}</p>
          <p className="campaignInstall"> {campaignInfo.pay_per_install} per install</p>
        </div>
      </div>
      <div className="campaignSpread">
        {campaignInfo.medias.map((media, i) =>
          <Media mediaInfo={media} key={i} />
        )}
      </div>
    </div>
  )
}

export default Campaigns