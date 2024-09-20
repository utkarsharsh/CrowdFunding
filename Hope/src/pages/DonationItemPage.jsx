import React from 'react'
import { useParams } from 'react-router-dom'
const DonationItemPage = () => {
    const {id} = useParams()
  return (
    <div>
      DonationItemPage {id}
    </div>
  )
}

export default DonationItemPage
