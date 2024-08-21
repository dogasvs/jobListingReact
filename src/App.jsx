// import { useState } from 'react'
// import './App.css'

// const data = [{"id":1,"company":"Photosnap","logo":"https://dummyjson.czaylabs.com.tr/exam/jobs/photosnap.svg","new":true,"featured":true,"position":"Senior Frontend Developer","role":"Frontend","level":"Senior","postedAt":"1d ago","contract":"Full Time","location":"USA Only","languages":["HTML","CSS","JavaScript"],"tools":[]},{"id":2,"company":"Manage","logo":"https://dummyjson.czaylabs.com.tr/exam/jobs/manage.svg","new":true,"featured":true,"position":"Fullstack Developer","role":"Fullstack","level":"Midweight","postedAt":"1d ago","contract":"Part Time","location":"Remote","languages":["Python"],"tools":["React"]},{"id":3,"company":"Account","logo":"https://dummyjson.czaylabs.com.tr/exam/jobs/account.svg","new":true,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2d ago","contract":"Part Time","location":"USA Only","languages":["JavaScript"],"tools":["React","Sass"]},{"id":4,"company":"MyHome","logo":"https://dummyjson.czaylabs.com.tr/exam/jobs/myhome.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"5d ago","contract":"Contract","location":"USA Only","languages":["CSS","JavaScript"],"tools":[]},{"id":5,"company":"Loop Studios","logo":"https://dummyjson.czaylabs.com.tr/exam/jobs/loop-studios.svg","new":false,"featured":false,"position":"Software Engineer","role":"Fullstack","level":"Midweight","postedAt":"1w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript","Ruby"],"tools":["Sass"]},{"id":6,"company":"FaceIt","logo":"https://dummyjson.czaylabs.com.tr/exam/jobs/faceit.svg","new":false,"featured":false,"position":"Junior Backend Developer","role":"Backend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"UK Only","languages":["Ruby"],"tools":["RoR"]},{"id":7,"company":"Shortly","logo":"https://dummyjson.czaylabs.com.tr/exam/jobs/shortly.svg","new":false,"featured":false,"position":"Junior Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"Worldwide","languages":["HTML","JavaScript"],"tools":["Sass"]},{"id":8,"company":"Insure","logo":"https://dummyjson.czaylabs.com.tr/exam/jobs/insure.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"USA Only","languages":["JavaScript"],"tools":["Vue","Sass"]},{"id":9,"company":"Eyecam Co.","logo":"https://dummyjson.czaylabs.com.tr/exam/jobs/eyecam-co.svg","new":false,"featured":false,"position":"Full Stack Engineer","role":"Fullstack","level":"Midweight","postedAt":"3w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript","Python"],"tools":["Django"]},{"id":10,"company":"The Air Filter Company","logo":"https://dummyjson.czaylabs.com.tr/exam/jobs/the-air-filter-company.svg","new":false,"featured":false,"position":"Front-end Dev","role":"Frontend","level":"Junior","postedAt":"1mo ago","contract":"Part Time","location":"Worldwide","languages":["JavaScript"],"tools":["React","Sass"]}];

// function App() {

//   return (
//     <>
//       <header className='header'></header>
//       <Jobs />
//     </>
//   )
// }

// function Jobs() { //tagsler
//   const [filter, setFilter] = useState([]);

//   function addFilter(key) {
//     if(filter.includes(key)) { //var olanı eklemiyor bu kod ile
//       return;
//     }
//     setFilter([...filter, key]);
//   }

//   data.forEach(x => {
//     x.tags = [x.role, x.level, ...x.languages, ...x.tools];
//     // x.tags.push(x.role);
//     // x.tags.push(x.level);±
//     // x.tags.push(...x.languages);
//     // x.tags.push(...x.tools);

//     // console.log(x.tags);
//   });

//   const filteredData = data.filter(x => {
//     let founfFilterCount = 0;
//     for(const filteredData of filter) {
//       if(x.tags.includes(filteredData)) {
//         founfFilterCount++;
//       }
//     }

