import { useRef, useReducer, CSSProperties } from "react";

const COLLAPSED = "collapsed";
const COLLAPSING = "collapsing";
const EXPANDING = "expanding";
const EXPANDED = "expanded";

const nextFrame = (callback: any) => {
  requestAnimationFrame(function () {
    requestAnimationFrame(callback);
  });
};

function reducer(state: any) {
  return state + 1;
}

type PropsType = {
  children: any;
  isShow: boolean;
  className?: any;
};

CollapseBody.defaultProps = {
  className: "transition-all duration-[250ms]",
};

function CollapseBody(props: PropsType) {
  const [__, forceUpdate] = useReducer(reducer, 0);

  const elementRef = useRef<HTMLDivElement>(null);
  const state = useRef({
    collapse: props.isShow ? EXPANDED : COLLAPSED,
    style: {
      height: props.isShow ? "" : "0px",
      visibility: props.isShow ? "" : "hidden",
    },
  }).current;

  const setCollapsed = () => {
    if (!elementRef.current) return;
    state.collapse = COLLAPSED;
    state.style = {
      height: "0px",
      visibility: "hidden",
    };
    forceUpdate();
  };

  const setCollapsing = () => {
    if (!elementRef.current) return;
    state.collapse = COLLAPSING;
    state.style = {
      height: getElementHeight(),
      visibility: "",
    };
    forceUpdate();
    nextFrame(() => {
      if (!elementRef.current) return;
      if (state.collapse !== COLLAPSING) return;
      state.style = {
        height: "0px",
        visibility: "",
      };
      forceUpdate();
    });
  };

  const setExpanding = () => {
    if (!elementRef.current) return;
    state.collapse = EXPANDING;
    nextFrame(() => {
      if (!elementRef.current) return;
      if (state.collapse !== EXPANDING) return;
      state.style = {
        height: getElementHeight(),
        visibility: "",
      };
      forceUpdate();
    });
  };

  const setExpanded = () => {
    if (!elementRef.current) return;
    state.collapse = EXPANDED;
    state.style = {
      height: "",
      visibility: "",
    };
    forceUpdate();
  };

  const getElementHeight = () => {
    if (elementRef.current) {
      return `${elementRef.current.scrollHeight}px`;
    }
    return "0px";
  };

  const onTransitionEnd = (element: any) => {
    if (
      element.target === elementRef.current &&
      element.propertyName === "height"
    ) {
      const styleHeight = element.target.style.height;

      switch (state.collapse) {
        case EXPANDING:
          if (styleHeight === "" || styleHeight === "0px") return;
          else setExpanded();
          break;
        case COLLAPSING:
          if (styleHeight === "" || styleHeight !== "0px") return;
          else setCollapsed();
          break;
        default:
          return;
      }
    }
  };
  const didOpen = state.collapse === EXPANDED || state.collapse === EXPANDING;
  if (!didOpen && props.isShow) {
    setExpanding();
  } else if (didOpen && !props.isShow) {
    setCollapsing();
  }
  const overflow = state.collapse === EXPANDED ? "" : "hidden";
  const computedStyle = {
    overflow,
    ...state.style,
  };

  return (
    <div
      ref={elementRef}
      style={computedStyle as CSSProperties}
      onTransitionEnd={onTransitionEnd}
      className={props.className}
    >
      {props.children}
    </div>
  );
}

export default CollapseBody;
