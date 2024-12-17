import React from 'react'
import Card from '../components/card.jsx'
import bg from '../assets/bg.jpg'

const coCordis = [
  {
    name: 'Luv Sharma',
    imageUrl: 'https://cc.iitmandi.co.in/assets/cc_core/_Luv_Sharma_IIT_Mandi.png',
     linkedin: "https://www.linkedin.com/in/luvsharmaa/",
      instagram: "https://www.instagram.com/luvsharma2004/"
  },
  {
    name: 'Abhinandan Kumar',
    imageUrl: './src/assets/teamphoto/abhinandan.jpeg',
     linkedin: "https://www.linkedin.com/in/nandan645/",
      instagram: "https://www.instagram.com/abhi.nandan.45/"
  },
 
]

const members = [
  {
      name: "Manasvi",
      imageUrl: "./src/assets/teamphoto/Manasvi.jpg",
      linkedin: "https://www.linkedin.com/in/manasvi-k-227395326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://instagram.com/manu.kyatham_/"
  },
  {
      name: "Piyush Kumar",
      imageUrl: "./src/assets/teamphoto/Pihu.jpg",
      linkedin: "https://www.linkedin.com/in/piyush-kumar-852082281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/pihu_26112005/profilecard/?igsh=cHg2NnBiZW9wZXNm"
  },
  {
      name: "Kartik Verma",
      imageUrl: "./src/assets/teamphoto/kartik.jpg",
      linkedin: "https://www.linkedin.com/in/kartik-verma-6643161b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/kartik_verma_2328?igsh=Ym95dnR3cjlpMzNl"
  },
  {
    name: "Shubh Sahu",
    imageUrl: "./src/assets/teamphoto/shubh.jpg",
    linkedin: "https://www.linkedin.com/in/shubhxtech/",
    instagram: "https://www.instagram.com/sahoo_shubh/"
},
  {
      name: "Arpita Kumari",
      imageUrl: "./src/assets/teamphoto/Arpita.jpg",
      linkedin: "https://www.linkedin.com/in/arpita-kumari-b371562a5/",
      instagram: "https://www.instagram.com/arpitaa1112/"
  },
  {
    name: "Pragyansh Saxena",
    imageUrl: "./src/assets/teamphoto/pragyansh.jpeg",
    linkedin: "https://www.linkedin.com/in/pragyansh-saxena-3b94492b8/",
    instagram: null
},
  {
      name: "Anamika",
      imageUrl: "./src/assets/teamphoto/Anamika.jpg",
      linkedin: "https://www.linkedin.com/in/anamika-godara-834ab2293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      instagram: null
  },
  {
      name: "Kaustubh Srivastava",
      imageUrl: "./src/assets/teamphoto/kaustab.jpg",
      linkedin: "https://www.linkedin.com/in/kaustubh-srivastava-963810297/",
      instagram: "https://www.instagram.com/kaustubh__004/"
  },
  {
      name: "Bharat Agrawal",
      imageUrl: "./src/assets/teamphoto/bharat.jpg",
      linkedin: "https://www.linkedin.com/in/bharat-agrawal-a9487a223/",
      instagram: "https://www.instagram.com/bharat_agrawal420/"
  },
  {
      name: "Arka Mukhopadhyay",
      imageUrl: "./src/assets/teamphoto/arka.jpg",
      linkedin: "https://www.linkedin.com/in/arka-qchaos/",
      instagram: "https://www.instagram.com/_qcha0s/"
  },
  {
      name: "Gaurav Kushwaha",
      imageUrl: "./src/assets/teamphoto/Gaurav.jpg",
      linkedin: "https://www.linkedin.com/in/gaurav-kushwaha-friday-code",
      instagram: "https://www.instagram.com/kush.gaurav12/profilecard/?igsh=cDN6NnZjcHh5djlk"
  },
  {
      name: "Divyansh Jain",
      imageUrl: "./src/assets/teamphoto/divyansh.jpeg",
      linkedin: "https://www.linkedin.com/in/divyansh-jain-9874a4214/",
      instagram: "https://www.instagram.com/divyanshjain_21/?hl=en"
  },
  {
      name: "Aarvik Oberoi",
      imageUrl: "./src/assets/teamphoto/aarvik.jpg",
      linkedin: "www.linkedin.com/in/aarvik-oberoi-1aa96927a",
      instagram: "instagram.com/r_.vik"
  },
  {
      name: "Saurabh Singh",
      imageUrl: "./src/assets/teamphoto/saurabhsingh.jpg",
      linkedin: "https://www.linkedin.com/in/saurabh-singh-4b9556281/",
      instagram: "https://www.instagram.com/saur_hub_007/"
  },
  {
      name: "Honey Gupta",
      imageUrl: "./src/assets/teamphoto/honey.jpg",
      linkedin: "https://www.linkedin.com/in/honey-gupta-2863b0296",
      instagram: null
  },
  {
      name: "Risa Chaudhari",
      imageUrl: "./src/assets/teamphoto/risa.jpg",
      linkedin: "https://www.linkedin.com/in/risa-chaudhari-a2aa84298/",
      instagram: "NA"
  },
  {
      name: "Arani Ghosh",
      imageUrl: "./src/assets/teamphoto/arani.jpg",
      linkedin: "https://www.linkedin.com/in/arani-ghosh-b64216257/",
      instagram: "https://www.instagram.com/arani_ghosh_47/"
  },

  {
      name: "Gyan Ratan",
      imageUrl: "./src/assets/teamphoto/gyan.jpg",
      linkedin: "https://www.linkedin.com/in/gyanratan",
      instagram: null
  },
  {
      name: "Pranjal",
      imageUrl: "./src/assets/teamphoto/pranjal.jpg",
      linkedin: "https://www.linkedin.com/in/pranjal-gumber-535146226/",
      instagram: null
  },
  {
      name: "Harshit jain",
      imageUrl: "./src/assets/teamphoto/harshit.jpg",
      linkedin: "https://www.linkedin.com/in/harshit-jain-514945217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: null
  },
  {
      name: "Abhishek Singh Rawat",
      imageUrl: "./src/assets/teamphoto/abhishek.jpg",
      linkedin: "https://www.linkedin.com/in/intellisense-/",
      instagram: "https://www.instagram.com/abhishek.singh_rawat/f"
  },
  {
      name: "Rajsi Sangra",
      imageUrl: "./src/assets/teamphoto/rajsi.jpeg",
      linkedin: "https://www.linkedin.com/in/rajsi-sangra-8ab90431b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      instagram: null
  },
  {
      name: "Adithya Kumar Pandey",
      imageUrl: "./src/assets/teamphoto/adityakp.jpg",
      linkedin: "https://www.linkedin.com/in/adithyapandey",
      instagram: "https://www.instagram.com/adithyapandeykumar/"
  }
]

