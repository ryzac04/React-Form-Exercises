import { useState } from "react";
import { v4 as uuid } from "uuid";

const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = {
        color: '',
        width: '',
        height: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({ ...formData, id: uuid() });
        setFormData(INITIAL_STATE);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="color">Color:</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="color"
                        value={formData.color}
                        id="color"
                    />
                </div>
                <div>
                    <label htmlFor="width">Width:</label>
                    <input
                        onChange={handleChange}
                        type="number"
                        name="width"
                        value={formData.width}
                        id="width"
                    />
                </div>
                <div>
                    <label htmlFor="height">Height:</label>
                    <input
                        onChange={handleChange}
                        type="number"
                        name="height"
                        value={formData.height}
                        id="height"
                    />
                </div>
                <button id="newBoxButton">New Box</button>
            </form>
        </div>
    );

}

export default NewBoxForm;