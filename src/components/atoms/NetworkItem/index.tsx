import React, { FC, ReactElement } from "react";
import classnames from "classnames";

import "./style.scss";

type NetworkItemProps = {
  title: string;
  icon?: ReactElement;
  isActive: boolean;
  handleChange: () => void;
};

export const NetworkItem: FC<NetworkItemProps> = ({
  title,
  icon,
  isActive,
  handleChange,
}) => (
  <li className="network-item">
    <button
      type="button"
      className={classnames("network-item__trigger", {
        "network-item__trigger--active": isActive,
      })}
      onClick={handleChange}
    >
      {icon && <span className="network-item__icon">{icon}</span>}
      <span className="network-item__title">{title}</span>
    </button>
  </li>
);
