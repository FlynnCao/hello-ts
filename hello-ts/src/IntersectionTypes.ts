type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidge = Draggable & Resizable;
let textBox: UIWidge = {
  drag: () => {},
  resize: () => {},
};
