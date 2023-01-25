import React, { useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import BlockItem from "../BlockItem";
import { PhoneComponent } from "./style";

import ProfileImg from "../../images/ProfileImg.png";
import { ReactComponent as PlusIcon } from "../../images/plus.svg";

const Phone = ({
  pageData,
  links,
  handleCreateNewLink,
  handleDeleteLink,
  handleOrderUpdateLink,
  handleTextUpdate,
  isLoading,
}) => {
  return (
    <PhoneComponent>
      <div className="page-background">
        <div className="page-presentation">
          <img src={ProfileImg} alt="Profile Photo" />
          <h1>{pageData.title}</h1>
        </div>

        <DragDropContext
          onDragEnd={(...props) => {
            handleOrderUpdateLink(props);
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
                      index={id}
                    >
                      {(provided, snapshot) => (
                        <BlockItem
                          id={item.id}
                          title={item.title}
                          link={item.link}
                          provided={provided}
                          handleDeleteLink={() => handleDeleteLink(item.id)}
                          handleTextUpdate={handleTextUpdate}
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

        <button className="new-link-box" onClick={() => handleCreateNewLink()}>
          <PlusIcon className="plus-icon" />
        </button>
      </div>
    </PhoneComponent>
  );
};

export default Phone;
