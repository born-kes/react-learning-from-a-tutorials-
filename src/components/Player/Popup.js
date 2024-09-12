import React from "react";
import { Modal } from "react-async-popup";
import DetailsModal from "./DetailsModal";
import "react-async-popup/dist/styles.css";


const Popup = ({music: {src, icon} }, date) => {
    const deleteAccount = async () => {
        const { show } = await Modal.new({
            title: `Ustawienia audio: ${src} ${icon}`,
            content: <DetailsModal date={date}  />,
            footer: null,
            popupStyle: {
                minWidth: 400
            }
        });
        const result = await show();
        if (result !== false) {
            return (result);
        } else {
            console.error(" User canceled the registration");
        }
    };

    return deleteAccount;
};

export default Popup;
