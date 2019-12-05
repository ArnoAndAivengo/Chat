import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import  { dialogActions } from '../redux/actions';
import { Dialogs as BaseDialogs } from "../components";

const Dialogs = ({ fetchDialogs, currentDialogId, setCurrentDialogId, items, userId }) => {
    const [inputValue, setValue] = useState("");
    const [filtred, setFiltredItems] = useState(Array.from(items));

    const onChangeInput = value => {
        setFiltredItems(
            items.filter(
                dialog => dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0
            )
        );
        setValue(value)
    };

    const onSelectDialog = () => {

    };

    useEffect(() => {
        if(!items.length) {
            fetchDialogs()
        } else {
            setFiltredItems(items);
        }
    }, [items]);

    return (
        <BaseDialogs
            items={filtred}
            userId={userId}
            onSearch={onChangeInput}
            inputValue={inputValue}
            onSelectDialog={setCurrentDialogId}
            currentDialogId={currentDialogId}
        />
    );
};
export default connect(({
    dialogs
}) => dialogs, dialogActions)(Dialogs);