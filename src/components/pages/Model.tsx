import {useParams} from "react-router-dom";
import {adidasArr, type AdidasItem} from "./Adidas";
import {pumaArr, type PumaItem} from "./Puma";

type Models = Record<string, AdidasItem[] | PumaItem[]>

const models: Models = {
    adidas: adidasArr,
    puma: pumaArr
}

export const Model = () => {

    const {model, id} = useParams()
    if (!model || !(model in models)){
        return <h2>Бренд {model} не поддерживается  </h2>
    }
    const currentModel = models[model].find(el => el.id === Number(id))

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

