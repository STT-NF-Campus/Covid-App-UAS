import { useContext, useState } from "react";
import ProvinsiContext from "../../../context/ProvinsiContext";
import { FieldGroup, InputGroup, StyledForm } from "./Form.styled";
import { Button, Dropdown, Error, Input, Label, Option } from "../../ui";

const Form = () => {
    const { data, setData } = useContext(ProvinsiContext);

    const [formData, setFormData] = useState({
        provinsi: "Aceh",
        status: "confirmed",
        jumlah: "",
    });

    const { provinsi, status, jumlah } = formData;

    const [errors, setErrors] = useState({
        jumlah: null,
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        if (jumlah === '') {
            setErrors({
                jumlah: 'Jumlah Wajib Di isi',
            });
            return false;
        } else if (jumlah < 1) {
            setErrors({
                jumlah: 'Jumlah tidak boleh kurang dari 1',
            });
            return false;
        }
        else {
            setErrors({
                jumlah: null,
            });
            return true;
        }
    };

    const resetForm = () => {
        setFormData({
            provinsi: "Aceh",
            status: "confirmed",
            jumlah: "",
        });
    };

    const addMovie = () => {
        const newDataCovid = data.regions?.map((item) => {
            const { name, numbers } = item;
            if (name == provinsi) {
                numbers[status] = parseInt(numbers[status]) + parseInt(jumlah);
            }
            return item;
        });

        const formattedData = {
            ...data,
            regions: newDataCovid,
        }

        setData(formattedData);
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validate() && addMovie() && resetForm();
    };


    return (
        <StyledForm onSubmit={handleSubmit}>
            <FieldGroup>
                <Label htmlFor="provinsi">Provinsi</Label>
                <InputGroup>
                    <Dropdown name="provinsi" value={provinsi} onChange={handleInput}>
                        {data.regions?.map((item, index) =>
                            <option key={index} value={item.name}>{item.name}</option>
                        )}
                    </Dropdown>
                </InputGroup>
            </FieldGroup>
            <FieldGroup>
                <Label htmlFor="status">Status</Label>
                <InputGroup>
                    <Dropdown name="status" value={status} onChange={handleInput}>
                        <Option value="confirmed">Positif</Option>
                        <Option value="recovered">Sembuh</Option>
                        <Option value="treatment">Dirawat</Option>
                        <Option value="death">Meninggal</Option>
                    </Dropdown>
                </InputGroup>
            </FieldGroup>
            <FieldGroup>
                <Label htmlFor="jumlah">Jumlah</Label>
                <InputGroup>
                    <Input type="number" pattern="^\d+$" name="jumlah" value={jumlah} placeholder='0' onChange={handleInput} min={1} />
                    {errors.jumlah && <Error>{errors.jumlah}</Error>}
                </InputGroup>
            </FieldGroup>
            <FieldGroup>
                <Button type="submit" color="primary" size="sm" full="true">Submit</Button>
            </FieldGroup>
        </StyledForm>
    )
}

export default Form
