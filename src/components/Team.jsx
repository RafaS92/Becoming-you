import React from 'react'
import "./Team.css"
import TeamItem from './TeamItem';

function Team() {
    return (
        <div id="team" className="team-container" >
        <strong  >Meet Our Team</strong>
            <div className="team-cards-container">
                <TeamItem title="Project Manager" name="Nicky Nash" email="mailto:NickNash@becomingyou.com" pic="https://a.wattpad.com/useravatar/tyrashanks.256.505158.jpg" />
                <TeamItem title="Exercise Physiologist" name="Alan Turner" email="mailto:AlanT@becomingyou.com" pic="https://cdn35.picsart.com/153950516000202.jpeg?type=webp&to=crop&r=256" />
                <TeamItem title="Dietitian" name="Jules Winnfield" email="mailto:SamuelLJ@becomingyou.com" pic="https://i.pinimg.com/originals/0a/f2/31/0af231f23559e14fc51c6a70da12129c.jpg" />
            </div>
        </div>
    )
}

export default Team
