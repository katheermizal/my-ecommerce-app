import React from "react";

/** import interface */
import { NotificationsProps } from "../../../shared/model/core.component.model";

/** primary UI component */
export const Notifications = ({message}:NotificationsProps) => {
 return (
  <div className="w-full px-2 py-2 mb-2 font-normal text-white text-14s bg-red">
   {message}
  </div>
 )
}