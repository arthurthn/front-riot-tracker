import React from 'react';
import './style.css';
import backgroundImg from '../assets/images/background_stats.jpg';
import mainPic from '../assets/images/avatarMainPic.png';
import pic1 from '../assets/images/lane_pic1.png';
import pic2 from '../assets/images/lane_pic2.png';


function pageclassement() {
    return (
        <div className="background-image">
            <img src={backgroundImg} className="background-image"/>
            <div className="gradient"></div>
            <div className="user">
                <img src={mainPic} className = "mainPic"/>
                <div className="usernameText">Kimiri The Best</div>
                <div className="userLevel">Summoner level <span>399</span></div>
            </div>

            <div className="Tableau">
                <table className="table">
                <tr>
    <th></th>
    <th>Name</th>
    <th>KDA</th>
    <th>Degats</th>
    <th>CS</th>
    <th>Items</th>
  </tr>
 
  <tr >
    <td></td>
    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, assumenda vel asperiores accusantium repellendus deserunt minima laborum. Totam enim quis similique laborum cumque, aliquid repudiandae, amet deserunt, sint dolor doloribus?</td>
    <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, eveniet voluptate animi ducimus nobis ut veniam, blanditiis debitis incidunt harum eum nisi. Voluptate quas possimus soluta, perferendis reiciendis quasi dolores?</td>
    <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eius hic libero quo. Quis, consequatur! Odio voluptas commodi fugit. At quod saepe omnis consequatur quisquam. Hic eaque cum accusamus perspiciatis?</td>
    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, explicabo similique possimus molestias facilis deserunt at, qui sapiente omnis consequatur voluptate ipsam porro aspernatur quaerat voluptates repellendus odio quae quasi.</td>
    <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, tenetur alias. Ducimus ipsam, soluta error at officia laborum cum quasi ad? Totam, incidunt dolores tempore omnis repudiandae ab delectus enim.</td>
  </tr>
</table>
            </div>
            {/* <div className="recentGames">
                <div className="titleRecentGames">
                    <span>LAST 10 GAMES</span>
                    <div className="boxRecentGames">
                        <div className="lanesRecentGames">
                            <span>LANES</span>
                            <div className="topJungl">
                                <img src={pic1} className ="pic"/>
                                <img src={pic2} className ="pic pic2"/>
                                <div className="laneText">
                                    <div className="laneTopText">
                                        <div className="Toptitle">Top</div>
                                        <div className="winRate">Win.58%</div>
                                    </div>    
                                </div>
                        </div>
                        <div className="array">
                            <div className="laneText">
                                 <div className="laneJunglText">
                                     <div className="Toptitle">Jungl</div>
                                    <div className="winRate">Win.36%</div>
                                </div>                     
                            </div>
                        </div>
                        <div className="winRateBar">
                            <div className="emptyBar">
                            </div>
                            <div className="loadedBar">
                                <span>V</span>
                            </div>
                        </div>
                        <div className="winStats">
                            <p>Win ratio <span>.36%</span><br/>
                            Dmg <span>10 730</span>
                            <br/>Cs <span>146</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
    </div>
    )
}

// function  pagestats() {
//     return (
//         <div>
//       <div className="cards">
//         <div className="card card-1">
      
//       <h2 className="card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
      
//     </div>
//     <div className="card card-1">
      
//       <h2 className="card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
      
//     </div>
//     <div className="card card-1">
      
//       <h2 className="card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
      
//     </div>  
//     <div className="card card-1">
      
//       <h2 className="card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
      
//     </div>
//         </div>
//         </div>
//     )
// }

export default pageclassement;