import React, { useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import BlockItem from "../BlockItem";
import { PhoneComponent } from "./style";

const Phone = ({ links }) => {
  return (
    <PhoneComponent>
      <div className="page-background">
        <DragDropContext
          onDragEnd={(...props) => {
            console.log(props);
          }}
        >
          <div className="block-list">
            <Droppable droppableId="droppable-1">
              {(provided, snapshot) => (
                <div
                  className="blocks-section"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {links.map((item, id) => (
                    <Draggable
                      key={item.id}
                      draggableId={"draggable-" + item.id}
                      index={item.id}
                    >
                      {(provided, snapshot) => (
                        <BlockItem
                          title={item.title}
                          link={item.link}
                          provided={provided}
                        />
                      )}
                    </Draggable>
                  ))}

                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </DragDropContext>
      </div>
    </PhoneComponent>
  );
};

export default Phone;
