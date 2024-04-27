import { LargeCard } from "./components/LargeCard";
import React from 'react'
import Smallcard from "./components/Smallcard";
import WantCompetencies from "./components/wantCompetencies";
import storage from "./storage"
import "./App.css";


const App = () => {

  const skills = storage.skills;
  const wantedSkills = storage.wantedSkills;


  return (
    <>
      <div>
        <LargeCard />
        <div className="skills">
          {
            skills.map(item => <Smallcard title={item.title} key={item.id} />)
          }
        </div>
        <div className="needToLearn">
          {
            wantedSkills.map(item => <WantCompetencies title={item.title} key={item.id} />)
          }
        </div>
      </div>
    </>
  )
}

export default App