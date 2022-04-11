import React from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"

function Join() {
  return (
    <div >
        <Header currentPage='brophy'/>
        <div style={{fontFamily:"Roboto Slab"}} className="mx-16">
          <div className='text-white text-2xl text-center mt-4 font-bold' >What is Brophy?</div>
          <div className='text-white text-lg text-center'>
            If you want to join Brophy, go to to <a href="https://brophyprep.org/Admissions/Learn-More">this website</a>. Brophy College Preparatory is an all boys Jesuit Catholic Private School with financial based scholarships available to those who need it. 
          </div>

          <div className='text-white text-2xl text-center mt-4 font-bold' >Brophy's Technology Mission Statement</div>
          <div className='text-white text-lg text-center'>
            Brophy College Preparatory maintains an innovative one-to-one technology program in order to provide a comprehensive and integrated approach to technology that facilitates creative opportunities for teaching and learning in the Ignatian tradition. In order to promote the best possible experience for teachers and students, we foster an environment of shared expectations for meaningful technology use as well as mature digital citizenship. Understanding that ceaseless technological innovation creates a dynamic landscape, the Brophy technology program maintains an ethos that is open to trial, error and improvement while making certain that every member of the community has the essential technology skills to work fluently and responsibly in the Digital Age.
          </div>

        </div>

        <Footer />

      

      
    </div>
  )
}

export default Join