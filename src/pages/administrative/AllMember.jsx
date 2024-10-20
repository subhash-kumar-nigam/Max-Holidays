import React, { useState  ,useEffect} from 'react';
import Head from '../../components/Head';
import { Link } from 'react-router-dom'
import member1 from '../../Assets/images/member1.webp'
import drbipin from '../../Assets/images/securitysir.png'
import member2 from '../../Assets/images/member2.webp'
import member3 from '../../Assets/images/member3.webp'
import member4 from '../../Assets/images/member4.webp'
import member5 from '../../Assets/images/member5.webp'
import member6 from '../../Assets/images/member6.webp'
import member7 from '../../Assets/images/member7.webp'
import member8 from '../../Assets/images/member8.webp'
const allPosts = [
  
  {
    imgSrc: member1,
    date: "19th Oct, 19",
    title: "Member of National Advisory committee of Integrated Ayush Council",
    excerpt: "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.",
    authorName: "Dr.Shishta Nadda Basu",
  },
  {
    imgSrc: drbipin,
    date: "19th Oct, 19",
    title: "General Secretary of the Renowned Vishwa Hindi Parishad",
    excerpt: "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.",
    authorName: "Dr.Bipin kumar",
  },
  {
    imgSrc:member2,
    date: "19th Oct, 19",
    title: "Member of National Advisory committee of Integrated Ayush Council",
    excerpt: "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.",
    authorName: "Dr S.C Manchanda",
  },
  {
    imgSrc: member3,
    date: "19th Oct, 19",
    title: "National Executive Member of Integrated Ayush Council",
    excerpt: "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.",
    authorName: "Dr. Markandey Rai",
  },
  {
    imgSrc:member4,
    date: "19th Oct, 19",
    title: "National Executive Member of Integrated Ayush Council.",
    excerpt: "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.",
    authorName: "Dr. Subhash Giri",
  },
  {
    imgSrc: member5,
    date: "19th Oct, 19",
    title: "Member of National Executive Member of Integrated Ayush Council",
    excerpt: "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.",
    authorName: "Dr. D. C. Jain, Neurologist",
  },
  {
    imgSrc: member6,
    date: "19th Oct, 19",
    title: "National Executive Council, Former Union Minister, Former Rajya Sabha M.P",
    excerpt: "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.",
    authorName: "Dr. C.P. Thakur Chairman",
  },
  {
    imgSrc: member7,
    date: "19th Oct, 19",
    title: "National Executive Member of Integrated Ayush Council",
    excerpt: "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.",
    authorName: "Dr. Surender Mohan Tuli",
  },
  {
    imgSrc:member8,
    date: "19th Oct, 19",
    title: "Senior Consultant on Mental Health in Moolchand Hospital, National Executive Member of Integrated Ayush Council",
    excerpt: "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.",
    authorName: "Dr. Jitendra Nagpal",
  },
 
  // {
  //   imgSrc: "https://www.bootdey.com/image/420x280/FF1493/000000",
  //   date: "19th Oct, 19",
  //   title: "Become more money-minded",
  //   excerpt: "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.",
  //   authorName: "ganesh",
  // },
  // {
  //   imgSrc: "https://www.bootdey.com/image/420x280/FF7F50/000000",
  //   date: "19th Oct, 19",
  //   title: "Quick guide on business with friends.",
  //   excerpt: "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.",
  //   authorName: "ganesh",
  // },
  // {
  //   imgSrc: "https://www.bootdey.com/image/420x280/6495ED/000000",
  //   date: "19th Oct, 19",
  //   title: "Become more money-minded",
  //   excerpt: "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.",
  //   authorName: "ganesh",
  // },
  // {
  //   imgSrc: "https://www.bootdey.com/image/420x280/FF1493/000000",
  //   date: "19th Oct, 19",
  //   title: "Become more money-minded",
  //   excerpt: "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.",
  //   authorName: "ganesh",
  // },
  // {
  //   imgSrc: "https://www.bootdey.com/image/420x280/FF7F50/000000",
  //   date: "19th Oct, 19",
  //   title: "Quick guide on business with friends.",
  //   excerpt: "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.",
  //   authorName: "ganesh",
  // },
  // {
  //   imgSrc: "https://www.bootdey.com/image/420x280/6495ED/000000",
  //   date: "19th Oct, 19",
  //   title: "Become more money-minded",
  //   excerpt: "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.",
  //   authorName: "ganesh",
  // },
  // {
  //   imgSrc: "https://www.bootdey.com/image/420x280/FF1493/000000",
  //   date: "19th Oct, 19",
  //   title: "Become more money-minded",
  //   excerpt: "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.",
  //   authorName: "ganesh",
  // },
 
];

const AllMember = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleViewMore = () => {
    setVisibleCount(visibleCount + 6);
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Head pageheading="All Member" />
      <div className='my-5'>
        <h1 className="pb-5 text-center mainheading">All Member's of Integrated Ayush Council</h1>
        <div className="container mt-100 mt-60">
  <div className="row">
    {allPosts.slice(0, visibleCount).map((post, index) => (
      <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
        <div className="blog-post rounded border" style={{ height: '570px' }}> 
          <div
            className="blog-img "
            style={{ height: '300px' }}
          >
            <img
              src={post.imgSrc}
              className="img-fluid rounded-top"
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
          <div className="content px-3" style={{ height: 'calc(100% - 200px)', overflow: 'hidden' }}> 
            <div className="pt-3 mt-3 d-flex justify-content-between align-items-center">
              <h6 className="mb-0 administrativemain text-capitalize">{post.authorName}</h6>
              {/* <small className="text-muted">{post.date}</small> */}
            </div>
            <h6 className="mt-3 administrativesub">{post.title}</h6>
            {/* <p className="text-muted mt-2" style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
              {post.excerpt}
            </p>  */}
            <div className="pt-3 mt-3 border-top d-flex justify-content-between align-items-center">
              <div className="author mt-2">
                <Link to="" className="text-dark text-decoration-none name">Read More >> </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
  {visibleCount < allPosts.length && (
    <div className="text-center my-5">
      <button onClick={handleViewMore} className="btn btn-primary rounded-pill mt-5 py-3 px-5">View More</button>
    </div>
  )}
</div>

      </div>
    </div>
  );
};

export default AllMember;
