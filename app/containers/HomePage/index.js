/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
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

export default function HomePage() {
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
          <div className="codemi-home-content-2">CHART CONTENT 2</div>
        </div>
      </div>
    </div>
  );
}
