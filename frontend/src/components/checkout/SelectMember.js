import React, { useEffect } from 'react'

export default function SelectMember({ userId, cart, setCart, setShowAddNewMemberPopup }) {
  useEffect(() => {
    
  }, [cart])

  return (
    <div>
        <div className='d-flex justify-content-between'>
            <h2 className="text-k-accent"> Select Member for Selected Test </h2>
            <button 
                className='btn btn-outline-secondary btn-sm'
                style={{width: "200px"}}
                onClick={() => { setShowAddNewMemberPopup(true) }}
                >Add New Member +</button>
        </div>
      <hr />

      
    </div>
  )
}
