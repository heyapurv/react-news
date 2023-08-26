import React, { Component } from 'react'
import Newsitems from './Newsitems'

export class News extends Component {
     articles = [
        {"source": {
            "id": "techcrunch",
            "name": "TechCrunch"
            },
            "author": "Haje Jan Kamps",
            "title": "Sample Series A pitch deck: BusRight's $7M deck | TechCrunch",
            "description": "BusRight is a school-bus management platform. The company's pitch deck is well-designed and full of careful touches.",
            "url": "https://techcrunch.com/2023/08/25/sample-series-a-pitch-deck-busright/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/08/Busright-PDT-Cover.jpg?resize=1200,675",
            "publishedAt": "2023-08-25T16:01:28Z",
            "content": "As soon as I saw the cover slide for BusRight, I knew I was looking at something really interesting. BusRight is a school-bus management platform that aims to improve efficiency and safety by, among … [+4176 chars]"
            },
            {
            "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
            },
            "author": "Carly Page",
            "title": "MOVEit, the biggest hack of the year, by the numbers | TechCrunch",
            "description": "The mass-exploitation of MOVEit file transfer servers — the largest hack of the year so far — now affects at least 60 million people.",
            "url": "https://techcrunch.com/2023/08/25/moveit-mass-hack-by-the-numbers/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/08/numbers-pattern-getty.jpg?resize=1200,811",
            "publishedAt": "2023-08-25T15:46:00Z",
            "content": "The mass-exploitation of MOVEit Transfer software has rapidly cemented itself as the largest hack of the year so far. While the full impact of the attack will likely remain untold for months to come,… [+5355 chars]"
            },
            {
            "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
            },
            "author": "Rebecca Bellan",
            "title": "Polestar 4 to feature Mobileye's hands-off, eyes-off driving tech | TechCrunch",
            "description": "Swedish electric vehicle maker Polestar wants to bring Mobileye's Chauffeur, a hands-off, eyes-off autonomous driving technology to its Polestar 4",
            "url": "https://techcrunch.com/2023/08/25/polestar-4-to-feature-mobileyes-hands-off-eyes-off-driving-tech/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/08/Hero.jpeg?w=1024",
            "publishedAt": "2023-08-25T15:44:28Z",
            "content": "Swedish electric vehicle maker Polestar wants to bring Mobileye’s Chauffeur, a hands-off, eyes-off autonomous driving technology to its Polestar 4 electric SUV coupe.\r\nThe Polestar 4, which launched … [+2259 chars]"
            },
            {
            "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
            },
            "author": "Kyle Wiggers",
            "title": "Qase raises $7.2M to help companies manage their software tests | TechCrunch",
            "description": "Qase, a platform designed to help companies manage their automated and manual software tests, has raised $7.2 million in a funding round.",
            "url": "https://techcrunch.com/2023/08/25/qase-raises-7-2m-to-help-companies-manage-their-software-tests/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/08/GettyImages-1439425791-1.jpg?resize=1200,613",
            "publishedAt": "2023-08-25T15:01:25Z",
            "content": "Qase, an Austin-based platform for managing software quality assurance testing and reporting, today announced that it raised $7.2 million in a Series A round led by Chrome Capital with participation … [+4512 chars]"
            },
            {
            "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
            },
            "author": "Lauren Simonds",
            "title": "Alloy, Synctera and Unit discuss the future of embedded finance at TC Disrupt | TechCrunch",
            "description": "Come to the Fintech Stage at TechCrunch Disrupt 2023 to hear new wave finance infrastructure companies discuss banking — reinvented.",
            "url": "https://techcrunch.com/2023/08/25/alloy-synctera-and-unit-discuss-the-future-of-embedded-finance-at-tc-disrupt/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/08/tc_disrupt_2023_speaker-carousel_Spiekerman_Swoverland_Hazlehurst_1920x1080.png?resize=1200,675",
            "publishedAt": "2023-08-25T15:01:02Z",
            "content": "Banking-as-a-service (BaaS), embedded finance and open banking are among the hottest topics in fintech today. The promise? Make opening a bank account, storing money, receiving a payment card and len… [+3848 chars]"
            },
            {
            "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
            },
            "author": "Aria Alamalhodaei",
            "title": "Orbital Composites lands new government contracts to advance in-space manufacturing | TechCrunch",
            "description": "Orbital Composites is expanding its in-space servicing, assembly and manufacturing development work with three new SBIR contracts.",
            "url": "https://techcrunch.com/2023/08/25/orbital-composites-lands-new-government-contracts-to-advance-in-space-manufacturing/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/08/Orbital-rocket-nozzle-demo-at-ORNL.png?resize=1200,636",
            "publishedAt": "2023-08-25T15:00:31Z",
            "content": "Advanced manufacturing startup Orbital Composites is expanding its in-space servicing, assembly and manufacturing development work with three new Small Business Innovation Research (SBIR) contracts v… [+3124 chars]"
            }
    ]
     constructor(){
        super();
        console.log("hello this is constructor from news component")
        this.state = {
            articles: this.articles,
            loading: false 

        }
     }
  render() {
    return (
      <div className="container my-3">
         <h1 className='mx-4'>STRiiXER - Top Headlines</h1>
         
           <div className="row my-4 mx-4" >
           {this.state.articles.map((element)=>{
                return <div className="col-md-4 my-4" key={element.url}>
                <Newsitems  title={element.title.slice(0,40)} description={element.description.slice(0,90)} nurl = {element.urlToImage} newsurl={element.url}/>
            </div>
         })} 
            </div>
            
        </div>
    )
  }
}

export default News
