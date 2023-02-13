import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { labelListActions } from '../../store/labels';

const CsvUpload = () => {
    const fileReader = new FileReader();
    const [file, setFile] = useState();
    const [array, setArray] = useState([]);
    const [csvSeparator, setCsvSeparator] = useState(",");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const templateComponent = useSelector(state => state.labelComponent.labelComponent);
    const {
        height,
        width,
        backGroundColor,
        sizeDescription,
        imageBorder,
        backgImage,
        imageUrl,
        colorSku,
        sizeSku,
        fontWeightSku,
        fontWeightDescription,
        descriptionTextColor,
        descriptionBorder,
        skuBorder
    } = templateComponent;

    const handleOnSavelabels = (e) => {
        e.preventDefault();
        const newArray = [];
        array.forEach(labetItem => {
            let item = {
                ...labetItem
            }
            newArray.push(item);
        })
        fetch('http://127.0.0.1:8000/api/labels', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newArray)
            // body: JSON.stringify([{
            //     "sku":"a@a.com",
            //     "imageUrl": "urlsdfsdfsdf",
            //     "barcode": "23423424",
            //     "description":"ak"
            // }])
        })
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(error => console.log(error))
            navigate('/labels');
    }

    const separatorChangeHandler = (e) => {
        setCsvSeparator(e.target.value);
    }

    const handleOnChange = (e) => {
        setFile(e.target.files[0]);
    };

    const csvFileToArray = string => {
        const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
        const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

        const array = csvRows.map(i => {
            const values = i.split(csvSeparator);
            const obj = csvHeader.reduce((object, header, index) => {
                object[header] = values[index];
                return object;
            }, {});
            return obj;
        });

        setArray(array);
        const myarray = [];

        array.forEach(CsvLabelItem => {
            let item = {
                "height": height,
                "width": width,
                "backGroundColor": backGroundColor,
                "sizeDescription": sizeDescription,
                "imageBorder": imageBorder,
                "backgImage": backgImage,
                "colorSku": colorSku,
                "sizeSku": sizeSku,
                "fontWeightSku": fontWeightSku,
                "fontWeightDescription": fontWeightDescription,
                "descriptionTextColor": descriptionTextColor,
                "descriptionBorder": descriptionBorder,
                "skuBorder": skuBorder,
                ...CsvLabelItem
            }
            myarray.push(item);
        })
        dispatch(labelListActions.fetchLabelItems(myarray));
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (file) {
            fileReader.onload = function (event) {
                const text = event.target.result;
                csvFileToArray(text);
            };

            fileReader.readAsText(file);
        }
    };

    const headerKeys = Object.keys(Object.assign({}, ...array));

    return (
        <div style={{ textAlign: "center" }}>
            <h1>REACTJS CSV IMPORT EXAMPLE </h1>
            {/* <form>
        <input
          type={"file"}
          id={"csvFileInput"}
          accept={".csv"}
          onChange={handleOnChange}
        />
        <button
          onClick={(e) => {
            handleOnSubmit(e);
          }}
        >
          IMPORT CSV
        </button>
        <select name="separator" onChange={separatorChangeHandler}>
            <option value=",">Comma separated CSV</option>
            <option value=";">Semicolon separated CSV</option>
        </select>
      </form> */}
            <form className='container-sm p-5'>
                <div className="mb-3">
                    <label htmlFor="uplodCsv" className="form-label">Upload CSV</label>
                    <input
                        type={"file"}
                        className="form-control"
                        id={"csvFileInput"}
                        accept={".csv"}
                        aria-describedby="csvHelp"
                        // value={fileValue}
                        onChange={handleOnChange}
                    // onBlur={failBlurHandler}
                    />
                    <div id="csvHelp" className="form-text">Upload file here</div>
                </div>
                <div className="mb-3">
                    <select name="separator" onChange={separatorChangeHandler}>
                        <option value=",">Comma separated CSV</option>
                        <option value=";">Semicolon separated CSV</option>
                    </select>
                </div>
                <button type="submit" onClick={(e) => { handleOnSubmit(e); }} className="btn btn-primary m-2">Show data</button>
                <button type="submit" onClick={handleOnSavelabels} className="btn btn-primary">Save label data from file</button>
            </form>

            <br />

            <table>
                <thead>
                    <tr key={"header"}>
                        {headerKeys.map((key) => (
                            <th>{key}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {array.map((item) => (
                        <tr key={item.id}>
                            {Object.values(item).map((val) => (
                                <td>{val}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}

export default CsvUpload
