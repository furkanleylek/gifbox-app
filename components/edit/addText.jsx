'use client'
import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';

function AddText() {
    const handleDrag = (e, ui) => {
        const { x, y } = ui;
        console.log('Yeni konum:', x, y);
    };
    const bounds = {
        top: 0,
        right: 500,
        bottom: 470,
        left: 0,
    };

    const [addTextValue, setAddTextValue] = useState('')

    return (
        <div style={{ width: '685px', height: '500px', border: '1px solid red', position: 'relative' }}>
            <Draggable bounds={bounds} onDrag={handleDrag}>
                <input type="text" placeholder="Metni buraya sürükleyin" className='z-[999]' value={addTextValue} onChange={(event) => { setAddTextValue(event.target.value) }} />
            </Draggable>
        </div>
    );
}
export default AddText;