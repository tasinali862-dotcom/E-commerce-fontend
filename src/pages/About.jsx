import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
        <div className='text-2xl text-center pt-8 border-t'>
            <Title text1={'ABOUT'} text2={"US"} />
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full  md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, cumque sed, quidem distinctio eos odit itaque voluptas ex pariatur voluptate placeat dignissimos provident numquam iusto autem rerum, ipsa vero libero aperiam ea. Veniam voluptates pariatur ipsum vel enim non cumque.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sit quia eum, voluptatem ducimus maiores, ullam facere temporibus pariatur provident qui animi voluptate libero. Molestias iure eveniet sequi aliquid delectus, facere itaque facilis aperiam vel fugiat unde nobis tenetur culpa.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae perspiciatis magni quibusdam sapiente molestias quaerat ipsa saepe mollitia autem, facilis accusamus delectus suscipit magnam aliquid adipisci odio cumque. Earum natus aliquam aut. Impedit aliquam aliquid magni illum facilis consequuntur aut.</p>
          </div>
        </div>

        <div className="text-xl py-4">
          <Title text1={'WHY'} text2={'CHOOSE US'} />
        </div> 

        <div className="flex flex-col md:flex-row text-sm mb-20">
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <p>Quality Assurance:</p>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, maiores omnis. Fuga, minus illo expedita id maiores voluptas explicabo rerum cum vitae incidunt esse harum, saepe exercitationem assumenda ipsum at doloremque aspernatur porro temporibus sed! Eum cum modi dolores saepe!</p>
          </div>

          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <p>Convenience:</p>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, maiores omnis. Fuga, minus illo expedita id maiores voluptas explicabo rerum cum vitae incidunt esse harum, saepe exercitationem assumenda ipsum at doloremque aspernatur porro temporibus sed! Eum cum modi dolores saepe!</p>
          </div>

          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <p>Exceptional Customer Service:</p>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, maiores omnis. Fuga, minus illo expedita id maiores voluptas explicabo rerum cum vitae incidunt esse harum, saepe exercitationem assumenda ipsum at doloremque aspernatur porro temporibus sed! Eum cum modi dolores saepe!</p>
          </div>

        </div>\

        <NewsletterBox />
    </div>
  )
}

export default About
