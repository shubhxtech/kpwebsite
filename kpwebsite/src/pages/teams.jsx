import React from 'react'
import Card from '../components/card.jsx'
import bg from '../assets/bg.jpg'

// Two array of objects just for example
const coCordis = [
  {
    name: 'Luv Sharma',
    imageUrl: 'https://cc.iitmandi.co.in/assets/cc_core/_Luv_Sharma_IIT_Mandi.png'
  },
  {
    name: 'Luv Sharma',
    imageUrl: 'https://cc.iitmandi.co.in/assets/cc_core/_Luv_Sharma_IIT_Mandi.png'
  },
  {
    name: 'Luv Sharma',
    imageUrl: 'https://cc.iitmandi.co.in/assets/cc_core/_Luv_Sharma_IIT_Mandi.png'
  }
]

const members = [
  {
    name: 'Member 1',
    imageUrl: "https://cc.iitmandi.co.in/assets/cc_core/_Luv_Sharma_IIT_Mandi.png"
  },
  {
    name: 'Member 2',
    imageUrl: "https://cc.iitmandi.co.in/assets/cc_core/_Luv_Sharma_IIT_Mandi.png"
  },
  {
    name: 'Member 3',
    imageUrl: "https://cc.iitmandi.co.in/assets/cc_core/_Luv_Sharma_IIT_Mandi.png"
  },
  {
    name: 'Member 4',
    imageUrl: "https://cc.iitmandi.co.in/assets/cc_core/_Luv_Sharma_IIT_Mandi.png"
  },
  {
    name: 'Member 5',
    imageUrl: "https://cc.iitmandi.co.in/assets/cc_core/_Luv_Sharma_IIT_Mandi.png"
  },
  {
    name: 'Member 6',
    imageUrl: "https://cc.iitmandi.co.in/assets/cc_core/_Luv_Sharma_IIT_Mandi.png"
  },
  {
    name: 'Member 7',
    imageUrl: "https://cc.iitmandi.co.in/assets/cc_core/_Luv_Sharma_IIT_Mandi.png"
  },
  {
    name: 'Member 8',
    imageUrl: "https://cc.iitmandi.co.in/assets/cc_core/_Luv_Sharma_IIT_Mandi.png"
  },
  {
    name: 'Member 9',
    imageUrl: "https://cc.iitmandi.co.in/assets/cc_core/_Luv_Sharma_IIT_Mandi.png"
  },
  {
    name: 'Member 10',
    imageUrl: "https://cc.iitmandi.co.in/assets/cc_core/_Luv_Sharma_IIT_Mandi.png"
  },
  {
    name: 'Member 11',
    imageUrl: "https://cc.iitmandi.co.in/assets/cc_core/_Luv_Sharma_IIT_Mandi.png"
  },
]

const Teams = () => {
  return (
    <div className="relative h-full w-full bg-black overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-screen bg-cover bg-center bg-no-repeat opacity-90" style={{ backgroundImage: `url(${bg})` }}/>
      
      <div className='relative z-10 text-center pt-10'>
        <h1 className="text-6xl font-bold text-white mb-20">
          &lt;TEAM /&gt;
        </h1>

        <div className = 'flex flex-col  items-center'>
          <div className = 'mb-32 flex flex-col items-center'>
            <h1 className = 'text-5xl font-bold text-white mb-20'>COORDINATOR</h1>
            <Card name = 'Cordinator' imageUrl = ''/>
          </div>
          
          <div className = 'mb-32 flex flex-col items-center'>
            <h1 className = 'text-5xl font-bold text-white mb-20'>CO-COORDINATOR</h1>
            <div className="flex flex-wrap justify-evenly gap-32">
              {coCordis.map((coCordi, index) => (
                <div
                  key={index}
                  className=""
                >
                  {console.log(coCordi)}
                  {<Card name = {coCordi.name} imageUrl = {coCordi.imageUrl} />}
                  
                </div>
              ))}
            </div>
          </div>

          <div className = 'mb-20 flex flex-col items-center'>
            <h1 className = 'text-5xl font-bold text-white mb-20'>CORE MEMBERS</h1>
            <div className="flex flex-wrap justify-evenly gap-28">
              {members.map((member, index) => (
                <div
                  key={index}
                  className=""
                >
                  {console.log(member)}
                  {<Card name = {member.name} imageUrl = {member.imageUrl} />}
                  
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Teams