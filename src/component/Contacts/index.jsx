import './style.css'

function Contacs() {
    return ( 
        <div className="contacts-info">    
                <h1>CONTACTS KOMPONENT</h1>
                <div className='contacts-info-item'>
                    <span>Telefon nomresi</span>
                    <span>+994 50 5005050</span>
                </div>
                <div className='contacts-info-item'> 
                    <span>Email</span>
                    <span>react@gmail.com</span>
                </div>
        </div>
     );
}

export default Contacs;