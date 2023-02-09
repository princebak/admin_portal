import React from 'react'
import './topbar.css'
import { NotificationsNone, Language, Settings } from '@material-ui/icons'

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topbarLeft">
            <span className="logo">yo-admin</span>
        </div>
        <div className="topbarRight">
            <div className="topbarIconContainer">
                <NotificationsNone />
                <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
                <Language />
            </div>
            <div className="topbarIconContainer">
                <Settings />
            </div>
            <img className="topAvatar" src="/images/user_avatar.png" alt="Avatar" />
        </div>
      </div>
    </div>
  )
}
