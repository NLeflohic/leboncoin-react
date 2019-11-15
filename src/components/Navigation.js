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
          return (<span key={idx} className="navigation-page" onClick={
            () => {
              props.currentPageFunc(x - 1);
            }
          }>{x}</span>);
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