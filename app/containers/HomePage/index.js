/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect, useState } from 'react';
import DiamondIcon from '@mui/icons-material/Diamond';
import InsightsIcon from '@mui/icons-material/Insights';
import UsbIcon from '@mui/icons-material/Usb';
import CampaignIcon from '@mui/icons-material/Campaign';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import PersonIcon from '@mui/icons-material/Person';
import AssessmentIcon from '@mui/icons-material/Assessment';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import './index.css';
import { dataConfirmed, dataCovid } from '../../redux/Services';
import Chart from './Chart';
export default function HomePage() {
  const [covidData, setCovidData] = useState([]);
  const [confirmedData, setConfirmedData] = useState([' ']);
  useEffect(() => {
    dataConfirmed().then(response => {
      setConfirmedData(response.data);
      console.log(response.data[3]);
    });
  }, [' ']);
  console.log(confirmedData['3']);

  useEffect(() => {
    dataCovid().then(response => {
      setCovidData(response.data.confirmed);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="hero-container">
      <div className="left-menu">
        <div className="home">HOME</div>
        <div className="learning-menu">
          LEARNING
          <div className="courses">
            <DiamondIcon />
            Courses
          </div>
          <div className="learning-plans">
            <UsbIcon />
            Learning Plans
          </div>
        </div>
        <div className="manage-menu">
          MANAGE
          <div className="users">
            <PersonIcon />
            Users
          </div>
          <div className="skills">
            <SettingsSuggestIcon />
            Skills
          </div>
          <div className="report">
            <AssessmentIcon />
            Report
          </div>
          <div className="analytics">
            <InsightsIcon />
            Analytics
          </div>
          <div className="announcements">
            <CampaignIcon />
            Announcements
          </div>
        </div>
        <div className="configure-menu">
          CONFIGURE
          <div className="points">
            <StarHalfIcon />
            Points
          </div>
          <div className="reward">
            <EmojiEventsIcon />
            Reward
          </div>
          <div className="email-templates">
            <MailOutlineIcon />
            Email Templates
          </div>
          <div className="company-info">
            <LightbulbIcon />
            Company Info
          </div>
          <div className="billing">
            <AttachMoneyIcon />
            Billing
          </div>
        </div>
      </div>
      <div className="right-content">
        <div className="codemi-home-title">Codemi Home</div>
        <div className="container-home-content">
          <div className="codemi-home-content">CHART CONTENT</div>
          <div className="codemi-home-content-2-container">
            <div className="codemi-home-content-2">
              <div className="content-2-title">Confirmed Covid Case</div>
              <div className="value-confirmed-case">{covidData.value} </div>
              <div className="chart-title">
                Data Covid Per Month <hr />
              </div>
              <div className="chart">
                <Chart />
              </div>
              <div className="top-covid-case-container">
                <div className="top-covid-case-title">
                  Covid Case in The World
                </div>
                <div className="active-case">Active Case</div>
              </div>
              <hr className="line-2" />
              <div className="container-top-rank">
                <div className="top-1">{confirmedData[0].countryRegion}</div>
                <div className="top-1-active-case">
                  {confirmedData[0].confirmed}
                </div>
              </div>
              {/* <div className="container-top-rank">
                <div className="top-2">{confirmedData[3].countryRegion}</div>
                <div className="top-2-active-case">
                  {confirmedData[3].confirmed}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
