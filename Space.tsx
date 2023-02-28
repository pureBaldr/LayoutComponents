import { mixClass, gapMix, paddingyMix, paddingxMix  } from "@dadmor/pure-baldr-core";

type Props = {
  className?: string;
  size?: string;
}
export const Space: React.FC<Props> = ({ className = "", size = "" }) => {
  return (
    <div
      className={mixClass({
        "w-12 h-12": size === "xxl",
        "w-9 h-9": size === "xl",
        "w-1.5 h-1.5": size === "xs",
        [className]: true,
      })}
    ></div>
  );
};
