import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "../../shared/type";


type Props = {
    page:string;
    selectedPage:SelectedPage;
    setSelectedPage:(value:SelectedPage)=>void
}


function Link({page,selectedPage,setSelectedPage}: Props) {
    //replace all the spaces with not space
    const lowerCase= page.toLowerCase().replace(/ /g,"") as SelectedPage;
  return (
    <AnchorLink
    //if they are match it will turn red if not black color
    className={`${selectedPage ===lowerCase ? " text-red-500" : ""  } 
     transition duration-500 hover:text-red-300
    `}
    href={`#${lowerCase}`}
    onClick={()=>{setSelectedPage(lowerCase)}}
    >
        {page}
    </AnchorLink>
  )
}

export default Link