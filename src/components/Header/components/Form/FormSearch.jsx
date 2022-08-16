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
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };
  const handleCLickDelete = () => {
    setValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };
  const debounce = useDebounce(value, 500);
  useEffect(() => {
    productApi
      .getSearch({
        q: value,
      })
      .then((res) => {
        setSearchResult(res.data);
      })
      .catch(() => {
        setShowResult(false);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounce]);
  // console.log(searchResult);
  const handleHideResult = () => {
    setShowResult(false);
  };
  const handleSubmitForm = (e) => {
    if (value === "") {
      e.preventDefault();
    }
  };
  return (
    <HeadlessTippy
      interactive
      visible={showResult && searchResult?.length > 0}
      render={(attrs) => (
        <div tabIndex="-1" {...attrs}>
          <SearchWapper className={style.fsResult}>
            <h4 className={style.fsrHeading}>Products</h4>
            {searchResult?.map((result) => (
              <Link
                to={`/products/${result.id}`}
                key={result.id}
                className={style.fsrProduct}
              >
                {result.name}
              </Link>
            ))}
          </SearchWapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
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
            onFocus={() => setShowResult(true)}
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
      </div>
    </HeadlessTippy>
  );
};

export default FormSearch;