//     if(filter.length === founfFilterCount) {
//       return true;
//     }
//   })

//   console.log(founfFilterCount);

//   return (
//     <div className="jobs">
//       {data.map(x => <JobItem key={x.id} {...x} addFilter={addFilter} />)}
//     </div>
//   )
// }

// function JobItem({ compony, logo, new:isNew, featured, position, postedAt, contract, location, languages, tools, tags, addFilter}) {
//   return (
//     //featuredJob
//     <div className={ featured ? 'jobItem featuredJob' : 'jobItem'}>

//         <div className="jobDetails">
//           <a href="#" className='componyLogo'>
//             <img src={logo} alt={compony} />
//           </a>
//           <h4>
//             <a href="#">{compony}</a>
//             {isNew && <span className='new'>New</span>}
//             {featured && <span className='featured'>Featured</span>}
//           </h4>
//           <h3>{position}</h3>
//           <p>{postedAt} . {contract} . {location}</p>
//         </div>

//         <div className="jobTags">
//           {tags.map((x, i) =>
//             <a
//             href="#" key={i}
//             onClick={e => { e.preventDefault(); addFilter(x);}}
//             >{x}</a>)}
//             {/* manipüle etmeden önce */}
//             {/* <a href="#">{role}</a>
//             <a href="#">{level}</a> */}
//           {/* {languages.map((x, i) => <a href="#" key={i}>{x}</a>)} */}
//           {/* {tools.map((x, i) => <a href="#" key={`tool-${i}`}>{x}</a>)} */}
//         </div>

//       </div>
//   )
// }

// export default App

import { useState } from 'react';
import './App.css'

const data = [{ "id": 1, "company": "Photosnap", "logo": "https://dummyjson.czaylabs.com.tr/exam/jobs/photosnap.svg", "new": true, "featured": true, "position": "Senior Frontend Developer", "role": "Frontend", "level": "Senior", "postedAt": "1d ago", "contract": "Full Time", "location": "USA Only", "languages": ["HTML", "CSS", "JavaScript"], "tools": [] }, { "id": 2, "company": "Manage", "logo": "https://dummyjson.czaylabs.com.tr/exam/jobs/manage.svg", "new": true, "featured": true, "position": "Fullstack Developer", "role": "Fullstack", "level": "Midweight", "postedAt": "1d ago", "contract": "Part Time", "location": "Remote", "languages": ["Python"], "tools": ["React"] }, { "id": 3, "company": "Account", "logo": "https://dummyjson.czaylabs.com.tr/exam/jobs/account.svg", "new": true, "featured": false, "position": "Junior Frontend Developer", "role": "Frontend", "level": "Junior", "postedAt": "2d ago", "contract": "Part Time", "location": "USA Only", "languages": ["JavaScript"], "tools": ["React", "Sass"] }, { "id": 4, "company": "MyHome", "logo": "https://dummyjson.czaylabs.com.tr/exam/jobs/myhome.svg", "new": false, "featured": false, "position": "Junior Frontend Developer", "role": "Frontend", "level": "Junior", "postedAt": "5d ago", "contract": "Contract", "location": "USA Only", "languages": ["CSS", "JavaScript"], "tools": [] }, { "id": 5, "company": "Loop Studios", "logo": "https://dummyjson.czaylabs.com.tr/exam/jobs/loop-studios.svg", "new": false, "featured": false, "position": "Software Engineer", "role": "Fullstack", "level": "Midweight", "postedAt": "1w ago", "contract": "Full Time", "location": "Worldwide", "languages": ["JavaScript", "Ruby"], "tools": ["Sass"] }, { "id": 6, "company": "FaceIt", "logo": "https://dummyjson.czaylabs.com.tr/exam/jobs/faceit.svg", "new": false, "featured": false, "position": "Junior Backend Developer", "role": "Backend", "level": "Junior", "postedAt": "2w ago", "contract": "Full Time", "location": "UK Only", "languages": ["Ruby"], "tools": ["RoR"] }, { "id": 7, "company": "Shortly", "logo": "https://dummyjson.czaylabs.com.tr/exam/jobs/shortly.svg", "new": false, "featured": false, "position": "Junior Developer", "role": "Frontend", "level": "Junior", "postedAt": "2w ago", "contract": "Full Time", "location": "Worldwide", "languages": ["HTML", "JavaScript"], "tools": ["Sass"] }, { "id": 8, "company": "Insure", "logo": "https://dummyjson.czaylabs.com.tr/exam/jobs/insure.svg", "new": false, "featured": false, "position": "Junior Frontend Developer", "role": "Frontend", "level": "Junior", "postedAt": "2w ago", "contract": "Full Time", "location": "USA Only", "languages": ["JavaScript"], "tools": ["Vue", "Sass"] }, { "id": 9, "company": "Eyecam Co.", "logo": "https://dummyjson.czaylabs.com.tr/exam/jobs/eyecam-co.svg", "new": false, "featured": false, "position": "Full Stack Engineer", "role": "Fullstack", "level": "Midweight", "postedAt": "3w ago", "contract": "Full Time", "location": "Worldwide", "languages": ["JavaScript", "Python"], "tools": ["Django"] }, { "id": 10, "company": "The Air Filter Company", "logo": "https://dummyjson.czaylabs.com.tr/exam/jobs/the-air-filter-company.svg", "new": false, "featured": false, "position": "Front-end Dev", "role": "Frontend", "level": "Junior", "postedAt": "1mo ago", "contract": "Part Time", "location": "Worldwide", "languages": ["JavaScript"], "tools": ["React", "Sass"] }];

