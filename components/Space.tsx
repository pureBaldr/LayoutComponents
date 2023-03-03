import { mixClass } from "@dadmor/pure-baldr-core";

type Props = {
  className?: string;
  size?: string;
}
export const Space: React.FC<Props> = ({ className = "", size = "" }) => {
  /* todo: update this component to all core dimentions types */
  return (
    <div
      className={mixClass({
        "w-12 h-12": size === "2xl",
        "w-9 h-9": size === "xl",
        "w-1.5 h-1.5": size === "xs",
        [className]: true,
      })}
    ></div>
  );
};
