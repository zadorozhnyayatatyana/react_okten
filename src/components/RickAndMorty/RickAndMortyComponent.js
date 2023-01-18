import './RickAndMorty.css';

export const RickAndMortyComponent = (props) => {
    let {id,name,status,species,gender,image} = props;

    return(
        <article className={"RickAndMorty-article"}>
            <div className={"RickAndMorty-img"}>
                <img src={image} alt=""/>
            </div>
            <div className={"RickAndMorty-description"}>
                <div className={"section"}>
                    <h2>{id +" "+ name}</h2>
                </div>
                <div className={"section"}>
                    <span>{status}</span>
                </div>
                <div className={"section"}>
                    <span>{species}</span>
                </div>
                <div className={"section"}>
                    <span>{gender}</span>
                </div>
            </div>
        </article>
    );
}

