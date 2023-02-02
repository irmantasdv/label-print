
const TemplateList = (props) => {

    const dat = fetch('http://127.0.0.1:8000/api/templatesa')
        .then((response) => response)
        .then((data) => console.log(data));
    return <>

    </>
}
export default TemplateList;
