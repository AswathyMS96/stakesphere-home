import block from "../assets/blockchain.png";
import stack from "../assets/stack.png";
import token from "../assets/token.png";
const Works = () => {
  interface image {
    title: string;
    url: string;
    name: string;
    desc: string;
  }

  const ImageArray: image[] = [
    {
      title: "Step 1",
      url: stack,
      name: "Earn Passive Rewards",
      desc: "By staking your FIL tokens, you'll be rewarded with additional FIL tokens for supporting the network",
    },
    {
      title: "Step 2",
      url: token,
      name: "Network Security",
      desc: "Staking enhances the security of the Filecoin network, making it more resilient against potential attacks",
    },
    {
      title: "Step 3",
      url: block,
      name: "Start Earning Rewards",
      desc: "Once you've staked your FIL tokens, you'll automatically start earning staking rewards, which are typically distributed at regular intervals.",
    },
  ];
  return (
    <div  className="flex flex-col items-center mt-12 font-grotesk gap-3">
      <p className="text-4xl font-medium text-center">How Stakesphere Works</p>
      <div className="bg-subview bg-contain md:my-10 lg:my-0 md:h-60 grid grid-rows-5 md:grid-rows-1 md:grid-cols-5 place-items-center w-11/12 justify-around pt-2 ">
        {ImageArray.map((arr: image, index: number) => {
          return (
            <>
                <div data-aos="flip-up" data-aos-delay={`${index === 0 ? 0 : index * 200}`} className="flex flex-col items-center justify-center gap-3 lg:w-64 text-center font-medium text-[18px]">
                  <p>{arr?.title}</p>
                  <img src={arr?.url} className="h-[86px] W-[86px]" />
                  <p>{arr?.name}</p>
                  <p className="font-light text-[15px]">{arr?.desc}</p>
                </div>
              {index !== ImageArray.length - 1 && (
                <svg
                className=" rotate-90 md:rotate-0"
                  width="132"
                  height="6"
                  viewBox="0 0 132 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M131.247 3L126.543 0.284029V5.71597L131.247 3ZM0 3.47042H127.013V2.52958H0V3.47042Z"
                    fill="black"
                  />
                </svg>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Works;
