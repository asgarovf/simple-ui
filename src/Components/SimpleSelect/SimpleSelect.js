import React, { Fragment, useState } from "react";
import "Components/SimpleSelect/style.scss";
import { cls } from "utils/cls";

const SimpleSelect = () => {
  const [value, setValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [search, setSearch] = useState("");

  const options = [
    { value: "option1" },
    { value: "option2" },
    { value: "option3" },
    { value: "option4" },
  ];

  const searchOptions = options?.filter((item) =>
    item.value?.toUpperCase().includes(search?.toUpperCase())
  );

  return (
    <div className="__simpleselect__select">
      <input
        className="__simpleselect__selectInput"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="__simpleselect__selectOptions">
        {search !== "" ? (
          <Fragment>
            {searchOptions.length !== 0 ? (
              <Fragment>
                {searchOptions?.map((item) => (
                  <div className="__simpleselect__option">{item.value}</div>
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
                {options?.map((item) => (
                  <div className="__simpleselect__option">{item.value}</div>
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