function App() {
  return (
    <>
      <header className="header"></header>
      <Jobs />
    </>
  )
}

function Jobs() {
  const [filter, setFilter] = useState([]);
  const [showTagsCont, setShowTagsCont] = useState(false);

  function addFilter(keyword) {
    if (!filter.includes(keyword)) {
      setFilter([...filter, keyword]);
      setShowTagsCont(true); 
    }
  }
  console.log(showTagsCont);
  console.log(filter.length);

  data.forEach(x => {
    x.tags = [x.role, x.level, ...x.languages, ...x.tools];
  });


  const filteredData = data.filter(x => {
    let foundFilteredCount = 0;
    for (const filteredTag of filter) {
      if (x.tags.includes(filteredTag)) {
        foundFilteredCount++;
      }
    }

    if (filter.length === foundFilteredCount) {
      return true;
    }
  });
  
  //sadece hepsini siliyor
  function deleteTags(id) {
    setFilter(filter.filter(x => x.id === id));

    if (filter.length == 0) {
      setShowTagsCont(!showTagsCont);
    }
  }

  return (
    <>
     {showTagsCont && (
  <div className="renderTagsContainer" >
    <div className="showFilteredTags" >
      {filter.map((x, i) => (
        <div key={i} className="filterTag">
          {x}
          <button className='removeTags' onClick={() => deleteTags(x)}> 
            <img src="/public/img/trash.svg" alt="trash" />
          </button>
        </div>
      ))}
    </div>
  </div>
)}
      <div className="jobs">
        {filteredData.map(x => <JobItem key={x.id} {...x} addFilter={addFilter} />)}
      </div>
    </>
  )
}

function JobItem({ company, logo, new: isNew, featured, position, postedAt, contract, location, tags, addFilter }) {
  return (
    <div className={featured ? 'jobItem featuredJob' : 'jobItem'}>
      <div className="jobDetails">
        <a href="#" className="companyLogo"><img src={logo} alt={company} /></a>
        <h4>
          <a href="#">{company}</a>
          {isNew && <span className='new'>new!</span>}
          {featured && <span className='featured'>featured</span>}
        </h4>
        <h3>{position}</h3>
        <p>{postedAt} • {contract} • {location}</p>
      </div>

      <div className="jobTags">
        {tags.map((x, i) =>
          <a
            href="#" key={i}
            onClick={e => { e.preventDefault(); addFilter(x); }}
          >{x}</a>
        )}
      </div>
    </div>
  )
}

export default App

