import { ArrowsOutSimple, Link } from 'phosphor-react';
import { useState } from 'react';
import styled from 'styled-components';

type Props = {}

const Wrapper = styled.main`
    padding: 1rem 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
    .card img {
        width: 300px;
        height: 200px;
        border-radius: 1rem;
        cursor: pointer;
    }
    .card {
        display: flex;
        justify-content: center;
        align-items: center;
        filter: unset;
        color: #ffffff;
        transition: 0.3s;
    }
    .card-wrapper svg {
        color: #ffffff;
    }
    .card-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        visibility: hidden;
        opacity: 0;
        font-weight: bold;
        transition: 0.3s;
    }
    .card:hover > .card-wrapper {
        opacity: 1;
        font-size: 14px;
        visibility: visible;
    }
    .card:hover {
        filter: grayscale(1);
    }
`;

const Content = (props: Props) => {

    const [ data, setData ] = useState([
        {"id": 1, "link": "https://images.unsplash.com/photo-1473492201326-7c01dd2e596b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80", "name": "Língua Portuguesa"},
        {"id": 2, "link": "https://images.unsplash.com/photo-1552486274-011c96d67c54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", "name": "Biologia"}, 
        {"id": 3, "link": "https://images.unsplash.com/photo-1518082593638-b6e73b35d39a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80", "name": "Inglês"}, 
        {"id": 4, "link": "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=945&q=80", "name": "Artes"},  
        {"id": 5, "link": "https://images.unsplash.com/photo-1448035249594-10682f3c2db3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", "name": "Matemática"}, 
        {"id": 6, "link": "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", "name": "Educação Física"}, 
        {"id": 7, "link": "https://images.unsplash.com/photo-1628863353691-0071c8c1874c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", "name": "Química"}, 
        {"id": 8, "link": "https://images.unsplash.com/photo-1534744971734-e1628d37ea01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", "name": "Física"}, 
        {"id": 9, "link": "https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", "name": "História"}, 
        {"id": 10, "link": "https://images.unsplash.com/photo-1567266565446-d9c40ccf59a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", "name": "Geografia"}, 
        {"id": 11, "link": "https://images.unsplash.com/photo-1527767612165-ed1f4194a45c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", "name": "Sociologia"}, 
        {"id": 12, "link": "https://upload.wikimedia.org/wikipedia/commons/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg", "name": "Filosofia"}
    ]);

    return (
        <Wrapper id="main" theme={data}>
            {data && data.map((item)=>{
                const {link, name} = item;
                return (
                    <div className="card">
                        <img src={link} className="img-fluid" alt=""/>
                        <div className='card-wrapper'>
                            <div>
                                <a href="assets/img/gallery/gallery-1.jpg"><Link size={32} /></a>
                                <a href="gallery-single.html"><ArrowsOutSimple size={32} /></a>
                            </div>
                            <h2>{name}</h2>
                        </div>
                    </div>
                )
            })}
        </Wrapper>
    )
}

export default Content;