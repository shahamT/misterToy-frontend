// === Style

import { useNavigate } from "react-router-dom"
import { removeToy } from "../../store/actions/toy.actions.js"
import { Tooltip } from "../reusabales/tooltip/Tooltip.jsx"
import { openGlobalModal } from "../../store/actions/app.actions.js"
import { ToyForm } from "./ToyForm.jsx"


// === Services

// === Imgs

// === React

// === Child Components

// ====== Component ======
// =======================

export function ToyPreview({ toy }) {
    // === Consts
    const navigate = useNavigate()

    // === Effects

    // === Functions

    const {
        _id,
        name,
        imgUrl,
        price,
        labels,
    } = toy

    return (
        <article className="ToyPreview">
            <p className="toy-name">{name}</p>
            <div className="labels-container">
                {labels.map(label => {
                    return <div key={label}>{label}</div>
                })}
            </div>
            <img src={imgUrl} alt="" />
            <p>price: <span>{price}</span></p>
            <div className="action-btns">

                <Tooltip  title="Delete toy">
                    <div
                        className="remove-toy-btn clickable filled icon-btn size-32 i-Delete"
                        onClick={() => removeToy(toy)}
                    ></div>
                </Tooltip>
                <Tooltip  title="Edit toy">
                    <div
                        className="remove-toy-btn clickable filled icon-btn size-32 i-Edit"
                        onClick={() => openGlobalModal(<ToyForm action='edit' toy={toy}/>)}
                    ></div>
                </Tooltip>


                <button onClick={() => navigate(`/toy/view/${_id}`)}>view details</button>

            </div>

        </article>
    )
}