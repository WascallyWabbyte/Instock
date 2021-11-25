import './PageHeadingBar.scss'
import { Link } from 'react-router-dom';

const PageHeadingBar = ({heading, buttonText, prevUrl}) => {
    let previousPath = '/' + prevUrl.split('/')[1];

    if (heading === 'Warehouses' || heading === 'Inventory'){
        return(
            <div className='page-heading-bar'>
                <h1 className='page-heading-bar__heading'>{heading}</h1>
                <div className="page-heading-bar__search-and-add">
                    <form>
                        <input className="page-heading-bar__search" type="text" placeholder="Search..."/>
                    </form>
                    <button className="page-heading-bar__add-btn">
                        {buttonText}
                    </button>
                </div>
            </div>
        );
    } else return (
            <div className='page-heading-bar--alternate'>
                <div className='page-heading-bar__heading-wrapper'>
                    <Link className='page-heading-bar__link'to={previousPath}><img className='page-heading-bar__back-icon' src='http://localhost:8080/arrow_back-24px.svg' alt='back arrow icon'></img></Link>
                    <h1 className='page-heading-bar__heading'>{heading}</h1>
                </div>
                {buttonText
                ? <><button className='page-heading-bar__edit-btn'><img className='page-heading-bar__btn-icon' src='http://localhost:8080/edit-24px-white.svg'></img>{buttonText}</button>
                <button className='page-heading-bar__edit-btn--mobile'><img className='page-heading-bar__btn-icon--mobile' src='http://localhost:8080/edit-24px-white.svg'></img></button></>
                : <></>}
                
            </div>
    );
}

export default PageHeadingBar