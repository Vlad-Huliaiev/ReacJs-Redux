import Styled from "styled-components";

const CreateContainer = Styled.div`
    margin: auto auto;
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const CreateForm = Styled.div`
    margin: 0.5% auto;
`

const CreateFormLabel = Styled.label`
    margin: 15px
`

const CreateFormSelect = Styled.select`
    padding: 2px 2px;
    width: 240px;
    height: 20px;
`

const CreateFormInput = Styled.input`
    height: 20px;
    width: 160px;
    border-radius: 5px;
`

const CreateButton = Styled.button`
    margin: 10px;
    width: 320px;
    height: 40px;
    text-align: center;
    background-color: rgba(89, 171, 227, 1);
    border-radius: 5px;
    &:hover {
        background-color: rgba(103, 65, 114, 0.9);
    }
`

export {CreateContainer, CreateForm, CreateFormLabel, CreateFormSelect, CreateFormInput, CreateButton};