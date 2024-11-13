import { TIME_DISPLAYS } from "@/constants/format-date";
import moment from "moment";

export const formatDate = (date, formatType = TIME_DISPLAYS.DATE) => {
  if (!!!date) return;
  return moment(date).format(formatType);
};

export const formatPrice = (price, type = "vi-VN") => {
  if (!price) return;
  return price.toLocaleString(type);
};
