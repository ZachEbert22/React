
import { NavBar } from "../NavBar"
import { RankingDataProps } from "../models/rankingItemProps"
import { rankingPageItem } from "../data/rankingItem"
import './ContactPage.css'

export function ContactPage() {

    return (<div style={{backgroundColor: "rgb(59, 128, 255)"}}>
      <div><NavBar></NavBar></div>
      
      <div>
      <h1 style={{padding: "10px 800px"}}>Rankings-All Sword and Shield Sets!</h1>
      {rankingPageItem.map((item:RankingDataProps)=>{
        return(
          
        <div style = {{padding: "50px 30%"}}>
          <h2>{item.ranking}) {item.title}</h2>
          <img src = {`${item.image}`} style = {{width: "500px", height: "300px",padding: "00px 200px"}} />
          <h3>{item.desc1}</h3>
          <h3>{item.desc2}</h3>
          <h3>{item.desc3}</h3>    
        </div>)
      })}
      </div>
    </div>)
  }
  