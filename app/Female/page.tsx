import React from 'react'
let FemaleProducts = [['PICTURE','NAME','CATEGORY','PRICE','DISCOUNT','PRIORITY'],['PICTURE2','NAME2','CATEGORY2','PRICE2','DISCOUNT2','PRIORITY2']]
export default function FemaleSection() {
  return (
    <div className='min-h-screen flex flex-col'>
        <div className='h-[15%] w-full'>
        </div>
        <div className='h-full w-[90%] flex flex-wrap mx-auto'>
            <div className='bg-yellow-200 w-[21%] h-[60%] mx-auto mt-[3%] flex'>
                <div className='h-[70%] w-full bg-red-200'>
                {FemaleProducts[0][0]}
                </div>
                
            </div>
        </div>
        </div>
  )
}
