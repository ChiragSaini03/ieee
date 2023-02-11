import React from 'react'
import "./news.css";

const iconPath = process.env.PUBLIC_URL;

function News() {

    // var tablinks = document.getElementsByClassName("tab-links");
    // var tabcontents = document.getElementsByClassName("tab-contents");
    
    // function opentab(event,tabname){
    //     for(tablink of tablinks){
    //         tablink.classList.remove("active-link");
    //     }
    //     for(tabcontent of tabcontents){
    //         tabcontent.classList.remove("active-tab");
    //     }
    //     event.currentTarget.classList.add("active-link");

    //     document.getElementById(tabname).classList.add("active-tab");
    // }
  return (
    <div>
        <div id="about">
    <div class="container">
        <div class="row">
            <div class="about-col-1">
                <img src={iconPath+"newslo.jpeg" }alt="group photo" />
            </div>
            <div class="about-col-2">
                <h1>NEWS</h1>
                <p>The gaming industry is a constantly evolving and rapidly growing field, with new advancements, releases, and trends emerging all the time. From the latest video game releases and hardware updates to esports tournaments and industry events, there is always something new and exciting happening in the world of gaming.</p>


                <div class="tab-titles">
                    {/* <p class="tab-links active-link" onclick={opentab('COD')}>COD</p>
                    <p class="tab-links" onclick={opentab('GTA')}>GTA</p>
                    <p class="tab-links"onclick={opentab('SKYRIM')}>SKYRIM</p> */}
                </div>

                <div class="tab-contents active-tab" id="COD">
                    <ul>
                        <li>Activision confirms that Gun Game is coming to Call of Duty: Modern Warfare 2 as a part of the upcoming Season 2 update.
                        </li>
                        <li><a> COD: MW2's revamped Gunsmith introduces Weapon Platforms, Receivers, weapon evolutions, shared attachments, and a progression overhaul that cuts down on repetitive per-weapon/attachment unlocks. Is this what we've been waiting for?</a></li>

                    </ul>
                </div>

                <div class="tab-contents" id="GTA">
                    <ul>
                        <li>GTA Online Player Escapes Pursuit, But Has Bad Luck Soon After</li>
                        <li>A GTA Online player successfully escapes from a pursuit, but then something happens that is sad in the funniest way possible.</li>
                        
                    </ul>
                </div>

                <div class="tab-contents" id="SKYRIM">
                    <ul>
                        <li>Skyrim Clip Shows Why Players Need to Be Careful With Mods</li>
                        <li>Mods have likely played a big role in the success of Skyrim, but one clip shows why fans may want to be careful when using them.</li>
                        
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
  )
}

export default News;