import React from 'react';
import './RecentMatches.css'
import RecentMatchesStats from '../RecentMatchesStats/RecentMatchesStats'

function RecentMatches() {
    return(
        <div className="containerPage">
            <span className="boxTitle titleRecentMatches">MATCH RECENTS</span>
                <div className="boxRecentMatches">
                    <RecentMatchesStats />
                    <RecentMatchesStats />
                    <RecentMatchesStats />
                    <RecentMatchesStats />
                    <RecentMatchesStats />
                </div>
        </div>
    )
}

export default RecentMatches;