const Teams = () => {
  return (
    <div className="relative pt-16 h-full w-full bg-black overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-screen bg-cover bg-center bg-no-repeat opacity-90" style={{ backgroundImage: `url(${bg})` }}/>
      <div className="fixed left-0 top-0 inset-0 grid"
        style={{
          backgroundImage: 'radial-gradient(circle, #eeeeee 2px, transparent 2px)',
          backgroundSize: '64px 64px',
          backgroundAttachment: 'fixed',
          opacity: 0.3
        }}>
      </div>
      <div className='relative z-10 text-center pt-10'>
      <h1 className="text-8xl font-bold text-white mb-4 pb-8 animate-fadeIn">
          &lt;The Team /&gt;
        </h1>

        <div className = 'flex flex-col  items-center'>
          <div className = 'mb-32 flex flex-col items-center'>
            <h1 className = 'text-5xl font-bold text-white mb-20'>COORDINATOR</h1>
            <Card name = 'Abhijeet Jha' linkedin={"https://www.linkedin.com/in/abhi-abc/"} instagram={"https://www.instagram.com/jha_abhijeet_0809/"} imageUrl = './src/assets/teamphoto/abhijheetjha.jpeg'/>
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
                  {<Card name = {coCordi.name} instagram = {coCordi.instagram} linkedin = {coCordi.linkedin} imageUrl = {coCordi.imageUrl} />}
                  
                </div>
              ))}
            </div>
          </div>
          
          <div className = 'mb-20 flex flex-col items-center'>
            <h1 className = 'text-5xl font-bold text-white mb-20'>CORE MEMBERS</h1>
            <div className="flex flex-wrap justify-evenly gap-28" style={{ margin: '5%' }}>
              {members.map((member, index) => (
                <div
                  key={index}
                  className=""
                >
                  {console.log(member)}
                  {<Card name = {member.name} imageUrl = {member.imageUrl} instagram={member.instagram} linkedin={member.linkedin} />}
                  
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