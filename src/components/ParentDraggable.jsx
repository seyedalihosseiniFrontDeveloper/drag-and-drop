import React from 'react';
import Draggable from './Draggable';
import DragGroup from './DragGroup';
import Droppable from './Droppable';

function ParentDraggable() {
    const [Colors, SetColor] = React.useState([
        {id: 1, text: 'Red'},
        {id: 2, text: 'Green'},
        {id: 3, text: 'Yellow'},
        {id: 4, text: 'Pink'},
        {id: 5, text: 'Blue'}]);
    const [WrapperColor, SetWrapperColor] = React.useState([]);
    const manageWrapperColorState = (item, monitor, state) => {
        if (state.find((each) => each.text === item.text)) return;
        SetWrapperColor((prev) => {
            const index = prev.findIndex((each) => each.text === item.text);
            const copy = [...prev];
            copy.splice(index, 1);
            return copy;
        });
        SetColor((prev) => {
            return [...prev, {text: item.text}];
        });
    };
    const manageWrapperColorChild = (item, monitor, state) => {
        if (state.find((each) => each.text === item.text)) return;
        SetColor((prev) => {
            const index = prev.findIndex((each) => each.text === item.text);
            const copy = [...prev];
            copy.splice(index, 1);
            return copy;
        });
        SetWrapperColor((prev) => {
            return [...prev, {text: item.text}];
        });
    };
    const handleDrag = (dragIndex, hoverIndex) => {
        SetColor((prev) => {
            const copy = [...prev];
            const card = copy[dragIndex];
            copy.splice(dragIndex, 1);
            copy.splice(hoverIndex, 0, card);
            return copy;
        });
    };

    return (
        <>
            <Droppable
                accept='drag-3'
                handleDrop={manageWrapperColorState}
                text='رنگ ها'
                state={Colors}
            >
                <DragGroup>
                    {Colors.map((drag, index) => (
                        <Draggable
                            key={index + 1}
                            type='drag-3'
                            index={index}
                            text={drag.text}
                            item={{text: drag.text}}
                            state={Colors}
                        />))}
                </DragGroup>
            </Droppable>
            <Droppable
                accept='drag-3'
                handleDrop={manageWrapperColorChild}
                text='محل قرار گرفتن باکس رنگ ها'
                state={WrapperColor}
            >
                <DragGroup>
                    {WrapperColor.map((drag, index) => (
                        <Draggable
                            key={index + 1}
                            type='drag-3'
                            index={index}
                            text={drag.text}
                            item={{text: drag.text}}
                            state={WrapperColor}
                            handleDrag={handleDrag}
                        />))}
                </DragGroup>
            </Droppable>
        </>
    );
}

export default ParentDraggable;
