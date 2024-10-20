import React, { useState, useEffect } from 'react';
import news1 from '../../Assets/images/new1.jpg';
import news2 from '../../Assets/images/news2.jpg';
import news3 from '../../Assets/images/news3.jpg';
import Head from '../../components/Head';

const newsItems = [
  { id: 1, image: news1, title: "Which allows you to pay down insurance bills" },
  { id: 2, image: news2, title: "Leverage agile frameworks to provide" },
  { id: 3, image: news3, title: "Leverage agile frameworks to provide" },
  { id: 4, image: news1, title: "Which allows you to pay down insurance bills" },
  { id: 5, image: news2, title: "Leverage agile frameworks to provide" },
  { id: 6, image: news3, title: "Leverage agile frameworks to provide" },
  { id: 7, image: news1, title: "Which allows you to pay down insurance bills" },
  { id: 8, image: news2, title: "Leverage agile frameworks to provide" },
  { id: 9, image: news3, title: "Leverage agile frameworks to provide" },
  { id: 10, image: news1, title: "Which allows you to pay down insurance bills" },
  { id: 11, image: news2, title: "Leverage agile frameworks to provide" },
  { id: 12, image: news3, title: "Leverage agile frameworks to provide" },
  { id: 13, image: news1, title: "Which allows you to pay down insurance bills" },
  { id: 14, image: news2, title: "Leverage agile frameworks to provide" },
  { id: 15, image: news3, title: "Leverage agile frameworks to provide" },
  // Add more items as needed
];

const Newsandupdate = () => {
  const [visibleItems, setVisibleItems] = useState(12);

  const handleViewMore = () => {
    setVisibleItems((prev) => prev + 12);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Head pageheading="News and Updates" />
      <div className='bg-light py-5'>
        <div className="container-fluid blog py-5">
          <div className="container">
            <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: "800px" }}>
              <h4 className="mainheading">News And Updates</h4>
              <h3 className="subheading mb-4">Highlights of Recent Achievements and Announcements</h3>
            </div>
            <div className="row g-4 justify-content-center mb-5">
              {newsItems.slice(0, visibleItems).map((item) => (
                <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.2s" key={item.id}>
                  <div className="blog-item">
                    <div className="blog-img">
                      <img src={item.image} className="img-fluid newsimg rounded-top w-100" alt="" />
                    </div>
                    <div className="blog-content p-4">
                      <h3 className="d-inline-block newheading mb-4">{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {visibleItems < newsItems.length && (
              <div className="text-center">
                <button onClick={handleViewMore} className="btn btn-primary rounded-pill mt-5 py-3 px-5">View More</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsandupdate;
