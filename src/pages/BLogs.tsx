import BlogCards from "./BlogCards";
import newCard from '../assets/new.png'
import card1 from '../assets/card1.png'                
import card2 from '../assets/card2.png'                
import card3 from '../assets/card3.png'                
import card4 from '../assets/card4.png' 
import partner3 from "../assets/partner3.png"               
import partner2 from "../assets/partner2.png"
import partner1 from "../assets/partner1.png"
import parter4 from "../assets/parter4.png"


const BLogs = () => {
  interface content {
    url: string;
    desc: string;
    date: string;
  }

  const blogContent: content[] = [
    {
      url: card1,
      desc: "Stakesphere Announces Support for ETH Staking soon",
      date: " STAKESPHERE AUG 12, 2023",
    },
    {
      url: card2,
      desc: "Stakesphere Announces Support for ICP Staking soon.",
      date: "STAKESPHERE AUG 1, 2023",
    },
    {
      url: card3,
      desc: "Stakesphere Announces Support for MATIC Staking soon",
      date: "STAKESPHERE JUL 4, 2023",
    },
    {
      url: card4,
      desc: "Stakesphere Announces Support for SOL Staking soon",
      date: "STAKESPHERE JUN 22, 2023",
    },
  ];
  return (
    <div id="Blog" className="flex bg-blogsBg  flex-col items-center mt-12 font-grotesk gap-3 p-10 md:p-0 ">
      <div className="md:grid  md:grid-cols-2 md:grid-rows-5 xl:gap-20 gap-4 md:px-10 ">
  <div className="flex border-b  border-[#0047FF] md:pb-20 flex-col md:flex-row items-center gap-[10%] col-span-2 row-span-2 ">
        <img  data-aos="flip-up" src={newCard} className="w-full h-auto md:h-[285px] md:w-[452px] bg-cover" />
        <div className="flex-col flex gap-1 justify-center lg:h-[285px] lg:w-[550px] h-fit w-fit  font-grotesk">
          <p className="font-bold lg:text-4xl text-xl">Filecoin Staking Now Available on stakesphere</p>
          <p className="font-normal lg:text-xl text-base">
          Earn Passive rewards while contributing to the
decentralized storage network of the future with
Filecoin Staking, you have the opportunity to
participate in the growth of web3 ecosystem by
staking your FIL tokens.
          </p>
          <p className="font-normal text-sm py-10 md:p-0 ">STAKESPHERE JUL 4, 2023</p>
        </div>
      </div>

      {blogContent?.map((node: content,index:number) => {
          return (
            <BlogCards
            index={index}
              desc={node?.desc}
              height="h-auto md:h-[186px] object-cover "
              width=" w-full md:w-[180px]"
              url={node?.url}
              date={node?.date}
            />
          );
        })}
             
      </div>
      <p className="font-bold lg:text-4xl text-xl">TRUSTED PARTNERS</p>

       {/* Add the Trusted Partners section  */}
      
            
          
        </div>

      
  );
};

export default BLogs;
