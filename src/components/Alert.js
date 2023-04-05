import React from 'react';

function Alert(props) {

    const capitalize = (word) => {
        if (word === "danger") {
            word = "error";
        }
    }
    return (
        <div style={{ height: '50px' }}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-primary`} role="alert">
                {props.alert.msg}
            </div>}

        </div>
    );
}

export default Alert;
