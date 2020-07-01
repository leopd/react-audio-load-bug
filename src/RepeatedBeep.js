import React from 'react';

class RepeatedBeep extends React.Component {

    constructor(props) {
        super(props);
        this.audio = new Audio('beep.mp3');
        setInterval(this.beep.bind(this), 2000);
    }

    beep() {
        console.log("beeping");
        this.audio.play();
    }

    render() {
        return "This should play a noise every 2 seconds."
    }

}

export default RepeatedBeep;
