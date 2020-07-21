import React from "react";
import "./style.css";

export default function DetailsModal({ ok, cancel, date : {play, volume, speed, loop, currentTime } }) {
    // console.log(`volume`)

    const submit = e => {
        e.preventDefault();
        const { value: play } = e.target.elements["play"].checked;
        const { value: repeat } = e.target.elements["repeat"].checked;
        const { value: volume } = e.target.elements["volume"].value;
        const { value: progress } = e.target.elements["duration"].value;
        const { value: playbackRate } = e.target.elements["speed"].value;
        ok({
            play,
            // progress
            repeat,
            volume,
            playbackRate,
            progress
        });
    };
    // TODO Add date from player state
    // TODO Add UI
    return (
        <form className="register" onSubmit={submit}>
            <div>
                <label>Play
                    <input name="play" type="checkbox" onChange={e=>play(e.target.checked)} /></label>
            </div>
            <div>
                <label>Pętla odtwarzania
                    <input name="repeat" type="checkbox" onChange={e=>loop(e.target.checked)}  /></label>
            </div>
            <div>
                <label>Głośność
                    <input name="volume" type="range" step="0.1" min="0" max="1" onChange={e=>volume(e.target.value)} /></label>
            </div>
            <div>
                <label>Pasek odtwarzania
                    <input name="duration" type="range" min="0" step="0.01" max="1" onChange={e=>currentTime(e.target.value)} /></label>
            </div>
            <div>
                <label>Szybkość odtwarzania
                    <input name="speed" type="range" min="0" max="4" step="0.5" onChange={e=>speed(e.target.value)} /></label>
            </div>
            <div className="actions">
                <button type="submit"> Zapisz </button>
            </div>
        </form>
    );
}
