import React from "react";

const Navigation = (props) => {

  const nbPage = Math.ceil(Number(props.count) / Number(props.limit));
  const arr = [];
  for (let i = 0; i < nbPage; i++) {
    arr.push(i + 1);
  }

  return (
    <div className="navigation-bar">
      <span className="navigation-page" onClick={() => {
        const page = props.currentPage - 1;
        if (page > 1) {
          props.currentPageFunc(props.currentPage - 1);
        }
      }
      }>{"<"}</span>
      {
        arr.map((x, idx) => {
          const color = props.currentPage !== (x - 1) ? "" : "square-orange";
          console.log(props.currentPage + " VS " + x)
          return (
            <div className={color}>
              <span key={idx} className={"navigation-page " + color}
                onClick={
                  () => {
                    props.currentPageFunc(x - 1);
                    console.log(props.currentPage);
                  }
                }>{x}</span>
            </div>);
        })
      }
      <span className="navigation-page" onClick={() => {
        const page = props.currentPage + 1;
        if (page < nbPage) {
          props.currentPageFunc(props.currentPage + 1);
        }
      }}>{">"}</span>
    </div >
  )
}

export default Navigation;