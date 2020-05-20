import React from "react"
import { CreateLocalLink } from "../utils"
import UniversalLink from "./universalLinks"

const MenuItem = ({ menuItem, wordPressUrl }) => {
  return (
    <UniversalLink
      style={{ marginRight: "20px" }}
      to={CreateLocalLink(menuItem, wordPressUrl)}
    >
      {menuItem.label}
    </UniversalLink>
  )
}

export default MenuItem
