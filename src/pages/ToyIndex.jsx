// === Style

// === Services
import { toyService } from "../services/toy.service.js";
import { showSuccessMsg } from "../services/base/event-bus.service.js";

// === Actions
import { loadToys, saveToy } from "../store/actions/toy.actions.js";
import { closeGlobalModal, openGlobalModal } from "../store/actions/app.actions.js";

// === Imgs

// === React
import { useSelector } from "react-redux";
import { useEffect } from "react";

// === Child Components
import { ToyFilter } from "../cmps/app/ToyFilter.jsx";
import { ToyList } from "../cmps/app/ToyList.jsx";
import { ToyForm } from "../cmps/app/ToyForm.jsx";

// ====== Component ======
// =======================

export function ToyIndex({ /* prop1, prop2 */ }) {
    // === Consts
    const toys = useSelector(storeState => storeState.toyModule.toys)


    // === Effects
    useEffect(() => {
        loadToys()
            .then(() => {
                showSuccessMsg('toys were loaded')
            })
            .catch(() => {
                showSuccessMsg('somthing went wrong')
            })
    }, [])

    // === Functions


    function onAddToy() {
        openGlobalModal(<ToyForm action='add'/>)
    }

    // if (!data) return <div>Loading...</div>
    return (
        <section className="ToyIndex">
            <h2>Our toys</h2>

            <div className="clickable filled size-40 icon-start i-Add"
                onClick={onAddToy}>New toy
            </div>

            <ToyFilter />
            <ToyList />
        </section>
    )
}


