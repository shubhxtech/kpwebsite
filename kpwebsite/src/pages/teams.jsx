import React from 'react'
import Card from '../components/card.jsx'
import bg from '../assets/bg.jpg'

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
      name: "Manasvi",
      imageUrl: "https://drive.google.com/thumbnail?id=1NJINmslIJ76L4TYywRf__VeEubF6Ubbv",
      linkedin: "https://www.linkedin.com/in/manasvi-k-227395326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://instagram.com/manu.kyatham_/"
  },
  {
      name: "Piyush Kumar",
      imageUrl: "https://drive.google.com/thumbnail?id=1a-iC2PKdwVUyJ3vlWLVLHhKV571R4MMn",
      linkedin: "https://www.linkedin.com/in/piyush-kumar-852082281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/pihu_26112005/profilecard/?igsh=cHg2NnBiZW9wZXNm"
  },
  {
      name: "Kartik Verma",
      imageUrl: "https://drive.google.com/thumbnail?id=1COlPiOkOAhd5sJmnrRglnGaJ9iJUoA9C",
      linkedin: "https://www.linkedin.com/in/kartik-verma-6643161b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/kartik_verma_2328?igsh=Ym95dnR3cjlpMzNl"
  },
  {
      name: "Arpita Kumari",
      imageUrl: "https://drive.google.com/thumbnail?id=1fcUrcC1n5DnIFYxgbZnCGuVsPB4kUrxF",
      linkedin: "https://www.linkedin.com/in/arpita-kumari-b371562a5/",
      instagram: "https://www.instagram.com/arpitaa1112/"
  },
  {
      name: "Anamika",
      imageUrl: "https://drive.google.com/thumbnail?id=1UMQxc2Fx7Fijod55OPQlsa6Yv2nQ8APs",
      linkedin: "https://www.linkedin.com/in/anamika-godara-834ab2293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      instagram: null
  },
  {
      name: "Kaustubh Srivastava",
      imageUrl: "https://drive.google.com/thumbnail?id=1m1_ehuUeirap_q78vMpGCMLVC-ldkWHQ",
      linkedin: "https://www.linkedin.com/in/kaustubh-srivastava-963810297/",
      instagram: "https://www.instagram.com/kaustubh__004/"
  },
  {
      name: "Bharat Agrawal",
      imageUrl: "https://drive.google.com/thumbnail?id=1eF_SZHgt0U49G986wV0NWdVLBYLB1XUG",
      linkedin: "https://www.linkedin.com/in/bharat-agrawal-a9487a223/",
      instagram: "https://www.instagram.com/bharat_agrawal420/"
  },
  {
      name: "Arka Mukhopadhyay",
      imageUrl: "https://drive.google.com/thumbnail?id=1N1PgCfJdwkW90gVYKwgnjvUSTZ4DlPx2",
      linkedin: "https://www.linkedin.com/in/arka-qchaos/",
      instagram: "https://www.instagram.com/_qcha0s/"
  },
  {
      name: "Gaurav Kushwaha",
      imageUrl: "https://drive.google.com/thumbnail?id=1XIGW35_DLzhHr-VfCRHkcoaj6i-AyPg8",
      linkedin: "https://www.linkedin.com/in/gaurav-kushwaha-friday-code",
      instagram: "https://www.instagram.com/kush.gaurav12/profilecard/?igsh=cDN6NnZjcHh5djlk"
  },
  {
      name: "Divyansh Jain",
      imageUrl: "https://drive.google.com/thumbnail?id=1tVF7898q8t2_c-jEcrKIOkYDHYsPgv83",
      linkedin: "https://www.linkedin.com/in/divyansh-jain-9874a4214/",
      instagram: "https://www.instagram.com/divyanshjain_21/?hl=en"
  },
  {
      name: "Aarvik Oberoi",
      imageUrl: "https://drive.google.com/thumbnail?id=1lHMsVZRpxcRV6m--BA0b_dt_WkEeH5x1",
      linkedin: "www.linkedin.com/in/aarvik-oberoi-1aa96927a",
      instagram: "instagram.com/r_.vik"
  },
  {
      name: "Saurabh Singh",
      imageUrl: "https://drive.google.com/thumbnail?id=1Ow9gkoGCKaT2lkPgE_cJX9KmQ5dbtTDI",
      linkedin: "https://www.linkedin.com/in/saurabh-singh-4b9556281/",
      instagram: "https://www.instagram.com/saur_hub_007/"
  },
  {
      name: "Honey Gupta",
      imageUrl: "https://drive.google.com/thumbnail?id=1w78QCCHn_aYkQS-6dEjo4FoX_LQ3LW4u",
      linkedin: "https://www.linkedin.com/in/honey-gupta-2863b0296",
      instagram: null
  },
  {
      name: "Risa Chaudhari",
      imageUrl: "https://drive.google.com/thumbnail?id=1j2Syxy2_tIhx9KHpq5Wf1dVuI19Zuk6A",
      linkedin: "https://www.linkedin.com/in/risa-chaudhari-a2aa84298/",
      instagram: "NA"
  },
  {
      name: "Arani Ghosh",
      imageUrl: "https://drive.google.com/thumbnail?id=1raEcq0_owDcUYC5EWhCfgnGk2hH5Ivb7",
      linkedin: "https://www.linkedin.com/in/arani-ghosh-b64216257/",
      instagram: "https://www.instagram.com/arani_ghosh_47/"
  },
  {
      name: "Gyan Ratan",
      imageUrl: "https://drive.google.com/thumbnail?id=1caPt2XBDeO0NqDpRVsjvSY0NyhFe1Q48",
      linkedin: "https://www.linkedin.com/in/gyanratan",
      instagram: null
  },
  {
      name: "Pranjal",
      imageUrl: "https://drive.google.com/thumbnail?id=1UX_IB1ajikteDRbEQSvaz2w3x2BKZYYj",
      linkedin: "https://www.linkedin.com/in/pranjal-gumber-535146226/",
      instagram: null
  },
  {
      name: "Harshit jain",
      imageUrl: "https://drive.google.com/thumbnail?id=191rZUKbostuoIqBnAmCX_q4VV5wyKJQh",
      linkedin: "https://www.linkedin.com/in/harshit-jain-514945217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: null
  },
  {
      name: "Abhishek Singh Rawat",
      imageUrl: "https://drive.google.com/thumbnail?id=1-Zhj40GN3hwo9yafUWrw6xgCSsYi8mFs",
      linkedin: "https://www.linkedin.com/in/intellisense-/",
      instagram: "https://www.instagram.com/abhishek.singh_rawat/f"
  },
  {
      name: "Rajsi Sangra",
      imageUrl: "https://drive.google.com/thumbnail?id=1HMlenqVDTSRUkIL_L51ERHAVEYiJwpMN",
      linkedin: "https://www.linkedin.com/in/rajsi-sangra-8ab90431b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      instagram: null
  },
  {
      name: "Adithya Kumar Pandey",
      imageUrl: "https://drive.google.com/thumbnail?id=1DDU0ZOij1xap-4gwlxCjIhael57QdAgS",
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
            <Card name = 'Cordinator' imageUrl = 'https://cc.iitmandi.co.in/assets/cc_core/_Luv_Sharma_IIT_Mandi.png'/>
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