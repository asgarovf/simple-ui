import React, { Fragment, useEffect, useRef, useState } from "react";
import "Components/SimpleSelect/SimpleSelect.style.scss";
import { useOutsideClick } from "hooks/useOutsideClick";
import { ReactComponent as Down } from "assets/icons/arrow-down.svg";

const SimpleSelect = ({ options, placeholder, isSearch }) => {
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, () => setIsVisible(false));

  const [value, setValue] = useState("");
  const [inputPlaceholder, setInputPlaceholder] = useState(placeholder || "");
  const [isVisible, setIsVisible] = useState(false);
  const [search, setSearch] = useState("");

  const searchOptions = options?.filter((item) =>
    item.value?.toUpperCase().includes(search?.toUpperCase())
  );

  const handleSelect = (value) => {
    setValue(value);
    setSearch("");
    setInputPlaceholder(value);
    setIsVisible(false);
  };

  const handleSearch = (e) => {
    setIsVisible(true);
    setSearch(e.target.value);
    setInputPlaceholder(e.target.value);
  };

  return (
    <div className="__simpleselect__select" ref={wrapperRef}>
      <div className="__simpleselect__inputWrapper">
        {isSearch ? (
          <input
            value={inputPlaceholder}
            className="__simpleselect__selectInput "
            onChange={(e) => handleSearch(e)}
          />
        ) : (
          <input
            value={inputPlaceholder}
            className="__simpleselect__selectInput __simpleselect__NoSearch"
            readOnly={true}
          />
        )}

        <div
          className="__simpleselect__selectIcon"
          onClick={() => setIsVisible(!isVisible)}
        >
          <Down
            width={20}
            height={20}
            className="__simpleselect__selectIconSvg"
          />
        </div>
      </div>

      <div className="__simpleselect__selectOptions">
        {search !== "" && isVisible ? (
          <Fragment>
            {searchOptions.length !== 0 ? (
              <Fragment>
                {searchOptions?.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleSelect(item.value)}
                    className={`__simpleselect__option ${
                      item.value === value ? "selected" : ""
                    }`}
                  >
                    {item.value}
                  </div>
                ))}
              </Fragment>
            ) : (
              <div className="__simpleselect__noResults">
                <span>No results</span>
              </div>
            )}
          </Fragment>
        ) : (
          <Fragment>
            {isVisible ? (
              <Fragment>
                {searchOptions?.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleSelect(item.value)}
                    className={`__simpleselect__option ${
                      item.value === value ? "selected" : ""
                    }`}
                  >
                    {item.value}
                  </div>
                ))}
              </Fragment>
            ) : null}
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default SimpleSelect;
