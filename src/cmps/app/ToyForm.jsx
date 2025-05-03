import { useControlledForm } from "../../hooks/useControlledForm";
import { toyService } from "../../services/toy.service";
import { closeGlobalModal } from "../../store/actions/app.actions";
import { saveToy } from "../../store/actions/toy.actions";

export function ToyForm({ action = 'add', toy }) {
    const [toyToEdit, handleChange, resetForm] = useControlledForm(toy || toyService.getEmptyToy())

    function onSave() {
        //default img
        if (!toyToEdit.imgUrl) toyToEdit.imgUrl = 'https://pl.nice-cdn.com/upload/image/product/large/default/toy-place-bear-100cm-1-st-819856-en.jpg'

        saveToy(toyToEdit)
            .then(() => {
                closeGlobalModal()
            })
    }


    let formTitle
    if (action === 'add') formTitle = 'Add toy'
    if (action === 'edit') formTitle = 'Edit toy'
    let formSubmitText
    if (action === 'add') formSubmitText = 'Add'
    if (action === 'edit') formSubmitText = 'Save'

    return (
        <>
            <h3>{formTitle}</h3>
            <label htmlFor="toyName">Toy Name</label>
            <input
                id="toyName"
                type="text"
                name="name"
                value={toyToEdit.name}
                onChange={handleChange} />

            <label htmlFor="toyPrice">Price</label>
            <input
                id="toyPrice"
                type="number"
                name="price"
                value={toyToEdit.price}
                onChange={handleChange} />

            <div className="clickable filled size-40"
                onClick={onSave}>{formSubmitText}
            </div>

        </>
    )
}