import HeadlessTippy from "@tippyjs/react/headless";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import productApi from "../../../../api/productApi";
import useDebounce from "../../../../hook/useDebounce";
import SearchWapper from "../../../Field/Popper/Wapper";
import style from "./formSearch.module.scss";
const FormSearch = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef();
  const [showResult, setShowResult] = useState({
    status: false,
    isValued: null,
  });

  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue === "") {
      setShowResult({ status: false, isValued: null });
    }
    setValue(inputValue);
  };
  const handleCLickDelete = () => {
    setValue("");
    setShowResult({ status: false, isValued: null });
    inputRef.current.focus();
  };
  const debounce = useDebounce(value, 500);
  useEffect(() => {
    const result = async () => {
      const res = await productApi.getSearch({ q: value });
      // setSearchResult(res.data);
      if (res.data && res.data?.length > 0) {
        setShowResult({ status: true, isValued: res.data });
      }
    };
    result();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounce]);
  // console.log(showResult);

  const handleSubmitForm = (e) => {
    if (value === "") {
      e.preventDefault();
    }
  };
  return (
    <div className={clsx(style.fSearch)}>
      <form action="/tim-kiem" method="GET">
        <label htmlFor="key">
          Nhập tên điện thoại, máy tính, phụ kiện... cần tìm
        </label>
        <input
          ref={inputRef}
          type="text"
          id="key"
          name="q"
          placeholder="Nhập tên điện thoại, máy tính, phụ kiện... cần tìm"
          autoComplete="off"
          maxLength="50"
          value={value}
          onChange={(e) => handleChange(e)}
        />
        {!(value === "") ? (
          <span
            className="icon-cance"
            id="icon-cance"
            title="Xóa"
            onClick={() => handleCLickDelete()}
          >
            ✕
          </span>
        ) : null}

        <button onClick={(e) => handleSubmitForm(e)}>Tìm</button>
      </form>
      <div
        className={clsx(
          style.fResult,
          showResult.status &&
            showResult.isValued &&
            showResult.isValued?.length > 0
            ? style.isActive
            : null
        )}
      >
        <div className={clsx(style.fContain)}>
          {showResult.isValued?.map((item, index) => (
            <div key={item.name}>
              <a href={`/${item.typeProduct}/${item.id}`}>{item.name}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormSearch;
{
  /* <HeadlessTippy
interactive
visible={showResult && searchResult?.length > 0}
placement="bottom"
render={(attrs) => (
  <div tabIndex="-1" {...attrs}>
    <SearchWapper className={style.fsResult}>
      <h4 className={style.fsrHeading}>Products</h4>
      {searchResult?.map((result) => (
        <Link
          to={`/products/${result.typeProduct}/${result.id}`}
          key={result.name}
          className={style.fsrProduct}
        >
          {result.name}
        </Link>
      ))}
    </SearchWapper>
  </div>
)}
onClickOutside={handleHideResult}
> */
}
