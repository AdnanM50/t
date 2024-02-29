import React from 'react'

function Mapp({ jsonData }) {
  return (
    <section className='py-10'>
      <div className="container mx-auto">
        <div className="w-full h-full">
          <iframe src={jsonData?.map} height="400" width="1320" title="Iframe Example"></iframe>
        </div>
      </div>
    </section>
  )
}

export default Mapp