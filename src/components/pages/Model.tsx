import {useParams} from "react-router-dom";
import {adidasArr} from "./Adidas";

export const Model = () => {

    const params = useParams()

    console.log(params)

    const currentModel = adidasArr.find(el => el.id === Number(params.id))

    return (
        <div style={{textAlign: 'center'}}>
            {currentModel
                ? <>
                    <h2>{currentModel.model}</h2>
                    <p>{currentModel.collection}</p>
                    <p>{currentModel.price}</p>
                    <img src={currentModel.picture} alt={currentModel.model}/>
                </>
                :
                <h2>Модель отсутствует</h2>
            }
        </div>
    );
};

