import React from 'react'
import Lib from '../images/Ser/library.jpg';



export default function library() {
  return (
     <div>
      <div>
      <img src={Lib} alt={"Library"} />
        </div>
       <div>
       <h3  >Library Hours</h3>
        <p>   Library remains open on Monday to Friday – 9.30am to 6.00pm<br/>On Saturday -   9.30am to 1.30pm</p>
       </div>
       <div>
       <h3>  Contact</h3>
        <p>   Ms. Anuradha Vajire (Librarian: Books)<br/>Ph. No. 020-25580036/37<br/>Email : library@ftii.ac.in</p>
       </div>
        <div>
        <h3>  Location of the library</h3>
        <p>   Library is located on the second floor of TV building.</p>
        </div>
        <div>
        <h3>  Collection of the library</h3>
        <p>   Library houses total collection of 31000(appx) resources which includes books covering various subject areas like cinema and related subjects like Indian cinema, direction, cinematography, sound recording, acting, screenplay writing, theatre, visual art, paintings etc.<br/>   Resources are procured on the basis of recommendations received from the users of the library.
<br/>   The book collection of the library consists of books, bound-volumes of periodicals and audio visual materail. Library follows open access system for most of the while some are preserved in closed stacks and made available only on request.</p>
        </div>
      <div> 
    <h3>      Types of Resources</h3>
     <ul>
     <li>   Books</li>
     <li>   Journals, Newspapers, and Magazines</li>
     <li>   Audio Visual Collection</li>
     <li>etc...</li>
     </ul>
     </div> 
    </div>
    
  )
}