// === Style


// === Services

// === actions
import { closeGlobalModal, openGlobalModal } from "../../store/actions/app.actions.js"
import { removeToy } from "../../store/actions/toy.actions.js"

// === Imgs

// === React
import { useNavigate } from "react-router-dom"

// === Child Components
import { ToyForm } from "./ToyForm.jsx"
import { ConfirmDelete } from "../reusabales/GlobalModal/ConfirmDelete/ConfirmDelete.jsx"
import { Tooltip } from "../reusabales/tooltip/Tooltip.jsx"
import { useSelector } from "react-redux"

// ====== Component ======
// =======================

export function ToyPreview({ toy }) {
    // === Consts
    const navigate = useNavigate()
    // === Effects

    // === Functions
    function onDeleteToy() {
        openGlobalModal(<ConfirmDelete
            entity={toy}
            action={removeToy}
            entityName={toy.name}
            isLoadingSelect={storeState => storeState.toyModule.isToyActionLoading}
        />)
    }

    const {
        _id,
        name,
        imgUrl,
        price,
        labels,
    } = toy

    return (
        <article className="ToyPreview">

            <div className="toy-img-wraper">
                <img
                    className="toy-img"
                    src={imgUrl}
                    alt="" />

                <div className="labels-container">
                    {labels.map(label => {
                        return <div className="label" key={label}>{label}</div>
                    })}
                </div>

            </div>

            <p className="toy-name">{name}</p>


            <p><span>{price}</span> $</p>
            <div className="action-btns">

                <Tooltip title="Delete toy">
                    <div
                        className="remove-toy-btn clickable clear icon-btn size-32 i-Delete"
                        onClick={onDeleteToy}
                    ></div>
                </Tooltip>
                <Tooltip title="Edit toy">
                    <div
                        className="remove-toy-btn clickable clear icon-btn size-32 i-Edit"
                        onClick={() => openGlobalModal(<ToyForm action='edit' toy={toy} />)}
                    ></div>
                </Tooltip>


                {/* <button onClick={() => navigate(`/toy/view/${_id}`)}>view details</button> */}

            </div>

        </article>
    )
}
