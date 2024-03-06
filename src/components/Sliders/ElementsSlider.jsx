import React from "react";

//? Router
import { NavLink } from "react-router-dom";

export default function ElementsSlider(props) {
  return (
    <div className="py-2">
      <div className="container">
        <div className="w-full overflow-auto m-auto flex items-center justify-start gap-2 md:gap-10 child:child:text-white child:child:py-2 child:child:px-4 child:child:rounded-lg hover:child:child:bg-[#ffffff1f] child:child:transition-all child:child:text-sm child:child:sm:text-base child:child:inline-block">
          {props.elemItems.map((el) => (
            <div key={el.id}>
              <NavLink
                className={(status) =>
                  `${status.isActive && "active-category"}`
                }
                to={el.path}
              >
                {el.title}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
