import etherium from  '../assets/Group 23.png'
import coin from '../assets/cardImage.png'
import polygon from '../assets/Group 24.png'
import Card from './Card'
import { useState } from 'react'
const SupportedNetworks = () => {
const [currentCard, setcurrentCard] = useState(1)


const handleSlideChange=(direction:string)=>{
  if(direction==="forwards" ){
    if(currentCard===2){
      setcurrentCard(0)
    }else{
      setcurrentCard(old=>old+1)

    }
  }
  else if(direction==="backwards"){
    if(currentCard===0){
      setcurrentCard(2)

    }else{
      setcurrentCard(old=>old-1)

    }
  }

}

    const displaycards:any=[
        {id:1,url:etherium ,title:'Ethereum',desc:'Stake any amount of FIL, get monthly staking rewards and use your FIL across the web3 ecosystem',perc:'10%-18%',price:'2,662,312,501',month:'APR'},
        {id:2,url:coin ,title:'File Coin',desc:'Stake any amount of FIL, get monthly staking rewards and use your FIL across the web3 ecosystem.',perc:'10%-18%',price:'1,56,579',month:'APR'},
        {id:3,url:polygon ,title:'Polygon',desc:'Stake any amount of FIL, get monthly staking rewards and use your FIL across the web3 ecosystem.',perc:'10%-18%',price:'2,662,312,501',month:'APR'}
    ]

    const [card,setCard]=useState<number>(2)
  return (
    <div className="flex flex-col items-center mt-12 font-grotesk gap-3">
        <p className="text-4xl font-medium">Supported Networks</p>
        <p className="font-normal lg:text-xl text-base md:leading-10 text-center">
        Stakesphere offers the capability to stake tokens across a variety of networks.Please select a network below to commence the staking process
        </p>
      <div className="hidden md:grid grid-cols-3 gap-12 ">
        {
            displaycards.map((cards:any)=>{
             return  <div onMouseOver={()=>setCard(cards?.id)} onMouseLeave={()=>setCard(2)}> 
              <Card url={cards.url} title={cards.title} desc={cards.desc} perc={cards.perc} price={cards.price} month={cards.month} card={card} id={cards?.id}/>
              </div>
            })
        }
        </div> 
        <div className="flex w-screen justify-center md:hidden ">
        <svg onClick={()=>{handleSlideChange("backwards")}} className='m-auto' width="15" height="31" viewBox="0 0 15 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.8243 3L3.00006 15.8143L12.8243 28.6286" stroke="#0047FF" stroke-width="4.27143" stroke-linecap="round"/>
</svg>
          <div className='w-[70%] '>
          {
            displaycards.filter((cards:any,index:number)=>{
              console.log(cards);
              return index===currentCard   
            }).map((cards:any)=>{
              console.log("cardgggss",cards)
              return(
                <div onMouseOver={()=>setCard(cards?.id)} onMouseLeave={()=>setCard(2)}>
                <Card url={cards.url} title={cards.title} desc={cards.desc} perc={cards.perc} price={cards.price} month={cards.month} card={card} id={cards?.id}/>
</div>
              )

            })
        }

          </div>
          <svg onClick={()=>{handleSlideChange("forwards")}} className='m-auto'  width="16" height="31" viewBox="0 0 16 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3L12.8243 15.8143L3 28.6286" stroke="#0047FF" stroke-width="4.27143" stroke-linecap="round"/>
</svg>
      
        </div> 

    </div>
  )
}

export default SupportedNetworks