import React, {useEffect}  from 'react'
import Head from '../../components/Head';
import f1 from '../../Assets/images/g1.jpg'
import f2 from '../../Assets/images/g4.jpg'
import f3 from '../../Assets/images/f3.jpg'
import f4 from '../../Assets/images/g17.jpg'
import f5 from '../../Assets/images/f5.jpg'
import f6 from '../../Assets/images/yoga.png'
import f7 from '../../Assets/images/f7.jpg'
import f8 from '../../Assets/images/f8.png'
const All_Sectors = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    return (
        <div>
            <Head pageheading="All Sectors" />
            <div className='bg-banner m-0'>
                <div className='container py-5 '>
                    <h1 className="pb-5 text-center mainheading wow fadeInUp">All Sectors of Shri Yog Health Orginization</h1>
                    <div className='row my-5'>
                        <div className='col-lg-7 wow fadeInLeft' data-wow-delay="0.2s" >
                            <h3 className=' administrativesub pt-2'>Diet Food and Nutrition at Shri Yog Health Organization (Syho)</h3>
                            <p className='text-justify ourptext pt-4'>At Shri Yog Health Organization, we understand that proper nutrition is vital for the growth and development of children. Our Diet Food and Nutrition sector focuses on providing balanced diets that meet the unique nutritional needs of school children, particularly in rural Madhya Pradesh. Through our "Nidan" project, we educate children and their families about the importance of healthy eating habits, ensuring access to nutritious meals that support their physical and mental well-being. We promote local, sustainable food sources and offer guidance on meal planning, making it easier for families to adopt healthier lifestyles. By prioritizing nutrition, we aim to empower children to lead healthier lives, laying the foundation for a brighter future.</p>
                        </div>
                        <div className='col-lg-5 text-right wow fadeInRight' data-wow-delay="0.2s">
                            <img src={f1} alt='presedent' className='img-fluid focussectorimg' />
                        </div>
                    </div>
                    <div className='row my-5 py-5'>
                    <div className='col-lg-5 text-left wow fadeInLeft' data-wow-delay="0.2s">
                            <img src={f2} alt='presedent' className='img-fluid focussectorimg' />
                        </div>
                        <div className='col-lg-7 wow fadeInRight' data-wow-delay="0.2s">
                            <h3 className=' administrativesub pt-2'>Modern Lifestyle, Health and Fitness at Shri Yog Health Organization (Syho)</h3>
                            <p className='text-justify ourptext pt-4'>Embracing a modern lifestyle requires a balanced approach to health and fitness. At Shri Yog Health Organization, we integrate contemporary practices with traditional wisdom to promote overall well-being. We believe that a healthy lifestyle is not just about physical fitness but also mental clarity and emotional stability. Our programs focus on helping individuals adopt regular exercise routines, balanced diets, and mindful practices like yoga and meditation. We emphasize the importance of staying active in daily life, making informed food choices, and managing stress effectively. By guiding communities towards healthier living, we aim to empower people to thrive in today’s fast-paced world while maintaining a harmonious balance between body and mind.</p>
                        </div>
                       
                    </div>
                 
                    <div className='row my-5 py-5'>
                        <div className='col-lg-7 wow fadeInLeft'  data-wow-delay="0.2s">
                            <h3 className='administrativesub pt-2'>Fitness & Wellbeing Consultancy at Shri Yog Health Organization (Syho)</h3>
                            <p className='text-justify ourptext pt-4'>At Shri Yog Health Organization, our Fitness & Wellbeing Consultancy aims to empower children and their families to embrace healthier lifestyles. We provide expert guidance on fitness regimens tailored to individual needs, focusing on both physical activity and mental health. Through personalized consultations, workshops, and community programs, we encourage holistic wellness practices that promote strength, flexibility, and emotional resilience. Our consultancy emphasizes the importance of integrating fitness into daily routines, helping families overcome barriers to a healthy lifestyle. By fostering a supportive environment, we aspire to inspire the youth of Madhya Pradesh to prioritize their health and well-being, paving the way for a healthier future.</p>
                        </div>

                        <div className='col-lg-5 text-right wow fadeInRight' data-wow-delay="0.2s">
                            <img src={f4} alt='presedent' className='img-fluid focussectorimg' />
                        </div>
                    </div>
                    <div className='row my-5 py-5'>
                        <div className='col-lg-5 text-left wow fadeInLeft' data-wow-delay="0.2s">
                            <img src={f5} alt='presedent' className='img-fluid focussectorimg' />
                        </div>
                        <div className='col-lg-7 wow fadeInRight' data-wow-delay="0.2s">
                            <h3 className='administrativesub pt-2'>Aromatherapy and Beauty Products at Shri Yog Health Organization (Syho)</h3>
                            <p className='text-justify ourptext pt-4'>At Shri Yog Health Organization, we recognize the powerful role of Aromatherapy and beauty products in enhancing well-being and self-care. Our initiative focuses on educating children and their families about the benefits of natural fragrances and holistic beauty practices. Through workshops and interactive sessions, we introduce the therapeutic properties of essential oils and their applications in promoting relaxation, emotional balance, and skin health. We emphasize the importance of using eco-friendly and non-toxic beauty products, empowering families to make informed choices for their health and the environment. By fostering a culture of natural beauty and wellness, we aspire to inspire individuals to embrace self-care as an essential part of a balanced lifestyle.</p>
                        </div>

                    </div>
                    <div className='row my-5 py-5'>
                        <div className='col-lg-7 wow fadeInLeft' data-wow-delay="0.2s">
                            <h3 className='administrativesub pt-2'>Yoga and Holistic Healing at Shri Yog Health Organization (Syho)</h3>
                            <p className='text-justify ourptext pt-4'>At Shri Yog Health Organization, we believe in the transformative power of Yoga and holistic healing practices. Our initiative focuses on teaching children and their families the importance of mindfulness, movement, and mental well-being through yoga. We offer classes, workshops, and community sessions that promote physical strength, flexibility, and emotional balance. Our holistic healing approach incorporates various techniques, including meditation, breathwork, and mindfulness practices, encouraging families to explore the connection between mind, body, and spirit. By fostering a supportive environment, we aim to empower individuals to embrace a balanced lifestyle, enhancing their overall health and happiness.</p>
                        </div>

                        <div className='col-lg-5 text-right wow fadeInRight' data-wow-delay="0.2s">
                            <img src={f6} alt='presedent' className='img-fluid focussectorimg' />
                        </div>
                    </div>
                    <div className='row my-5 py-5'>
                        <div className='col-lg-5 text-left wow fadeInLeft' data-wow-delay="0.2s">
                            <img src={f7} alt='presedent' className='img-fluid focussectorimg' />
                        </div>
                        <div className='col-lg-7 wow fadeInRight' data-wow-delay="0.2s">
                            <h3 className='administrativesub pt-2'>Technology, Startup, and Health App at Shri Yog Health Organization (Syho)</h3>
                            <p className='text-justify ourptext pt-4'>At Shri Yog Health Organization, we embrace the intersection of technology and health to innovate solutions that improve the well-being of children and families. Our initiative focuses on developing a comprehensive health app designed to provide easy access to health resources, fitness tracking, and wellness programs. We aim to empower users with tools to monitor their health, access nutritional information, and connect with health professionals. By fostering a startup culture of innovation, we encourage collaboration and creativity, inspiring the youth of Madhya Pradesh to engage with technology for positive health outcomes. Through this initiative, we aspire to make health and wellness accessible, convenient, and engaging for all.</p>
                        </div>

                    </div>
                    <div className='row my-5 py-5'>
                        <div className='col-lg-7 wow fadeInLeft' data-wow-delay="0.2s">
                            <h3 className='administrativesub pt-2'>Siddha and Unani at Shri Yog Health Organization (Syho)</h3>
                            <p className='text-justify ourptext pt-4'>At Shri Yog Health Organization, we honor the ancient traditions of Siddha and Unani medicine as vital components of holistic health care. Our initiative aims to educate children and their families about these time-tested healing systems that promote natural well-being. Through workshops, community sessions, and educational programs, we explore the principles of Siddha and Unani practices, highlighting their approaches to diagnosis, treatment, and prevention. We focus on herbal remedies, dietary guidelines, and lifestyle modifications that respect individual health needs. By integrating these holistic practices into our community wellness efforts, we aspire to empower families to embrace natural healing methods, fostering a healthier future for all.</p>
                        </div>
                        <div className='col-lg-5 text-right wow fadeInRight' data-wow-delay="0.2s">
                            <img src={f8} alt='presedent' className='img-fluid focussectorimg' />
                        </div>
                    </div>
                    <div className='row my-5 py-5'>
                        <div className='col-lg-5 text-left wow fadeInLeft' data-wow-delay="0.2s">
                            <img src={f3} alt='presedent' className='img-fluid focussectorimg' />
                        </div>
                        <div className='col-lg-7 wow fadeInRight' data-wow-delay="0.2s">
                            <h3 className='administrativesub pt-2'>Ayurveda and Naturopathy at Shri Yog Health Organization (Syho)</h3>
                            <p className='text-justify ourptext pt-4'>At Shri Yog Health Organization, we embrace the principles of Ayurveda and Naturopathy as integral components of holistic health. Our initiative aims to educate children and their families about natural healing practices that promote wellness and prevent illness. Through workshops, interactive sessions, and community outreach, we introduce the benefits of Ayurvedic treatments, herbal remedies, and naturopathic therapies, emphasizing their role in achieving balance and harmony within the body. We focus on personalized health solutions that respect individual needs and encourage a deeper connection with nature. By instilling these ancient wisdoms, we aspire to cultivate a generation that values natural health and well-being as fundamental to their lifestyle.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default All_Sectors
