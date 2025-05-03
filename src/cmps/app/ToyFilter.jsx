// === Style

// === Services
import { labels, toyService } from "../../services/toy.service";

// === Imgs

// === React
import { useControlledForm } from "../../hooks/useControlledForm";
import { useEffect } from "react";
import { loadToys, setFilterBy } from "../../store/actions/toy.actions";

// === Child Components

// ====== Component ======
// =======================

export function ToyFilter({ /* prop1, prop2 */ }) {
    // === Consts
    const [filterByToEdit, handleChange, resetForm] = useControlledForm(toyService.getDefaultFilter())
    // === Effects

    useEffect(() => {
        setFilterBy(filterByToEdit)
        loadToys()
    }, [filterByToEdit])

    // === Functions

    // if (!data) return <div>Loading...</div>
    return (
        <section className="ToyFilter">
            <h1>ToyFilter</h1>

            <input
                className="search-toy"
                type="text"
                name="txt"
                placeholder="Search"
                value={filterByToEdit.txt}
                onChange={handleChange}
            />

            <label htmlFor="filter-by-label">Category</label>
            <select
                name="label"
                id="filter-by-label"
                value={filterByToEdit.label}
                onChange={handleChange}
            >
                <option value="">Select category</option>
                {labels.map((label, idx) => {
                    return <option key={idx} value={label}>{label}</option>
                })}
            </select>


            <div
                className="clear-filter-btn clickable clear size-32 icon-start i-CloseMedium "
                onClick={resetForm}
            >Clear filter</div>

        </section>
    )
}