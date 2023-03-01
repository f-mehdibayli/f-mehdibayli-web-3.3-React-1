import PersonalInfo from '../PersonalInfo';
import Experience from '../Experience';
import Contacs from '../Contacts';



function UserCV () {
    return (
        <div>
            <h1>User CV Komponent</h1>
            <PersonalInfo/>
            <Experience/>
            <Contacs/> 
        </div>
      
        
      );
}

export default UserCV;