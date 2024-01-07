import FaqItem from '../FaqItem';

import './index.css'


const Faqs = props => {

    const { faqsList } = props
    
        return (
            <div className='app-container'>
                <div className='card-container'>
                    <h1 className='heading'>FAQs</h1>
                    <ul className='faqs-list'>
                        {faqsList.map(eachItem => (
                            <FaqItem key={eachItem.id} details={eachItem} />
                        ))}
                    </ul>
                </div>
            </div>
        )
}


export default Faqs
