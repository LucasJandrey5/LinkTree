import React, { useEffect, useState } from "react";

import { BlockItemStyle } from "./style";
import { ReactComponent as DragIcon } from "../../images/drag.svg";
import { ReactComponent as PencilIcon } from "../../images/pencil.svg";
import { ReactComponent as TrashIcon } from "../../images/trash.svg";

const BlockItem = ({
  id,
  title,
  link,
  provided,
  handleDeleteLink,
  handleTextUpdate,
}) => {
  const [initialized, setInitialized] = useState(false);
  const [titleText, setTitleText] = useState(title);
  const [linkText, setLinkText] = useState(link);

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
      return;
    }

    const timeout = setTimeout(() => {
      handleTextUpdate(id, titleText, linkText);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [titleText, linkText]);

  return (
    <BlockItemStyle ref={provided.innerRef} {...provided.draggableProps}>
      <div className="div1" {...provided.dragHandleProps}>
        <DragIcon className="handleDrag" />
      </div>

      <div className="div2">
        <div>
          <label>Title: </label>
          <input
            type="text"
            value={titleText}
            onChange={(e) => setTitleText(e.target.value)}
          />
        </div>
        <div>
          <label>Url: </label>
          <input
            type="text"
            value={linkText}
            onChange={(e) => setLinkText(e.target.value)}
          />
        </div>
      </div>
      <div className="div3">
        <button onClick={handleDeleteLink}>
          <TrashIcon className="trashIcon" />
        </button>
      </div>
    </BlockItemStyle>
  );
};

export default BlockItem;
