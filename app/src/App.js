import React, {useState, useEffect} from 'react';
import './App.css';
import Campaigns from './Campaigns.js'
import axios from 'axios'

function App() {
  const [campaignsInfo, updateCampaignsInfo] = useState([])
  useEffect( () => {
    async function getData() {
    let campaignData = await axios.get('https://www.plugco.in/public/take_home_sample_feed')
    updateCampaignsInfo(campaignData.data)
  }
  getData()
  }, []);

  return (
    <div>
      <div className="plugs"> PLUGS </div>
      <div>
        {campaignsInfo.campaigns
         ? campaignsInfo.campaigns.map((campaigns, i) =>
        <Campaigns campaignInfo={campaigns} key={i}/>
         )
          : <p>Loading...</p>
      }
      </div>
    </div>
  );
}

export default App;
