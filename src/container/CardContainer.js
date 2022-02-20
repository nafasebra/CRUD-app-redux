import Card from '../components/card/Card';

import posts from '../data/posts';

import layout from '../components/Layout.module.css';
import '../components/card/Card.css';


const CardContainer = () => {
    return (
        <div className={layout.container}>
            <h3 className="head_text">Added Posts...</h3>
            <div className="card_section">
                {
                    posts.map((item, index) => <Card key={index} imgSrc={item.imageSrc} title={item.title} desc={item.description} topics={item.topics} />)
                }
            </div>
        </div>
    );
}

export default CardContainer;