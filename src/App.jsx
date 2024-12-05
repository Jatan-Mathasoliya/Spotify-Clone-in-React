import splogo from './assets/sp.png'
import home from './assets/Home.png'
import search from './assets/Search.png'
import lib from './assets/lib.png'
import creat from './assets/Create.png'
import like from './assets/leftlike.png'
import ep from './assets/ep.png'
import ins from './assets/ins.png'
import arr from './assets/arr.png'
import user from './assets/User.png'
import liked from './assets/Liked.png'
import image4 from './assets/image4.png'
import image3 from './assets/image3.png'
import image1 from './assets/image1.png'
import image8 from './assets/image8.png'
import image7 from './assets/image7.png'
import image6 from './assets/image6.png'
import image5 from './assets/image5.png'
import image10 from './assets/image10.png'

import image from './assets/image9.png'
import './Main.css'

function Main() {
    return (
        <>
            <div className="main">
                <div className="mainleft">
                    <div className="logo">
                        <img src={splogo} alt="" />
                    </div>
                    <div className="topleft">
                        <table className='toptable'>
                            <tr>
                                <td><img src={home} alt="" /></td>
                                <td>Home</td>
                            </tr>
                            <tr>
                                <td><img src={search} alt="" /></td>
                                <td>Search</td>
                            </tr>
                            <tr>
                                <td><img src={lib} alt="" /></td>
                                <td>Your Library</td>
                            </tr>
                        </table>
                    </div>
                    <div className="midleft">
                        <table className="midtable">
                            <tr>
                                <td><img src={creat} alt="" /></td>
                                <td>Create Playlist</td>
                            </tr>
                            <tr>
                                <td><img src={like} alt="" /></td>
                                <td>Liked Songs</td>
                            </tr>
                            <tr>
                                <td><img src={ep} alt="" /></td>
                                <td>Your Episods</td>
                            </tr>
                        </table>
                    </div>

                    <div className="endleft">
                        <div>FAV</div>
                        <div>Daily Mix 1</div>
                        <div>Discover Weekly</div>
                        <div>Malayalam</div>
                        <div>Dance / Electronix Mix</div>
                        <div>EDM / Populer</div>
                    </div>
                    <div className="lastleft">
                        <div className="lastleftimg">
                            <img src={ins} alt="" />
                        </div>
                        <div>Install App</div>
                    </div>
                </div>
                <div className="main_body">


          <div className="body_top">
            <img src={arr} />
            <img src={user} />
          </div>

          <h1 className="heading">Good Morning</h1>

          <div className="playlist_menu">

            <div className="playlist_card">
              <img src={liked} />
              <span><b>Liked Songs</b></span>
            </div>
            <div className="playlist_card">
              <img src={image4} />
              <span><b>Liked Songs</b></span>
            </div>
            <div className="playlist_card">
              <img src={image3} />
              <span><b>Liked Songs</b></span>
            </div>
            <div className="playlist_card">
              <img src={image1} />
              <span><b>Liked Songs</b></span>
            </div>
            <div className="playlist_card">
              <img src={liked} />
              <span><b>Liked Songs</b></span>
            </div>

          </div>


          <h1 className="heading">Shows you might like</h1>

          <div className="show_menu">

            <div className="show_card">

              <img src={image} />

              <div className="text">
                <h3>Weekly Motivation</h3>
                <div>Jatan Mathasoliya</div>
              </div>

            </div>
            <div className="show_card">

              <img src={image8} />

              <div className="text">
                <h3>Meditation self</h3>
                <div>Jatan Mathasoliya</div>
              </div>

            </div>
            <div className="show_card">

              <img src={image7} />

              <div className="text">
                <h3>Words</h3>
                <div>Jatan Mathasoliya</div>
              </div>

            </div>
            <div className="show_card">

              <img src={image6} />

              <div className="text">
                <h3>The Alexa Show</h3>
                <div>Jatan Mathasoliya</div>
              </div>

            </div>
            <div className="show_card">

              <img src={image5} />

              <div className="text">
                <h3>The Stories</h3>
                <div>Jatan Mathasoliya</div>
              </div>

            </div>
            <div className="show_card">

              <img src={image10} />

              <div className="text">
                <h3>Weekly Motivation</h3>
                <div>Jatan Mathasoliya</div>
              </div>

            </div>


          </div>


        </div>

            </div>
        </>
    )
}

export default Main;