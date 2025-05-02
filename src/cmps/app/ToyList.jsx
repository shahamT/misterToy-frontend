// === Style

import { useSelector } from "react-redux";
import { ToyPreview } from "./ToyPreview.jsx";

// === Services

// === Imgs

// === React

// === Child Components

// ====== Component ======
// =======================

export function ToyList({ /* prop1, prop2 */ }) {
    // === Consts
    const toys = useSelector(storeState => storeState.toyModule.toys)
    const isToysLoading = useSelector(storeState => storeState.toyModule.isLoading)

    // === Effects

    // === Functions

    if (isToysLoading) return <div>Loading...</div>
    return (
        <section className="ToyList">
            {toys.map(toy=> {
                return <ToyPreview key={toy._id} toy={toy}/>
            })}
        </section>
    )
}