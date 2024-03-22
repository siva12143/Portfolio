import React, { useState, useEffect } from 'react'
export default function Home() {


  const role = ["frontend developer", "UI Developer", "Zoho Developer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentLetters, setCurrentLetters] = useState('');

  useEffect(() => {
    let timer;
    if (currentLetters.length < role[currentRoleIndex].length) {
      timer = setTimeout(() => {
        setCurrentLetters(prevLetters => prevLetters + role[currentRoleIndex][currentLetters.length]);
      }, 100); // Adjust speed as needed
    } else {
      timer = setTimeout(() => {
        setCurrentLetters('');
        setCurrentRoleIndex(prevIndex => (prevIndex + 1) % role.length);
      }, 2000); // Delay before starting the next role
    }
    return () => clearTimeout(timer);
  }, [currentLetters, currentRoleIndex, role]);

  return (
    <div className="keira_cont home" id="home">
      <div className="keira_inner_cont">
        <span className="keira_cont_name">i am siva sankaran</span>
        <br />
        <h1><span>|</span>{currentLetters}</h1>
        <div className="keira_work">
          <div className="keira_works">
            <span>HTML CSS JavaScript</span><br/>
              <span>3+ Projects</span>
                <br/>
              </div>
                <div className="keira_works">
                  <span>ReactJs + Tailwind</span><br/>
                    <span>3+ Projects</span>
                      <br />
                    </div>
                      <div className="keira_works">
                        <span>Wordpress</span><br/>
                          <span>2+ Projects</span>
                            <br />
                          </div>
                          </div>
                      </div>
                    </div>
                    )
}
