// import CardCase from '@/components/cardcase/CardCase';

import dynamic from "next/dynamic";

const CardCase = dynamic(() => import("@/components/cardcase/CardCase"));
const SubscribeForm = dynamic (() => import('@/components/subscribeform/SubscribeForm'))

export default function Home() {
  return (
    <>
     <div className='container'>
      <CardCase cardWrapperClass="sdasddd"/>

      
    </div>
    <SubscribeForm/>

  
    </>
   
  )
}
