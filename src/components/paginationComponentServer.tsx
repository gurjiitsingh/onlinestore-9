import Link from "next/link";
import React from "react";

const PaginationComponentServer = ({ limit, total, currentPage }) => {
  //  const currentUrl = location.href;
  //console.log(currentUrl);
  //console.log(global);
  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1;
  //console.log("Total --",total)
  //console.log("limit --",limit)
  // var showPrev = true;
  // var showNext = true;
  // if(pageNumber===1){
  //   showPrev = false;
  // }

  const PageTabs = ({ currentPage, total, limit }) => {
    //console.log("currentPage---- ", currentPage)
    //console.log("total---- ", total)
    let start = currentPage - 3;
    if (start < 0) start = 0;
    const totalPages = Math.ceil(total / limit);
    let totalPagesArray = [];
    for (let i = start; i < currentPage - 1; i++) {
      totalPagesArray.push(i + 1);
    }

    return (
      <>
        {currentPage > 1 ? (
          <Link
            href={{
              pathname: "http://localhost:3000/products",
              query: {
                page: prevPage,
              },
            }}
          >
            Back
          </Link>
        ) : null}

        <ul className="flex gap-2">
          {totalPagesArray.map((item, i) => {
            if (i < 6) {
              return (
                <li key={i} className="px-3 bg-slate-300 rounded-sm">
                  <Link
                    href={{
                      pathname: "http://localhost:3000/products",
                      query: {
                        page: item,
                      },
                    }}
                  >
                    {item}
                  </Link>
                </li>
              );
            }
            return;
          })}
        </ul>
      </>
    );
  };

  // back tab end

  const PageTabsNext = ({ currentPage, total, limit }) => {
    let start = currentPage + 1;
    const totalPages = Math.ceil(total / limit);
    let end; //=  (totalPages - (currentPage+3))? currentPage+3: 0;
   // console.log("totalPages---- ", totalPages);
   // console.log("+3,currentPage---- ", currentPage + 3);
    start = currentPage;
    end = currentPage + 2;
    // if(start=total)
    //   start = 0;
    console.log("start,end", start, end);

    let totalPagesArray = [];
    for (let i = start; i < end && i < totalPages; i++) {
      totalPagesArray.push(i + 1);
    }

    return (
      <>
        <ul className="flex gap-2">
          {totalPagesArray.map((item, i) => {
            if (i < 6) {
              return (
                <li key={i} className="px-3 bg-slate-300 rounded-sm">
                  {item}
                </li>
              );
            }
            return;
          })}
        </ul>
        {totalPages - currentPage ? (
          <Link
            href={{
              pathname: "http://localhost:3000/products",
              query: {
                page: nextPage,
              },
            }}
          >
            {" "}
            Next
          </Link>
        ) : null}
      </>
    );
  };

  //next tab end

  return (
    <div className="w-[400px] flex gap-1">
      <PageTabs currentPage={currentPage} total={total} limit={limit} />
      <div className="px-2 font-semibold">{currentPage}</div>
      <PageTabsNext currentPage={currentPage} total={total} limit={limit} />
    </div>
  );
};

export default PaginationComponentServer;
