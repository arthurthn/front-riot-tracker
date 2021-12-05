import React from 'react';
import './RecentMatches.css'
import RecentMatchesStats from '../RecentMatchesStats/RecentMatchesStats'

function RecentMatches() {
    return(
        <div className="containerRecentMatch">
            <span className="boxTitle titleRecentMatches">Match recent</span>
                <div className="boxRecentMatches">
                    <RecentMatchesStats />
                    <RecentMatchesStats />
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