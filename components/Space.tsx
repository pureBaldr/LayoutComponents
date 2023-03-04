import { mixClass } from "@dadmor/pure-baldr-core";

type Props = {
  className?: string;
  size?: string;
};
export const Space: React.FC<Props> = ({ className = "", size = "md" }) => {
  /* todo: update this component to all core dimentions types */
  return (
    <div
      className={mixClass({
        "w-12 h-12": size === "2xl",
        "w-9 h-9": size === "xl",
        "w-6 h-6": size === "lg",
        "w-3 h-3": size === "md",
        "w-1.5 h-1.5": size === "sm",
        "w-0.5 h-0.5": size === "xs",
        [className]: true,
      })}
    ></div>
  );
};
