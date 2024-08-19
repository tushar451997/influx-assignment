import SolidStar1 from "../../Assets/teenyicons_star-solid.svg"
import SolidStar2 from "../../Assets/teenyicons_star-solid-1.svg"
import SolidStar3 from "../../Assets/teenyicons_star-solid-2.svg"
import "./AllCards.css"
import CreditperMonth from "../../Assets/creditPerMonth.svg"
import rollover from "../../Assets/rolloverOfUnusedCredits.svg"
import allmmr from "../../Assets/MMRPerks.svg"
import flexible from "../../Assets/100Flexible.svg"
import discount from "../../Assets/discountOnFoodAndBeverages.svg"
import convenience from "../../Assets/convenienceFee.svg"

const carddata =[
    {
        img:CreditperMonth,
        title:'1 Credit Per Month',
        des:'One 2D standard movie per month1'
    },
    {
        img:rollover,
        title:'Free rollover of unused credits',
        des:'Unused credits will be combined the following month'
    },
    {
        img:allmmr,
        title:'All MMR perks included',
        des:'+ benefits'
    },
    {
        img:flexible,
        title:'100% Flexible',
        des:'Cancel anytime 2'
    },
    {
        img:discount,
        title:'20% Discount on all Food and Beverages',
        des:'Excluding alcohol'
    },
    {
        img:convenience,
        title:'0 Convenience Fees',
        des:'Waived on all days on any tickets purchase'
    }
]
const AllCards = () => {
  return (
    <div className="bg-dark ">
      <div className=" main-container bg-dark text-white mx-auto d-flex flex-md-row flex-column" >
        <div className="div1">
          <div>
            <div>
              <img src={SolidStar1} alt="Home" width={20} height={20} style={{marginTop:"20px"}}/>
              <img src={SolidStar2} alt="Home" width={25} height={25} />
              <img src={SolidStar3} alt="Home" width={20} height={20} style={{marginTop:"20px"}}/>
            </div>
            <h1 style={{fontSize:'20px'}}>Real Deal Monthly Movies</h1>
            <p style={{fontSize:'14px'}}>Your flexible monthly membership to the latest <br /> movies</p>
          </div>
          <hr style={{width:'100px',textAlign:'left',border:'1px solid gray'}}/>
          <div>
            <h2 style={{fontSize:'17px'}}>What is mvp supcriptions?</h2>
            <ul className="list-inline list-unstyled">
              <li>
                <span className="circle">1</span>
                <span>MVP Subcriptions provides the member <br /> 1 movie credit per month</span>
              </li>
              <li>
                <span className="circle">2</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Repudiandae at cum expedita incidunt, numquam modi.</span>
              </li>
              <li>
                <span className="circle">3</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /><span style={{paddingLeft:'34px'}}>Officiis dignissimos sapiente similique consectetur recusandae, corrupti ex veniam. Eveniet sapiente mollitia repellendus nihil?</span></span>
              </li>
            </ul>
          </div>
          <div className="d-flex justify-content-between">
            <button className="btn btn-danger">Get Started &rarr;</button>
            <a href="" className="text-white text-decoration-underline text-white"  style={{ textDecoration: 'underline', textDecorationColor: 'white' }}>Learn More</a>
          </div>
        </div>
        <div className="div2">
<div className="row" >
  {carddata.map((card, index) => (
    <div key={index} className="col-md-4 col-sm-12 mb-3 " >
      <div className="card text-white background    ">
        <img src={card.img} alt={card.title} className="card-img-top" width={30} height={30}/>
        <div className="card-body">
          <h5 className="card-title " style={{fontSize:'17px'}}>{card.title}</h5>
          <p className="card-text ">{card.des}</p>
        </div>
      </div>
    </div>
  ))}
        
            <span style={{marginLeft:'15px'}}>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sed ipsam dolore inventore blanditiis ex.
            </p>
            <p>Lorem ipsum dolor sit amet.</p>
            </span>
        
</div>
        </div>

      </div>
      <div class="container">
      <div class="container">
  <div class="row">
    <div class="col-md-12">
      <h2 class="text-white">Q&A Section</h2>
      <div class="accordion" id="accordionExample">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button class="btn btn-link text-white" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <i class="fas fa-angle-down"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit?
              </button>
            </h5>
          </div>

          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
              <p class="text-white">Answer 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header" id="headingTwo">
            <h5 class="mb-0">
              <button class="btn btn-link text-white" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <i class="fas fa-angle-down"></i> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque?
              </button>
            </h5>
          </div>

          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div class="card-body">
              <p class="text-white">Answer 2: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingTen">
            <h5 class="mb-0">
              <button class="btn btn-link text-white" data-toggle="collapse" data-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                <i class="fas fa-angle-down"></i> Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur?
              </button>
            </h5>
          </div>

          <div id="collapseTen" class="collapse" aria-labelledby="headingTen" data-parent="#accordionExample">
            <div class="card-body">
              <p class="text-white">Answer 10: Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
    </div>
  );
};

export default AllCards;