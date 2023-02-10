import './App.css';
import './SectionHeader.css';

function SectionHeader ({name}) {
    return (
        <div className='sectionHeader'>
            <h1>{`${name}`}</h1>
        </div>
        
    )
}

export default SectionHeader;