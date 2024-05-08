import footerPic from "../assets/footerpic.png";
import twitter from "../assets/twitter.svg";
import mail from "../assets/mail.svg";
import FooterButton from "./FooterButton";
import medium from '../assets/mediumstake 1.png'
const Community = () => {
  interface contact {
    url: String;
    head: String;
    subHead: String;
  }
  const contactUs: contact[] = [
    { url: twitter, head: "Twitter", subHead: "FOLLOW @Stakesphere" },
    { url: medium, head: "Medium", subHead: "FOLLOW @Stakesphere" },
    { url: mail, head: "Contact Us", subHead: "info@Stakesphere.io" },
  ];

  return (
    <div  id='Contact' className="flex flex-col pt-10 items-center justify-center bg-primary text-center font-grotesk font-medium text-[#FFFFFF] p-10 gap-2 lg:mt-32">
      <p className="text-4xl">Join Our Community</p>
      <p className="lg:text-xl text-base">
      Learn more about Stakesphere, Explore our twitter and support team for future
upgrades and supported networks in the stakesphere
      </p>
      <img data-aos="zoom-out" src={footerPic} className=" w-full h-auto md:w-[881.64px] md:h-[269px] mt-16 " />
      <div className=" grid md:grid md:grid-cols-2 md:grid-rows-1 gap-x-16 gap-y-10 mt-20">
        {
          contactUs.map((node:contact,index:number)=>{
            return <FooterButton url={node?.url} head={node?.head} subHead={node?.subHead} index={index}/>
          })
        }
      </div>
      <div className="hidden md:flex justify-center mt-5">
      <a  href= "mailto:info@stakeshere.io" target="_blank" >
      <div data-aos="zoom-in" data-aos-delay={600} role="button" className="flex bg-secondary rounded-[43px] px-4 py-2 gap-4">
       <div className="w-[55px] bg-primary rounded-[100%] relative h-[55px]">
            <img src={mail} className="absolute -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%]"/>
      </div>
        <div className="flex flex-col justify-around  items-start text-primary font-grotesk tracking-[1.11px]">
            <p className="font-bold text-xl">{contactUs[2]?.head}</p>
            <p className="font-normal text-[15px] leading-[23.14px]">{contactUs[2]?.subHead}</p>
        </div>

    </div>

    </a>

      </div>
      <p className="lg:text-xl text-base mt-14 mb-8">
      2023 © Stakesphere All rights reserved
      </p>
    </div>
  );
};

export default Community;
