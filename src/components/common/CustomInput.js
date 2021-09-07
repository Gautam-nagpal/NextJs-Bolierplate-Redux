import React, { useState } from "react"
import { TextField, IconButton, InputAdornment } from '@material-ui/core';
import { COUNTRY_CODE } from '@constants';
import InputMask from 'react-input-mask';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';



export default function CustomInput(props) {
    const { onChange, value, error = '', type = 'text', placeholder = '', id = '', className = '', label, variant = "outlined", autoFocus = false, ...rest } = props

    const [show, setShow] = useState(false);

    function toggle() {
        setShow(!show)
    }
    // if (type === 'phone') {
    //     return (
    //         <React.Fragment>
    //             <TextField
    //                 id={id}
    //                 type="text"
    //                 value={value}
    //                 onChange={onChange}
    //                 label={label}
    //                 variant="outlined"
    //                 className={className}
    //                 placeholder={placeholder}
    //                 autoFocus={autoFocus}
    //                 InputProps={{
    //                     startAdornment: <InputAdornment position="start">{COUNTRY_CODE || "+91"}</InputAdornment>
    //                 }}
    //                 {...rest}
    //             />
    //             {error && <p className="error">{error}</p>}
    //         </React.Fragment>
    //     )
    // }

    // if (type === 'password') {
    //     return (
    //         <React.Fragment>
    //             <TextField
    //                 id={id}
    //                 type={show ? 'text' : type}
    //                 value={value}
    //                 onChange={onChange}
    //                 label={label}
    //                 variant="outlined"
    //                 className={className}
    //                 autoFocus={autoFocus}
    //                 placeholder={placeholder}
    //                 InputProps={{
    //                     endAdornment: <InputAdornment position="end">
    //                         <IconButton
    //                             aria-label="toggle password visibility"
    //                             onClick={toggle}
    //                         >
    //                             {show ? <Visibility /> : <VisibilityOff />}
    //                         </IconButton>
    //                     </InputAdornment>
    //                 }}
    //                 {...rest}
    //             />
    //             {error && <p className="error">{error}</p>}
    //         </React.Fragment>
    //     )
    // }

    // if (type === "simple") {
    //     return <React.Fragment>
    //         <TextField
    //             {...props}
    //         />
    //         {error && <p className="error">{error}</p>}
    //     </React.Fragment>
    // }

    return (
        <React.Fragment>
            {/* <TextField
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                label={label}
                variant="outlined"
                className={className}
                autoFocus={autoFocus}
                placeholder={placeholder}
                {...rest}
            /> */}
            <input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                label={label}
                className={className}
                autoFocus={autoFocus}
                placeholder={placeholder}
                {...rest}
            />
            {error && <p className="error">{error}</p>}
        </React.Fragment>
    )
}