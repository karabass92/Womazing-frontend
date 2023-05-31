import React from 'react'
import LinkButton from '../../components/Buttons/LinkButton/LinkButton';
import GhostLinkButton from '../../components/Buttons/GhostLinkButton/GhostLinkButton';


const Main = () => {
    return (
        <div>
            Main
            <LinkButton link='/shop' text='магаз' width={260} height={68} />
            <GhostLinkButton link='/shop' text='магаз' width={260} height={68} />
        </div>
    )
};


export default Main;